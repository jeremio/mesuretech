import { describe, expect, it } from 'vitest'
import { convert } from '../src/units/convert'
import { formatNumber, parseNumber, plainNumber } from '../src/units/format'
import { categories, categoryPath, getCategory, unitSymbol } from '../src/units/index'

function conv(categoryId: string, value: number, from: string, to: string): number {
  const result = convert(getCategory(categoryId)!, value, from, to)
  if (!result.ok)
    throw new Error(`${categoryId} ${value} ${from} -> ${to} : ${result.error}`)
  return result.value
}

describe('registre', () => {
  it('a des identifiants, slugs et chemins uniques', () => {
    const ids = categories.map(c => c.id)
    expect(new Set(ids).size).toBe(ids.length)
    for (const locale of ['fr', 'en'] as const) {
      const paths = categories.map(c => categoryPath(c, locale))
      expect(new Set(paths).size).toBe(paths.length)
    }
  })

  for (const category of categories) {
    describe(category.id, () => {
      it('a une unité de base de facteur 1 et une paire par défaut valide', () => {
        const base = category.units.find(u => u.id === category.baseUnit)
        expect(base?.factor).toBe(1)
        for (const id of category.defaultPair)
          expect(category.units.some(u => u.id === id)).toBe(true)
      })

      it('a des unités uniques, nommées et symbolisées dans les deux langues', () => {
        const ids = category.units.map(u => u.id)
        expect(new Set(ids).size).toBe(ids.length)
        for (const locale of ['fr', 'en'] as const) {
          const symbols = category.units.map(u => unitSymbol(u, locale))
          expect(new Set(symbols).size).toBe(symbols.length)
          for (const u of category.units)
            expect(u.name[locale].length).toBeGreaterThan(0)
        }
      })

      it('chaque unité a soit un facteur, soit une paire de fonctions', () => {
        for (const u of category.units) {
          const hasFactor = typeof u.factor === 'number' && u.factor > 0
          const hasFunctions = typeof u.toBase === 'function' && typeof u.fromBase === 'function'
          expect(hasFactor !== hasFunctions).toBe(true)
        }
      })

      it('revient à la valeur de départ après un aller-retour, pour toutes les paires', () => {
        const value = category.id === 'temperature' ? 300 : 7.3
        for (const a of category.units) {
          for (const b of category.units) {
            const there = conv(category.id, value, a.id, b.id)
            const back = conv(category.id, there, b.id, a.id)
            expect(back).toBeCloseTo(value, 9)
          }
        }
      })
    })
  }
})

