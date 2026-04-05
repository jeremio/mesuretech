export function getPhysicalQuantitiesContent() {
  return `
    <h3 id="definition">What is a physical quantity?</h3>
    <p>
      A <strong>physical quantity</strong> is a measurable characteristic of a phenomenon, body or substance.
      It is the abstract idea of what you want to quantify, regardless of the unit used to express it.
    </p>

    <div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-4 rounded">
      <p class="font-medium">Key takeaway:</p>
      <ul class="mt-2">
        <li>Physical quantities describe <em>what</em> is measured (length, mass, time...)</li>
        <li>Units of measurement define <em>how</em> it is measured (meter, kilogram, second...)</li>
      </ul>
    </div>

    <p>Physical quantities have two essential characteristics:</p>
    <ul>
      <li>They represent the "nature" of what is measured (e.g. the length of a table, the mass of an apple).</li>
      <li>They are independent of the measurement system chosen. The temperature of a room is a physical quantity, whether measured in Celsius or Fahrenheit.</li>
    </ul>

    <h3 id="fondamentales">The 7 fundamental quantities</h3>
    <p>
      These quantities are considered independent of each other and form the basis of the International System of Units (SI).
      All other quantities can be derived from these fundamental quantities.
    </p>

    <div class="overflow-x-auto my-4">
      <table class="min-w-full bg-white border border-gray-300">
        <thead class="bg-gray-100">
          <tr>
            <th class="px-4 py-2 border-b">Quantity</th>
            <th class="px-4 py-2 border-b">Symbol</th>
            <th class="px-4 py-2 border-b">SI Unit</th>
            <th class="px-4 py-2 border-b">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="px-4 py-2 border-b font-medium">Length</td>
            <td class="px-4 py-2 border-b">L</td>
            <td class="px-4 py-2 border-b">meter (m)</td>
            <td class="px-4 py-2 border-b">Distance between two points</td>
          </tr>
          <tr>
            <td class="px-4 py-2 border-b font-medium">Mass</td>
            <td class="px-4 py-2 border-b">M</td>
            <td class="px-4 py-2 border-b">kilogram (kg)</td>
            <td class="px-4 py-2 border-b">Resistance of a body to acceleration (inertia)</td>
          </tr>
          <tr>
            <td class="px-4 py-2 border-b font-medium">Time</td>
            <td class="px-4 py-2 border-b">T</td>
            <td class="px-4 py-2 border-b">second (s)</td>
            <td class="px-4 py-2 border-b">Duration of a phenomenon</td>
          </tr>
          <tr>
            <td class="px-4 py-2 border-b font-medium">Electric current</td>
            <td class="px-4 py-2 border-b">I</td>
            <td class="px-4 py-2 border-b">ampere (A)</td>
            <td class="px-4 py-2 border-b">Flow of electric charges</td>
          </tr>
          <tr>
            <td class="px-4 py-2 border-b font-medium">Temperature</td>
            <td class="px-4 py-2 border-b">Θ</td>
            <td class="px-4 py-2 border-b">kelvin (K)</td>
            <td class="px-4 py-2 border-b">Level of thermal agitation</td>
          </tr>
          <tr>
            <td class="px-4 py-2 border-b font-medium">Amount of substance</td>
            <td class="px-4 py-2 border-b">N</td>
            <td class="px-4 py-2 border-b">mole (mol)</td>
            <td class="px-4 py-2 border-b">Number of elementary entities</td>
          </tr>
          <tr>
            <td class="px-4 py-2 border-b font-medium">Luminous intensity</td>
            <td class="px-4 py-2 border-b">Iv</td>
            <td class="px-4 py-2 border-b">candela (cd)</td>
            <td class="px-4 py-2 border-b">Luminous power emitted</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 id="derivees">Derived quantities</h3>
    <p>
      These quantities are defined from fundamental quantities through mathematical relationships.
      Here are some important examples:
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
      <div class="bg-white border rounded-lg p-4 shadow-sm">
        <h4 class="font-medium text-blue-700 mb-2">Area</h4>
        <p>Two-dimensional space occupied by a figure.</p>
        <div class="mt-2 text-sm bg-gray-50 p-2 rounded">
          <p><strong>SI Unit</strong>: square meter (m²)</p>
          <p><strong>Formula</strong>: Length × Width</p>
        </div>
      </div>

      <div class="bg-white border rounded-lg p-4 shadow-sm">
        <h4 class="font-medium text-blue-700 mb-2">Volume</h4>
        <p>Three-dimensional space occupied by a body.</p>
        <div class="mt-2 text-sm bg-gray-50 p-2 rounded">
          <p><strong>SI Unit</strong>: cubic meter (m³)</p>
          <p><strong>Formula</strong>: Length × Width × Height</p>
        </div>
      </div>

      <div class="bg-white border rounded-lg p-4 shadow-sm">
        <h4 class="font-medium text-blue-700 mb-2">Speed</h4>
        <p>Rate of change of an object's position.</p>
        <div class="mt-2 text-sm bg-gray-50 p-2 rounded">
          <p><strong>SI Unit</strong>: meter per second (m/s)</p>
          <p><strong>Formula</strong>: Distance ÷ Time</p>
        </div>
      </div>

      <div class="bg-white border rounded-lg p-4 shadow-sm">
        <h4 class="font-medium text-blue-700 mb-2">Force</h4>
        <p>Interaction that changes the state of motion of an object.</p>
        <div class="mt-2 text-sm bg-gray-50 p-2 rounded">
          <p><strong>SI Unit</strong>: newton (N)</p>
          <p><strong>Formula</strong>: Mass × Acceleration</p>
        </div>
      </div>

      <div class="bg-white border rounded-lg p-4 shadow-sm">
        <h4 class="font-medium text-blue-700 mb-2">Pressure</h4>
        <p>Force exerted per unit area.</p>
        <div class="mt-2 text-sm bg-gray-50 p-2 rounded">
          <p><strong>SI Unit</strong>: pascal (Pa)</p>
          <p><strong>Formula</strong>: Force ÷ Area</p>
        </div>
      </div>

      <div class="bg-white border rounded-lg p-4 shadow-sm">
        <h4 class="font-medium text-blue-700 mb-2">Energy</h4>
        <p>Capacity to produce work or heat transfer.</p>
        <div class="mt-2 text-sm bg-gray-50 p-2 rounded">
          <p><strong>SI Unit</strong>: joule (J)</p>
          <p><strong>Formula</strong>: Force × Distance</p>
        </div>
      </div>
    </div>

    <h3 id="applications">Practical applications</h3>
    <p>
      Understanding physical quantities is fundamental in many fields:
    </p>

    <ul>
      <li><strong>Science and engineering</strong>: Design, analysis and problem solving</li>
      <li><strong>Medicine</strong>: Measuring physiological parameters such as blood pressure</li>
      <li><strong>Commerce</strong>: Measuring quantities of goods (mass, volume)</li>
      <li><strong>Everyday life</strong>: Cooking (volumes, masses), construction (lengths, areas)</li>
    </ul>

    <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-4 rounded">
      <p class="font-medium">Good to know:</p>
      <p class="mt-1">Each physical quantity has a unique dimension that characterizes it. For example, all length quantities have the dimension [L], while speeds have the dimension [L]/[T].</p>
    </div>
  `
}

