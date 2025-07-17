<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import Icon from '@/components/icons/index.vue'

const props = defineProps<{
  category: string
}>()
const { t } = useI18n()
const router = useRouter()

// Variable pour stocker le contenu formaté en HTML
const contentHtml = ref('')

// Obtenir le titre et le contenu en fonction de la catégorie
const categoryInfo = computed(() => {
  switch (props.category) {
    case 'physical_quantities':
      return {
        title: 'physical_quantities',
        icon: 'document',
        color: '#3b82f6',
      }
    case 'measurement_units':
      return {
        title: 'measurement_units',
        icon: 'calculator',
        color: '#10b981',
      }
    case 'si_prefixes':
      return {
        title: 'si_prefixes',
        icon: 'document',
        color: '#f59e0b',
      }
    case 'systems_of_units':
      return {
        title: 'systems_of_units',
        icon: 'book-open',
        color: '#8b5cf6',
      }
    default:
      return { title: '', icon: '', color: '' }
  }
})

// Vérifier si la catégorie est valide et rediriger si nécessaire
watch(() => props.category, (newCategory) => {
  const validCategories = ['physical_quantities', 'measurement_units', 'si_prefixes', 'systems_of_units']
  if (!validCategories.includes(newCategory)) {
    router.push('/tools/guide')
  }
}, { immediate: true })

// Fonction pour générer le contenu en fonction de la catégorie
onMounted(() => {
  switch (props.category) {
    case 'physical_quantities':
      contentHtml.value = generatePhysicalQuantitiesContent()
      break
    case 'measurement_units':
      contentHtml.value = generateMeasurementUnitsContent()
      break
    case 'si_prefixes':
      contentHtml.value = generateSIPrefixesContent()
      break
    case 'systems_of_units':
      contentHtml.value = generateSystemsOfUnitsContent()
      break
  }

  // Générer la table des matières après le rendu du contenu
  setTimeout(() => {
    generateTableOfContents()
  }, 100)
})

// Fonction pour générer la table des matières à partir des titres
function generateTableOfContents() {
  const contentElement = document.querySelector('.prose')
  const tocElement = document.getElementById('toc')

  if (contentElement && tocElement) {
    const headings = contentElement.querySelectorAll('h3, h4')
    let tocHtml = ''

    headings.forEach((heading, index) => {
      // Ajouter un ID au titre s'il n'en a pas
      if (!heading.id) {
        heading.id = `section-${index}`
      }

      const isSubheading = heading.tagName === 'H4'

      tocHtml += `
        <a
          href="#${heading.id}"
          class="block ${isSubheading ? 'ml-4 text-gray-600' : 'font-medium text-gray-800'} hover:text-blue-600 transition-colors"
        >
          ${heading.textContent}
        </a>
      `
    })

    tocElement.innerHTML = tocHtml
  }
}