describe('valeurs exactes', () => {
  const cases: [string, number, string, string, number][] = [
    ['length', 1, 'inch', 'centimeter', 2.54],
    ['length', 1, 'mile', 'meter', 1609.344],
    ['length', 1, 'meter', 'foot', 3.280839895013123],
    ['length', 3, 'foot', 'yard', 1],
    ['length', 1, 'nautical_mile', 'kilometer', 1.852],
    ['mass', 1, 'pound', 'gram', 453.59237],
    ['mass', 1, 'pound', 'ounce', 16],
    ['mass', 1, 'stone', 'pound', 14],
    ['temperature', 0, 'celsius', 'fahrenheit', 32],
    ['temperature', 100, 'celsius', 'fahrenheit', 212],
    ['temperature', -40, 'celsius', 'fahrenheit', -40],
    ['temperature', 0, 'kelvin', 'celsius', -273.15],
    ['temperature', 0, 'celsius', 'rankine', 491.67],
    ['volume', 1, 'us_gallon', 'liter', 3.785411784],
    ['volume', 1, 'uk_gallon', 'liter', 4.54609],
    ['volume', 1, 'us_cup', 'us_fluid_ounce', 8],
    ['volume', 1, 'us_tablespoon', 'us_teaspoon', 3],
    ['volume', 1, 'oil_barrel', 'us_gallon', 42],
    ['area', 1, 'hectare', 'are', 100],
    ['area', 1, 'acre', 'square_foot', 43560],
    ['speed', 36, 'kilometers_per_hour', 'meters_per_second', 10],
    ['speed', 1, 'knot', 'kilometers_per_hour', 1.852],
    ['time', 1, 'day', 'second', 86400],
    ['time', 1, 'year', 'day', 365.2425],
    ['data', 1, 'gibibyte', 'byte', 1073741824],
    ['data', 1, 'tebibyte', 'byte', 1099511627776],
    ['data', 1, 'gigabit', 'megabyte', 125],
    ['energy', 1, 'kilowatt_hour', 'megajoule', 3.6],
    ['energy', 1, 'kilocalorie', 'kilojoule', 4.184],
    ['pressure', 1, 'atmosphere', 'torr', 760],
    ['pressure', 1, 'mmhg', 'pascal', 133.322387415],
    ['pressure', 1, 'hectopascal', 'millibar', 1],
    ['power', 1, 'metric_horsepower', 'watt', 735.49875],
    ['angle', 180, 'degree', 'radian', Math.PI],
    ['angle', 1, 'turn', 'gradian', 400],
    ['fuel', 100, 'km_per_liter', 'liters_per_100km', 1],
    ['length', 1, 'scandinavian_mile', 'kilometer', 10],
    ['length', 1, 'fathom', 'foot', 6],
    ['length', 1, 'furlong', 'yard', 220],
    ['length', 1000, 'thou', 'inch', 1],
    ['length', 3937, 'us_survey_foot', 'meter', 1200],
    ['length', 1, 'parsec', 'light_year', 3.2615637771674333],
    ['mass', 1, 'troy_ounce', 'gram', 31.1034768],
    ['mass', 7000, 'grain', 'pound', 1],
    ['mass', 1, 'metric_pound', 'gram', 500],
    ['mass', 1, 'long_hundredweight', 'pound', 112],
    ['mass', 1, 'short_hundredweight', 'pound', 100],
    ['volume', 1, 'uk_pint', 'milliliter', 568.26125],
    ['volume', 1, 'us_pint', 'milliliter', 473.176473],
    ['volume', 1, 'us_dry_pint', 'liter', 0.5506104713575],
    ['volume', 1, 'us_legal_cup', 'milliliter', 240],
    ['volume', 1, 'cup_metric', 'milliliter', 250],
    ['volume', 1, 'tablespoon_australian', 'teaspoon_metric', 4],
    ['volume', 1, 'us_gallon', 'cubic_inch', 231],
    ['volume', 1, 'stere', 'cubic_meter', 1],
    ['area', 1, 'centiare', 'square_meter', 1],
    ['time', 1, 'julian_year', 'day', 365.25],
    ['time', 1, 'common_year', 'day', 365],
    ['time', 1, 'fortnight', 'day', 14],
    ['energy', 1, 'calorie_it', 'joule', 4.1868],
    ['energy', 1, 'terawatt_hour', 'kilowatt_hour', 1e9],
    ['energy', 1, 'therm', 'megajoule', 105.4804],
    ['pressure', 1, 'technical_atmosphere', 'bar', 0.980665],
    ['power', 1, 'ton_of_refrigeration', 'btu_per_hour', 12000],
    ['power', 1, 'electrical_horsepower', 'watt', 746],
    ['angle', 6400, 'nato_mil', 'degree', 360],
    ['force', 1, 'kilogram_force', 'newton', 9.80665],
    ['force', 1, 'kip', 'pound_force', 1000],
    ['frequency', 3000, 'revolutions_per_minute', 'hertz', 50],
    ['frequency', 50, 'hertz', 'radians_per_second', 314.1592653589793],
    ['speed', 1, 'speed_of_light', 'kilometers_per_second', 299792.458],
  ]
  for (const [category, value, from, to, expected] of cases) {
    it(`${value} ${from} = ${expected} ${to}`, () => {
      expect(conv(category, value, from, to)).toBeCloseTo(expected, 9)
    })
  }

  it('1 To vendu fait environ 931 Gio', () => {
    expect(conv('data', 1, 'terabyte', 'gibibyte')).toBeCloseTo(931.3225746154785, 9)
  })

  it('5 L/100 km font environ 47 mpg US et 56,5 mpg UK', () => {
    expect(conv('fuel', 5, 'liters_per_100km', 'mpg_us')).toBeCloseTo(47.04, 2)
    expect(conv('fuel', 5, 'liters_per_100km', 'mpg_uk')).toBeCloseTo(56.50, 2)
  })
})

