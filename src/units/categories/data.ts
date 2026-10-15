import type { Category, Unit } from '../types'
import { unit } from '../define'

/** Octet décimal (ko, Mo…) ou binaire (Kio, Mio…), avec symbole français et anglais */
function bytes(id: string, fr: [string, string], en: [string, string], factor: number): Unit {
  return unit(id, { fr: fr[0], en: en[0] }, fr[1], en[1], 'other', factor)
}

export const data: Category = {
  id: 'data',
  name: { fr: 'Données informatiques', en: 'Digital storage' },
  slug: { fr: 'donnees', en: 'data' },
  icon: 'database',
  color: '#14b8a6',
  baseUnit: 'byte',
  defaultPair: ['terabyte', 'gibibyte'],
  units: [
    unit('bit', 'bit', 'Bit', 'Bit', 'si', 1 / 8),
    unit('kilobit', 'kbit', 'Kilobit', 'Kilobit', 'si', 1e3 / 8),
    unit('megabit', 'Mbit', 'Mégabit', 'Megabit', 'si', 1e6 / 8),
    unit('gigabit', 'Gbit', 'Gigabit', 'Gigabit', 'si', 1e9 / 8),
    bytes('byte', ['o', 'Octet'], ['B', 'Byte'], 1),
    bytes('kilobyte', ['ko', 'Kilooctet'], ['kB', 'Kilobyte'], 1e3),
    bytes('megabyte', ['Mo', 'Mégaoctet'], ['MB', 'Megabyte'], 1e6),
    bytes('gigabyte', ['Go', 'Gigaoctet'], ['GB', 'Gigabyte'], 1e9),
    bytes('terabyte', ['To', 'Téraoctet'], ['TB', 'Terabyte'], 1e12),
    bytes('petabyte', ['Po', 'Pétaoctet'], ['PB', 'Petabyte'], 1e15),
    bytes('exabyte', ['Eo', 'Exaoctet'], ['EB', 'Exabyte'], 1e18),
    bytes('kibibyte', ['Kio', 'Kibioctet'], ['KiB', 'Kibibyte'], 2 ** 10),
    bytes('mebibyte', ['Mio', 'Mébioctet'], ['MiB', 'Mebibyte'], 2 ** 20),
    bytes('gibibyte', ['Gio', 'Gibioctet'], ['GiB', 'Gibibyte'], 2 ** 30),
    bytes('tebibyte', ['Tio', 'Tébioctet'], ['TiB', 'Tebibyte'], 2 ** 40),
    bytes('pebibyte', ['Pio', 'Pébioctet'], ['PiB', 'Pebibyte'], 2 ** 50),
    bytes('exbibyte', ['Eio', 'Exbioctet'], ['EiB', 'Exbibyte'], 2 ** 60),
  ],
  intro: {
    fr: 'Convertissez bits et octets, en préfixes décimaux (ko, Mo, Go) ou binaires (Kio, Mio, Gio).',
    en: 'Convert bits and bytes, with decimal prefixes (kB, MB, GB) or binary prefixes (KiB, MiB, GiB).',
  },
  notes: {
    fr: [
      'Deux conventions coexistent. Les fabricants de disques utilisent les préfixes décimaux : 1 To = 1 000 000 000 000 octets. Windows compte en binaire (1 Gio = 1 073 741 824 octets) tout en affichant « Go ».',
      'C\'est pourquoi un disque vendu « 1 To » apparaît comme « 931 Go » sous Windows : il fait en réalité 931 Gio.',
      'Les débits réseau s\'expriment en bits : une connexion à 1 Gbit/s transfère au mieux 125 Mo par seconde.',
      'Attention à la majuscule : « b » est le bit et « B » l\'octet en anglais (byte). 100 Mb/s (mégabits) font 12,5 MB/s (mégaoctets). En français, l\'octet s\'écrit « o » : Mo, Go.',
    ],
    en: [
      'Two conventions coexist. Drive makers use decimal prefixes: 1 TB = 1,000,000,000,000 bytes. Windows counts in binary (1 GiB = 1,073,741,824 bytes) while displaying "GB".',
      'That is why a drive sold as "1 TB" shows up as "931 GB" in Windows: it is actually 931 GiB.',
      'Network speeds are given in bits: a 1 Gbit/s connection transfers at most 125 MB per second.',
      'Mind the case: "b" is a bit and "B" a byte. 100 Mb/s (megabits) is 12.5 MB/s (megabytes).',
    ],
  },
}