// Génération du contenu sur les grandeurs physiques
function generatePhysicalQuantitiesContent() {
  return `
    <h3 id="definition">Qu'est-ce qu'une grandeur physique ?</h3>
    <p>
      Une <strong>grandeur physique</strong> est une caractéristique mesurable d'un phénomène, d'un corps ou d'une substance.
      C'est l'idée abstraite de ce que vous souhaitez quantifier, indépendamment de l'unité utilisée pour l'exprimer.
    </p>

    <div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-4 rounded">
      <p class="font-medium">Important à retenir :</p>
      <ul class="mt-2">
        <li>Les grandeurs physiques décrivent <em>ce qui</em> est mesuré (longueur, masse, temps...)</li>
        <li>Les unités de mesure définissent <em>comment</em> on le mesure (mètre, kilogramme, seconde...)</li>
      </ul>
    </div>

    <p>Les grandeurs physiques présentent deux caractéristiques essentielles :</p>
    <ul>
      <li>Elles représentent la "nature" de ce que l'on mesure (ex: la longueur d'une table, la masse d'une pomme).</li>
      <li>Elles sont indépendantes du système de mesure choisi. La température d'une pièce est une grandeur physique, peu importe si on la mesure en Celsius ou en Fahrenheit.</li>
    </ul>

    <h3 id="fondamentales">Les 7 grandeurs fondamentales</h3>
    <p>
      Ces grandeurs sont considérées comme indépendantes les unes des autres et servent de base au Système International d'unités (SI).
      Toutes les autres grandeurs peuvent être dérivées de ces grandeurs fondamentales.
    </p>

    <div class="overflow-x-auto my-4">
      <table class="min-w-full bg-white border border-gray-300">
        <thead class="bg-gray-100">
          <tr>
            <th class="px-4 py-2 border-b">Grandeur</th>
            <th class="px-4 py-2 border-b">Symbole</th>
            <th class="px-4 py-2 border-b">Unité SI</th>
            <th class="px-4 py-2 border-b">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="px-4 py-2 border-b font-medium">Longueur</td>
            <td class="px-4 py-2 border-b">L</td>
            <td class="px-4 py-2 border-b">mètre (m)</td>
            <td class="px-4 py-2 border-b">Distance entre deux points</td>
          </tr>
          <tr>
            <td class="px-4 py-2 border-b font-medium">Masse</td>
            <td class="px-4 py-2 border-b">M</td>
            <td class="px-4 py-2 border-b">kilogramme (kg)</td>
            <td class="px-4 py-2 border-b">Quantité de matière d'un corps</td>
          </tr>
          <tr>
            <td class="px-4 py-2 border-b font-medium">Temps</td>
            <td class="px-4 py-2 border-b">T</td>
            <td class="px-4 py-2 border-b">seconde (s)</td>
            <td class="px-4 py-2 border-b">Durée d'un phénomène</td>
          </tr>
          <tr>
            <td class="px-4 py-2 border-b font-medium">Courant électrique</td>
            <td class="px-4 py-2 border-b">I</td>
            <td class="px-4 py-2 border-b">ampère (A)</td>
            <td class="px-4 py-2 border-b">Flux de charges électriques</td>
          </tr>
          <tr>
            <td class="px-4 py-2 border-b font-medium">Température</td>
            <td class="px-4 py-2 border-b">Θ</td>
            <td class="px-4 py-2 border-b">kelvin (K)</td>
            <td class="px-4 py-2 border-b">Niveau d'agitation thermique</td>
          </tr>
          <tr>
            <td class="px-4 py-2 border-b font-medium">Quantité de matière</td>
            <td class="px-4 py-2 border-b">N</td>
            <td class="px-4 py-2 border-b">mole (mol)</td>
            <td class="px-4 py-2 border-b">Nombre d'entités élémentaires</td>
          </tr>
          <tr>
            <td class="px-4 py-2 border-b font-medium">Intensité lumineuse</td>
            <td class="px-4 py-2 border-b">J</td>
            <td class="px-4 py-2 border-b">candela (cd)</td>
            <td class="px-4 py-2 border-b">Puissance lumineuse émise</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 id="derivees">Grandeurs dérivées</h3>
    <p>
      Ces grandeurs sont définies à partir des grandeurs fondamentales par des relations mathématiques.
      Voici quelques exemples importants :
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
      <div class="bg-white border rounded-lg p-4 shadow-sm">
        <h4 class="font-medium text-blue-700 mb-2">Surface (Aire)</h4>
        <p>Espace bidimensionnel occupé par une figure.</p>
        <div class="mt-2 text-sm bg-gray-50 p-2 rounded">
          <p><strong>Unité SI</strong> : mètre carré (m²)</p>
          <p><strong>Formule</strong> : Longueur × Largeur</p>
        </div>
      </div>

      <div class="bg-white border rounded-lg p-4 shadow-sm">
        <h4 class="font-medium text-blue-700 mb-2">Volume</h4>
        <p>Espace tridimensionnel occupé par un corps.</p>
        <div class="mt-2 text-sm bg-gray-50 p-2 rounded">
          <p><strong>Unité SI</strong> : mètre cube (m³)</p>
          <p><strong>Formule</strong> : Longueur × Largeur × Hauteur</p>
        </div>
      </div>

      <div class="bg-white border rounded-lg p-4 shadow-sm">
        <h4 class="font-medium text-blue-700 mb-2">Vitesse</h4>
        <p>Taux de variation de la position d'un objet.</p>
        <div class="mt-2 text-sm bg-gray-50 p-2 rounded">
          <p><strong>Unité SI</strong> : mètre par seconde (m/s)</p>
          <p><strong>Formule</strong> : Distance ÷ Temps</p>
        </div>
      </div>

      <div class="bg-white border rounded-lg p-4 shadow-sm">
        <h4 class="font-medium text-blue-700 mb-2">Force</h4>
        <p>Interaction qui modifie l'état de mouvement d'un objet.</p>
        <div class="mt-2 text-sm bg-gray-50 p-2 rounded">
          <p><strong>Unité SI</strong> : newton (N)</p>
          <p><strong>Formule</strong> : Masse × Accélération</p>
        </div>
      </div>

      <div class="bg-white border rounded-lg p-4 shadow-sm">
        <h4 class="font-medium text-blue-700 mb-2">Pression</h4>
        <p>Force exercée par unité de surface.</p>
        <div class="mt-2 text-sm bg-gray-50 p-2 rounded">
          <p><strong>Unité SI</strong> : pascal (Pa)</p>
          <p><strong>Formule</strong> : Force ÷ Surface</p>
        </div>
      </div>

      <div class="bg-white border rounded-lg p-4 shadow-sm">
        <h4 class="font-medium text-blue-700 mb-2">Énergie</h4>
        <p>Capacité à produire un travail ou un transfert de chaleur.</p>
        <div class="mt-2 text-sm bg-gray-50 p-2 rounded">
          <p><strong>Unité SI</strong> : joule (J)</p>
          <p><strong>Formule</strong> : Force × Distance</p>
        </div>
      </div>
    </div>

    <h3 id="applications">Applications pratiques</h3>
    <p>
      La compréhension des grandeurs physiques est fondamentale dans de nombreux domaines :
    </p>

    <ul>
      <li><strong>Sciences et ingénierie</strong> : Conception, analyse et résolution de problèmes</li>
      <li><strong>Médecine</strong> : Mesure des paramètres physiologiques comme la pression artérielle</li>
      <li><strong>Commerce</strong> : Mesure des quantités de marchandises (masse, volume)</li>
      <li><strong>Vie quotidienne</strong> : Cuisine (volumes, masses), construction (longueurs, surfaces)</li>
    </ul>

    <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-4 rounded">
      <p class="font-medium">Bon à savoir :</p>
      <p class="mt-1">Chaque grandeur physique possède une dimension unique qui la caractérise. Par exemple, toutes les grandeurs de longueur ont la dimension [L], tandis que les vitesses ont la dimension [L]/[T].</p>
    </div>
  `
}