describe('domaine de validité', () => {
  const temperature = getCategory('temperature')!
  const fuel = getCategory('fuel')!

  it('refuse une température sous le zéro absolu', () => {
    expect(convert(temperature, -300, 'celsius', 'kelvin')).toEqual({ ok: false, error: 'out_of_range' })
    expect(convert(temperature, -1, 'kelvin', 'celsius')).toEqual({ ok: false, error: 'out_of_range' })
  })

  it('accepte exactement le zéro absolu', () => {
    expect(convert(temperature, -273.15, 'celsius', 'kelvin').ok).toBe(true)
    expect(convert(temperature, -459.67, 'fahrenheit', 'kelvin').ok).toBe(true)
  })

  it('refuse une consommation nulle ou négative', () => {
    expect(convert(fuel, 0, 'mpg_us', 'liters_per_100km').ok).toBe(false)
    expect(convert(fuel, -5, 'liters_per_100km', 'mpg_us').ok).toBe(false)
  })

  it('accepte les longueurs négatives (écarts) et refuse une unité inconnue', () => {
    expect(conv('length', -2, 'meter', 'centimeter')).toBe(-200)
    expect(convert(getCategory('length')!, 1, 'meter', 'smoot')).toEqual({ ok: false, error: 'unknown_unit' })
  })
})

describe('formatage', () => {
  it('affiche zéro simplement', () => {
    expect(formatNumber(0, 'fr')).toBe('0')
  })

  it('masque le bruit des flottants', () => {
    expect(formatNumber(0.1 * 3, 'en')).toBe('0.3')
    expect(formatNumber(1.0000000000000002, 'fr')).toBe('1')
  })

  it('suit les conventions de la langue', () => {
    expect(formatNumber(1609.344, 'fr')).toBe('1 609,344')
    expect(formatNumber(1609.344, 'en')).toBe('1,609.344')
  })

  it('garde les entiers exacts jusqu\'à 15 chiffres', () => {
    expect(formatNumber(1099511627776, 'en')).toBe('1,099,511,627,776')
  })

  it('limite les décimales à 10 chiffres significatifs', () => {
    expect(formatNumber(1 / 0.3048, 'fr')).toBe('3,280839895')
    expect(formatNumber(1e12 / 2 ** 30, 'en')).toBe('931.3225746')
  })

  it('passe en notation scientifique aux extrêmes', () => {
    expect(formatNumber(1.5e18, 'fr')).toBe('1,5 × 10¹⁸')
    expect(formatNumber(1.602176634e-19, 'en')).toBe('1.602176634 × 10⁻¹⁹')
  })

  it('copie une valeur brute sans séparateur de milliers', () => {
    expect(plainNumber(1609.344, 'fr')).toBe('1609,344')
    expect(plainNumber(1609.344, 'en')).toBe('1609.344')
  })
})

describe('saisie', () => {
  it.each([
    ['2,5', 2.5],
    ['2.5', 2.5],
    ['1 234,5', 1234.5],
    ['1,234.5', 1234.5],
    ['1.234,5', 1234.5],
    ['-40', -40],
    ['−40', -40],
    ['1e3', 1000],
    ['.5', 0.5],
  ])('lit « %s »', (input, expected) => {
    expect(parseNumber(input)).toBe(expected)
  })

  it('distingue vide et invalide', () => {
    expect(parseNumber('   ')).toBeNull()
    expect(parseNumber('abc')).toBeNaN()
    expect(parseNumber('1,2,3')).toBeNaN()
  })
})