export function getMeasurementUnitsContent() {
  return `
    <div class="prose prose-blue max-w-none">
      <h3>What is a unit of measurement?</h3>
      <p>
        A <strong>unit of measurement</strong> is a standard reference quantity, defined and internationally accepted, used to express the numerical value of a physical quantity.
      </p>

      <p>The essential characteristics of units of measurement:</p>
      <ul>
        <li>They give numerical meaning to the quantity (e.g. "2 meters" rather than just "2").</li>
        <li>They are references established by convention (e.g. the meter, the kilogram, the second).</li>
        <li>They allow comparison of different measurements of the same quantity.</li>
        <li>A measurement is always expressed as a number followed by its unit.</li>
      </ul>

      <h3>Common units by quantity</h3>

      <h4>Length</h4>
      <ul>
        <li><strong>Meter (m)</strong>: SI base unit.</li>
        <li><strong>Kilometer (km)</strong>: 1,000 meters.</li>
        <li><strong>Centimeter (cm)</strong>: 0.01 meter.</li>
        <li><strong>Millimeter (mm)</strong>: 0.001 meter.</li>
        <li><strong>Micrometer (µm)</strong>: 0.000001 meter. Used in biology and microfabrication.</li>
        <li><strong>Nanometer (nm)</strong>: 0.000000001 meter. Used in atomic physics and semiconductors.</li>
        <li><strong>Inch (in)</strong>: Imperial unit, approximately 2.54 cm.</li>
        <li><strong>Foot (ft)</strong>: 12 inches, approximately 30.48 cm.</li>
        <li><strong>Yard (yd)</strong>: 3 feet, approximately 0.914 m.</li>
        <li><strong>Mile (mi)</strong>: 1,760 yards, approximately 1.609 km.</li>
        <li><strong>Nautical mile (nmi)</strong>: 1,852 meters. Used in maritime and aviation navigation.</li>
      </ul>

      <h4>Mass</h4>
      <ul>
        <li><strong>Kilogram (kg)</strong>: SI base unit.</li>
        <li><strong>Gram (g)</strong>: 0.001 kilogram.</li>
        <li><strong>Milligram (mg)</strong>: 0.000001 kilogram.</li>
        <li><strong>Metric ton (t)</strong>: 1,000 kilograms.</li>
        <li><strong>Pound (lb)</strong>: Imperial unit, approximately 0.453 kg.</li>
        <li><strong>Ounce (oz)</strong>: 1/16 of a pound, approximately 28.35 g.</li>
      </ul>

      <h4>Time</h4>
      <ul>
        <li><strong>Second (s)</strong>: SI base unit.</li>
        <li><strong>Minute (min)</strong>: 60 seconds.</li>
        <li><strong>Hour (h)</strong>: 60 minutes.</li>
        <li><strong>Day (d)</strong>: 24 hours.</li>
        <li><strong>Year (yr)</strong>: Approximately 365.25 days.</li>
      </ul>

      <h4>Temperature</h4>
      <ul>
        <li><strong>Kelvin (K)</strong>: SI base unit (0 K = -273.15 °C).</li>
        <li><strong>Degree Celsius (°C)</strong>: Most common unit in Europe.</li>
        <li><strong>Degree Fahrenheit (°F)</strong>: Common unit in the United States.</li>
      </ul>

      <h4>Area</h4>
      <ul>
        <li><strong>Square meter (m²)</strong>: SI unit of area.</li>
        <li><strong>Square kilometer (km²)</strong>: 1,000,000 m².</li>
        <li><strong>Hectare (ha)</strong>: 10,000 m². Used for agricultural land.</li>
        <li><strong>Acre (ac)</strong>: Imperial unit, approximately 4,047 m².</li>
        <li><strong>Square foot (ft²)</strong>: Approximately 0.093 m².</li>
        <li><strong>Square inch (in²)</strong>: Approximately 6.45 cm².</li>
      </ul>

      <h4>Volume</h4>
      <ul>
        <li><strong>Cubic meter (m³)</strong>: SI unit of volume.</li>
        <li><strong>Liter (L)</strong>: 0.001 m³. Most common everyday unit.</li>
        <li><strong>Deciliter (dL)</strong>: 0.1 liter. Common in recipes and nutrition.</li>
        <li><strong>Centiliter (cL)</strong>: 0.01 liter. Used for beverages.</li>
        <li><strong>Milliliter (mL)</strong>: 0.001 liter. Used in medicine and chemistry.</li>
      </ul>

      <h4>Speed</h4>
      <ul>
        <li><strong>Meter per second (m/s)</strong>: SI unit of speed.</li>
        <li><strong>Kilometer per hour (km/h)</strong>: Common unit for road traffic.</li>
        <li><strong>Mile per hour (mph)</strong>: Imperial unit for road speed.</li>
        <li><strong>Foot per second (ft/s)</strong>: Used in aeronautics and ballistics.</li>
        <li><strong>Knot (kn)</strong>: 1 nautical mile per hour. Used in maritime and aviation navigation.</li>
      </ul>

      <h4>Computer Data</h4>
      <ul>
        <li><strong>Bit (b)</strong>: Smallest unit of information (0 or 1).</li>
        <li><strong>Byte (B)</strong>: 8 bits. Base unit of storage.</li>
        <li><strong>Kilobyte (KB)</strong>: 1,000 bytes.</li>
        <li><strong>Megabyte (MB)</strong>: 1,000,000 bytes.</li>
        <li><strong>Gigabyte (GB)</strong>: 1,000,000,000 bytes.</li>
        <li><strong>Terabyte (TB)</strong>: 1,000,000,000,000 bytes.</li>
        <li><strong>Petabyte (PB)</strong>: 1,000,000,000,000,000 bytes.</li>
        <li><strong>Exabyte (EB)</strong>: 1,000,000,000,000,000,000 bytes.</li>
      </ul>
    </div>
  `
}