// Génération du contenu sur les unités de mesure
function generateMeasurementUnitsContent() {
  return `
    <div class="prose prose-blue max-w-none">
      <h3>Qu'est-ce qu'une unité de mesure ?</h3>
      <p>
        Une <strong>unité de mesure</strong> est une quantité standard de référence définie et acceptée internationalement, utilisée pour exprimer la valeur numérique d'une grandeur physique.
      </p>

      <p>Les caractéristiques essentielles des unités de mesure :</p>
      <ul>
        <li>Elles donnent un sens numérique à la grandeur (ex: "2 mètres" plutôt que juste "2").</li>
        <li>Elles sont des références établies par convention (ex: le mètre, le kilogramme, la seconde).</li>
        <li>Elles permettent de comparer différentes mesures d'une même grandeur.</li>
        <li>Une mesure s'exprime toujours par un nombre suivi de son unité.</li>
      </ul>

      <h3>Unités courantes par grandeur</h3>

      <h4>Longueur</h4>
      <ul>
        <li><strong>Mètre (m)</strong> : Unité de base du SI.</li>
        <li><strong>Kilomètre (km)</strong> : 1 000 mètres.</li>
        <li><strong>Centimètre (cm)</strong> : 0,01 mètre.</li>
        <li><strong>Millimètre (mm)</strong> : 0,001 mètre.</li>
        <li><strong>Pouce (in)</strong> : Unité anglo-saxonne, environ 2,54 cm.</li>
        <li><strong>Pied (ft)</strong> : 12 pouces, environ 30,48 cm.</li>
        <li><strong>Mile (mi)</strong> : 1 760 yards, environ 1,609 km.</li>
      </ul>

      <h4>Masse</h4>
      <ul>
        <li><strong>Kilogramme (kg)</strong> : Unité de base du SI.</li>
        <li><strong>Gramme (g)</strong> : 0,001 kilogramme.</li>
        <li><strong>Tonne (t)</strong> : 1 000 kilogrammes.</li>
        <li><strong>Livre (lb)</strong> : Unité anglo-saxonne, environ 0,453 kg.</li>
        <li><strong>Once (oz)</strong> : 1/16 de livre, environ 28,35 g.</li>
      </ul>

      <h4>Temps</h4>
      <ul>
        <li><strong>Seconde (s)</strong> : Unité de base du SI.</li>
        <li><strong>Minute (min)</strong> : 60 secondes.</li>
        <li><strong>Heure (h)</strong> : 60 minutes.</li>
        <li><strong>Jour (j)</strong> : 24 heures.</li>
        <li><strong>Année (an)</strong> : Environ 365,25 jours.</li>
      </ul>

      <h4>Température</h4>
      <ul>
        <li><strong>Kelvin (K)</strong> : Unité de base du SI (0 K = -273,15 °C).</li>
        <li><strong>Degré Celsius (°C)</strong> : Unité la plus courante en Europe.</li>
        <li><strong>Degré Fahrenheit (°F)</strong> : Unité courante aux États-Unis.</li>
      </ul>
    </div>
  `
}