export function getSIPrefixesContent() {
  return `
    <div class="prose prose-blue max-w-none">
      <h3>International System Prefixes</h3>
      <p>
        SI prefixes are decimal multipliers used with units of measurement to form multiples or submultiples of base units. They are essential for expressing very large or very small quantities concisely.
      </p>

      <div class="overflow-x-auto">
        <table class="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th class="px-4 py-2 border-b">Prefix</th>
              <th class="px-4 py-2 border-b">Symbol</th>
              <th class="px-4 py-2 border-b">Factor</th>
              <th class="px-4 py-2 border-b">Power of 10</th>
            </tr>
          </thead>
          <tbody>
            <tr><td class="px-4 py-2 border-b">Quetta</td><td class="px-4 py-2 border-b">Q</td><td class="px-4 py-2 border-b">1,000,000,000,000,000,000,000,000,000,000</td><td class="px-4 py-2 border-b">10³⁰</td></tr>
            <tr><td class="px-4 py-2 border-b">Ronna</td><td class="px-4 py-2 border-b">R</td><td class="px-4 py-2 border-b">1,000,000,000,000,000,000,000,000,000</td><td class="px-4 py-2 border-b">10²⁷</td></tr>
            <tr><td class="px-4 py-2 border-b">Yotta</td><td class="px-4 py-2 border-b">Y</td><td class="px-4 py-2 border-b">1,000,000,000,000,000,000,000,000</td><td class="px-4 py-2 border-b">10²⁴</td></tr>
            <tr><td class="px-4 py-2 border-b">Zetta</td><td class="px-4 py-2 border-b">Z</td><td class="px-4 py-2 border-b">1,000,000,000,000,000,000,000</td><td class="px-4 py-2 border-b">10²¹</td></tr>
            <tr><td class="px-4 py-2 border-b">Exa</td><td class="px-4 py-2 border-b">E</td><td class="px-4 py-2 border-b">1,000,000,000,000,000,000</td><td class="px-4 py-2 border-b">10¹⁸</td></tr>
            <tr><td class="px-4 py-2 border-b">Peta</td><td class="px-4 py-2 border-b">P</td><td class="px-4 py-2 border-b">1,000,000,000,000,000</td><td class="px-4 py-2 border-b">10¹⁵</td></tr>
            <tr><td class="px-4 py-2 border-b">Tera</td><td class="px-4 py-2 border-b">T</td><td class="px-4 py-2 border-b">1,000,000,000,000</td><td class="px-4 py-2 border-b">10¹²</td></tr>
            <tr><td class="px-4 py-2 border-b">Giga</td><td class="px-4 py-2 border-b">G</td><td class="px-4 py-2 border-b">1,000,000,000</td><td class="px-4 py-2 border-b">10⁹</td></tr>
            <tr><td class="px-4 py-2 border-b">Mega</td><td class="px-4 py-2 border-b">M</td><td class="px-4 py-2 border-b">1,000,000</td><td class="px-4 py-2 border-b">10⁶</td></tr>
            <tr><td class="px-4 py-2 border-b">kilo</td><td class="px-4 py-2 border-b">k</td><td class="px-4 py-2 border-b">1,000</td><td class="px-4 py-2 border-b">10³</td></tr>
            <tr><td class="px-4 py-2 border-b">hecto</td><td class="px-4 py-2 border-b">h</td><td class="px-4 py-2 border-b">100</td><td class="px-4 py-2 border-b">10²</td></tr>
            <tr><td class="px-4 py-2 border-b">deca</td><td class="px-4 py-2 border-b">da</td><td class="px-4 py-2 border-b">10</td><td class="px-4 py-2 border-b">10¹</td></tr>
            <tr><td class="px-4 py-2 border-b">(Base unit)</td><td class="px-4 py-2 border-b"></td><td class="px-4 py-2 border-b">1</td><td class="px-4 py-2 border-b">10⁰</td></tr>
            <tr><td class="px-4 py-2 border-b">deci</td><td class="px-4 py-2 border-b">d</td><td class="px-4 py-2 border-b">0.1</td><td class="px-4 py-2 border-b">10⁻¹</td></tr>
            <tr><td class="px-4 py-2 border-b">centi</td><td class="px-4 py-2 border-b">c</td><td class="px-4 py-2 border-b">0.01</td><td class="px-4 py-2 border-b">10⁻²</td></tr>
            <tr><td class="px-4 py-2 border-b">milli</td><td class="px-4 py-2 border-b">m</td><td class="px-4 py-2 border-b">0.001</td><td class="px-4 py-2 border-b">10⁻³</td></tr>
            <tr><td class="px-4 py-2 border-b">micro</td><td class="px-4 py-2 border-b">µ</td><td class="px-4 py-2 border-b">0.000001</td><td class="px-4 py-2 border-b">10⁻⁶</td></tr>
            <tr><td class="px-4 py-2 border-b">nano</td><td class="px-4 py-2 border-b">n</td><td class="px-4 py-2 border-b">0.000000001</td><td class="px-4 py-2 border-b">10⁻⁹</td></tr>
            <tr><td class="px-4 py-2 border-b">pico</td><td class="px-4 py-2 border-b">p</td><td class="px-4 py-2 border-b">0.000000000001</td><td class="px-4 py-2 border-b">10⁻¹²</td></tr>
            <tr><td class="px-4 py-2 border-b">femto</td><td class="px-4 py-2 border-b">f</td><td class="px-4 py-2 border-b">0.000000000000001</td><td class="px-4 py-2 border-b">10⁻¹⁵</td></tr>
            <tr><td class="px-4 py-2 border-b">atto</td><td class="px-4 py-2 border-b">a</td><td class="px-4 py-2 border-b">0.000000000000000001</td><td class="px-4 py-2 border-b">10⁻¹⁸</td></tr>
            <tr><td class="px-4 py-2 border-b">zepto</td><td class="px-4 py-2 border-b">z</td><td class="px-4 py-2 border-b">0.000000000000000000001</td><td class="px-4 py-2 border-b">10⁻²¹</td></tr>
            <tr><td class="px-4 py-2 border-b">yocto</td><td class="px-4 py-2 border-b">y</td><td class="px-4 py-2 border-b">0.000000000000000000000001</td><td class="px-4 py-2 border-b">10⁻²⁴</td></tr>
            <tr><td class="px-4 py-2 border-b">ronto</td><td class="px-4 py-2 border-b">r</td><td class="px-4 py-2 border-b">0.000000000000000000000000001</td><td class="px-4 py-2 border-b">10⁻²⁷</td></tr>
            <tr><td class="px-4 py-2 border-b">quecto</td><td class="px-4 py-2 border-b">q</td><td class="px-4 py-2 border-b">0.000000000000000000000000000001</td><td class="px-4 py-2 border-b">10⁻³⁰</td></tr>
          </tbody>
        </table>
      </div>

      <h3>Usage examples</h3>
      <ul>
        <li><strong>kilometer (km)</strong> = 1,000 meters</li>
        <li><strong>millimeter (mm)</strong> = 0.001 meter</li>
        <li><strong>gigahertz (GHz)</strong> = 1,000,000,000 hertz</li>
        <li><strong>microsecond (µs)</strong> = 0.000001 second</li>
        <li><strong>milliampere (mA)</strong> = 0.001 ampere</li>
      </ul>
    </div>
  `
}