// Génération du contenu sur les préfixes SI
function generateSIPrefixesContent() {
  return `
    <div class="prose prose-blue max-w-none">
      <h3>Les préfixes du Système International</h3>
      <p>
        Les préfixes du SI sont des multiplicateurs décimaux utilisés avec les unités de mesure pour former des multiples ou des sous-multiples des unités de base. Ils sont essentiels pour exprimer des quantités très grandes ou très petites de manière concise.
      </p>

      <div class="overflow-x-auto">
        <table class="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th class="px-4 py-2 border-b">Préfixe</th>
              <th class="px-4 py-2 border-b">Symbole</th>
              <th class="px-4 py-2 border-b">Facteur</th>
              <th class="px-4 py-2 border-b">Puissance de 10</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="px-4 py-2 border-b">Yotta</td>
              <td class="px-4 py-2 border-b">Y</td>
              <td class="px-4 py-2 border-b">1 000 000 000 000 000 000 000 000</td>
              <td class="px-4 py-2 border-b">10²⁴</td>
            </tr>
            <tr>
              <td class="px-4 py-2 border-b">Zetta</td>
              <td class="px-4 py-2 border-b">Z</td>
              <td class="px-4 py-2 border-b">1 000 000 000 000 000 000 000</td>
              <td class="px-4 py-2 border-b">10²¹</td>
            </tr>
            <tr>
              <td class="px-4 py-2 border-b">Exa</td>
              <td class="px-4 py-2 border-b">E</td>
              <td class="px-4 py-2 border-b">1 000 000 000 000 000 000</td>
              <td class="px-4 py-2 border-b">10¹⁸</td>
            </tr>
            <tr>
              <td class="px-4 py-2 border-b">Peta</td>
              <td class="px-4 py-2 border-b">P</td>
              <td class="px-4 py-2 border-b">1 000 000 000 000 000</td>
              <td class="px-4 py-2 border-b">10¹⁵</td>
            </tr>
            <tr>
              <td class="px-4 py-2 border-b">Téra</td>
              <td class="px-4 py-2 border-b">T</td>
              <td class="px-4 py-2 border-b">1 000 000 000 000</td>
              <td class="px-4 py-2 border-b">10¹²</td>
            </tr>
            <tr>
              <td class="px-4 py-2 border-b">Giga</td>
              <td class="px-4 py-2 border-b">G</td>
              <td class="px-4 py-2 border-b">1 000 000 000</td>
              <td class="px-4 py-2 border-b">10⁹</td>
            </tr>
            <tr>
              <td class="px-4 py-2 border-b">Méga</td>
              <td class="px-4 py-2 border-b">M</td>
              <td class="px-4 py-2 border-b">1 000 000</td>
              <td class="px-4 py-2 border-b">10⁶</td>
            </tr>
            <tr>
              <td class="px-4 py-2 border-b">kilo</td>
              <td class="px-4 py-2 border-b">k</td>
              <td class="px-4 py-2 border-b">1 000</td>
              <td class="px-4 py-2 border-b">10³</td>
            </tr>
            <tr>
              <td class="px-4 py-2 border-b">hecto</td>
              <td class="px-4 py-2 border-b">h</td>
              <td class="px-4 py-2 border-b">100</td>
              <td class="px-4 py-2 border-b">10²</td>
            </tr>
            <tr>
              <td class="px-4 py-2 border-b">déca</td>
              <td class="px-4 py-2 border-b">da</td>
              <td class="px-4 py-2 border-b">10</td>
              <td class="px-4 py-2 border-b">10¹</td>
            </tr>
            <tr>
              <td class="px-4 py-2 border-b">(Unité de base)</td>
              <td class="px-4 py-2 border-b"></td>
              <td class="px-4 py-2 border-b">1</td>
              <td class="px-4 py-2 border-b">10⁰</td>
            </tr>
            <tr>
              <td class="px-4 py-2 border-b">déci</td>
              <td class="px-4 py-2 border-b">d</td>
              <td class="px-4 py-2 border-b">0,1</td>
              <td class="px-4 py-2 border-b">10⁻¹</td>
            </tr>
            <tr>
              <td class="px-4 py-2 border-b">centi</td>
              <td class="px-4 py-2 border-b">c</td>
              <td class="px-4 py-2 border-b">0,01</td>
              <td class="px-4 py-2 border-b">10⁻²</td>
            </tr>
            <tr>
              <td class="px-4 py-2 border-b">milli</td>
              <td class="px-4 py-2 border-b">m</td>
              <td class="px-4 py-2 border-b">0,001</td>
              <td class="px-4 py-2 border-b">10⁻³</td>
            </tr>
            <tr>
              <td class="px-4 py-2 border-b">micro</td>
              <td class="px-4 py-2 border-b">µ</td>
              <td class="px-4 py-2 border-b">0,000 001</td>
              <td class="px-4 py-2 border-b">10⁻⁶</td>
            </tr>
            <tr>
              <td class="px-4 py-2 border-b">nano</td>
              <td class="px-4 py-2 border-b">n</td>
              <td class="px-4 py-2 border-b">0,000 000 001</td>
              <td class="px-4 py-2 border-b">10⁻⁹</td>
            </tr>
            <tr>
              <td class="px-4 py-2 border-b">pico</td>
              <td class="px-4 py-2 border-b">p</td>
              <td class="px-4 py-2 border-b">0,000 000 000 001</td>
              <td class="px-4 py-2 border-b">10⁻¹²</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Exemples d'utilisation</h3>
      <ul>
        <li><strong>kilomètre (km)</strong> = 1 000 mètres</li>
        <li><strong>millimètre (mm)</strong> = 0,001 mètre</li>
        <li><strong>gigahertz (GHz)</strong> = 1 000 000 000 hertz</li>
        <li><strong>microseconde (µs)</strong> = 0,000 001 seconde</li>
        <li><strong>milliampère (mA)</strong> = 0,001 ampère</li>
      </ul>
    </div>
  `
}