export function getSystemsOfUnitsContent() {
  return `
    <div class="prose prose-blue max-w-none">
      <h3>The different systems of units</h3>
      <p>
        Units are grouped into coherent systems to facilitate measurements and calculations.
      </p>

      <h4>The International System of Units (SI)</h4>
      <p>
        It is the most widely used and globally recognized measurement system. Based on seven fundamental units, it offers scientific coherence and ease of conversion. It is the standard for science, engineering and international trade.
      </p>
      <p><strong>Advantages:</strong> Universality, coherence, precise definitions.</p>
      <p><strong>The seven SI base units:</strong></p>
      <ul>
        <li><strong>Meter (m)</strong> for length</li>
        <li><strong>Kilogram (kg)</strong> for mass</li>
        <li><strong>Second (s)</strong> for time</li>
        <li><strong>Ampere (A)</strong> for electric current</li>
        <li><strong>Kelvin (K)</strong> for temperature</li>
        <li><strong>Mole (mol)</strong> for amount of substance</li>
        <li><strong>Candela (cd)</strong> for luminous intensity</li>
      </ul>

      <h4>Imperial or Anglo-Saxon Systems of Units</h4>
      <p>
        Historically based on traditional references, these systems are mainly used in the United States and, for some units, in the United Kingdom. They can be less coherent and conversions are often more complex.
      </p>
      <p><strong>Examples:</strong> Inch, foot, mile, pound, gallon, Fahrenheit.</p>

      <h4>Other Systems</h4>
      <ul>
        <li><strong>CGS System (Centimeter-Gram-Second)</strong>: An older metric system.</li>
        <li><strong>Astronomical Units</strong>: Such as the light-year, for cosmic distances.</li>
        <li><strong>Traditional Units</strong>: Old regional measures that are no longer standardized.</li>
      </ul>

      <h3>Fundamental Units vs. Derived Units</h3>

      <h4>Fundamental (or Base) Units</h4>
      <p>
        These are the seven units of the International System (SI) from which all other units are defined. They measure fundamental quantities, which are independent of each other.
      </p>

      <h4>Derived Units</h4>
      <p>
        These are units formed by mathematical combinations (multiplication, division) of fundamental units. They measure derived quantities, whose definition depends on other quantities.
      </p>
      <p><strong>Examples:</strong></p>
      <ul>
        <li><strong>Square meter (m²)</strong> for area, derived from length</li>
        <li><strong>Meter per second (m/s)</strong> for speed, derived from length and time</li>
        <li><strong>Newton (N)</strong> for force, derived from mass, length and time</li>
        <li><strong>Joule (J)</strong> for energy</li>
        <li><strong>Watt (W)</strong> for power</li>
        <li><strong>Pascal (Pa)</strong> for pressure</li>
        <li><strong>Volt (V)</strong> for electric voltage</li>
      </ul>
    </div>
  `
}