// Génération du contenu sur les systèmes d'unités
function generateSystemsOfUnitsContent() {
  return `
    <div class="prose prose-blue max-w-none">
      <h3>Les différents systèmes d'unités</h3>
      <p>
        Les unités sont regroupées en systèmes cohérents pour faciliter les mesures et les calculs.
      </p>

      <h4>Le Système International d'Unités (SI)</h4>
      <p>
        C'est le système de mesure le plus répandu et reconnu mondialement. Basé sur les sept unités fondamentales, il offre une cohérence scientifique et une facilité de conversion. C'est le standard pour la science, l'ingénierie et le commerce international.
      </p>
      <p><strong>Avantages :</strong> Universalité, cohérence, définitions précises.</p>
      <p><strong>Les sept unités de base du SI :</strong></p>
      <ul>
        <li><strong>Mètre (m)</strong> pour la longueur</li>
        <li><strong>Kilogramme (kg)</strong> pour la masse</li>
        <li><strong>Seconde (s)</strong> pour le temps</li>
        <li><strong>Ampère (A)</strong> pour le courant électrique</li>
        <li><strong>Kelvin (K)</strong> pour la température</li>
        <li><strong>Mole (mol)</strong> pour la quantité de matière</li>
        <li><strong>Candela (cd)</strong> pour l'intensité lumineuse</li>
      </ul>

      <h4>Les Systèmes d'Unités Impériales ou Anglo-Saxons</h4>
      <p>
        Historiquement basés sur des références traditionnelles, ces systèmes sont principalement utilisés aux États-Unis et, pour certaines unités, au Royaume-Uni. Ils peuvent être moins cohérents et les conversions sont souvent plus complexes.
      </p>
      <p><strong>Exemples :</strong> Pouce, pied, mile, livre, gallon, Fahrenheit.</p>

      <h4>Autres Systèmes</h4>
      <ul>
        <li><strong>Système CGS (Centimètre-Gramme-Seconde)</strong> : Un ancien système métrique.</li>
        <li><strong>Unités Astronomiques</strong> : Comme l'année-lumière, pour les distances cosmiques.</li>
        <li><strong>Unités Traditionnelles</strong> : Anciennes mesures régionales qui ne sont plus standardisées.</li>
      </ul>

      <h3>Unités Fondamentales vs. Unités Dérivées</h3>

      <h4>Unités Fondamentales (ou de Base)</h4>
      <p>
        Ce sont les sept unités du Système International (SI) à partir desquelles toutes les autres unités sont définies. Elles mesurent les grandeurs fondamentales, qui sont indépendantes les unes des autres.
      </p>

      <h4>Unités Dérivées</h4>
      <p>
        Ce sont des unités formées par des combinaisons mathématiques (multiplication, division) des unités fondamentales. Elles mesurent les grandeurs dérivées, dont la définition dépend d'autres grandeurs.
      </p>
      <p><strong>Exemples :</strong></p>
      <ul>
        <li><strong>Mètre carré (m²)</strong> pour la surface, dérivée de la longueur</li>
        <li><strong>Mètre par seconde (m/s)</strong> pour la vitesse, dérivée de la longueur et du temps</li>
        <li><strong>Newton (N)</strong> pour la force, dérivée de la masse, de la longueur et du temps</li>
        <li><strong>Joule (J)</strong> pour l'énergie</li>
        <li><strong>Watt (W)</strong> pour la puissance</li>
        <li><strong>Pascal (Pa)</strong> pour la pression</li>
        <li><strong>Volt (V)</strong> pour la tension électrique</li>
      </ul>
    </div>
  `
}
</script>

<template>
  <div>
    <div class="flex items-center mb-6">
      <router-link
        to="/tools/guide"
        class="text-blue-600 hover:text-blue-800 mr-2"
      >
        ← {{ t('nav_tools_guide') }}
      </router-link>
    </div>

    <div class="flex items-center mb-6">
      <div class="rounded-full p-3 mr-4" :style="{ backgroundColor: `${categoryInfo.color}20` }">
        <Icon :name="categoryInfo.icon" :size="28" :color="categoryInfo.color" />
      </div>
      <h2 class="text-2xl font-semibold">
        {{ t(categoryInfo.title) }}
      </h2>
    </div>

    <div class="bg-white rounded-lg shadow-md p-6 mb-8">
      <!-- Contenu du guide généré dynamiquement -->
      <div v-html="contentHtml" />
    </div>
  </div>
</template>
