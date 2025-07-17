import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'

// Récupération du chemin du répertoire actuel en mode ESM
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Chemins vers les fichiers de traduction
const localesDir = path.resolve(__dirname, '../src/locales')
const files = fs.readdirSync(localesDir).filter(file => file.endsWith('.json'))

// Trouver le fichier de référence (celui avec le plus de clés)
let referenceKeys = []
let referenceFile = ''
let maxKeysCount = 0

files.forEach((file) => {
  const filePath = path.join(localesDir, file)
  const content = JSON.parse(fs.readFileSync(filePath, 'utf8'))
  const keysCount = Object.keys(content).length

  if (keysCount > maxKeysCount) {
    maxKeysCount = keysCount
    referenceFile = file
    referenceKeys = Object.keys(content).sort()
  }
})

console.log(`\nUtilisation de ${referenceFile} comme référence avec ${referenceKeys.length} clés\n`)

// Vérifier chaque fichier par rapport à la référence
const reports = []
files.forEach((file) => {
  if (file === referenceFile)
    return

  const filePath = path.join(localesDir, file)
  const content = JSON.parse(fs.readFileSync(filePath, 'utf8'))
  const keys = Object.keys(content)

  const missingKeys = referenceKeys.filter(key => !keys.includes(key))
  const extraKeys = keys.filter(key => !referenceKeys.includes(key))

  reports.push({
    locale: file,
    missingKeys,
    extraKeys,
  })
})

// Afficher les résultats
let hasIssues = false

reports.forEach((report) => {
  console.log(`\n== ${report.locale} ==`)

  if (report.missingKeys.length > 0) {
    hasIssues = true
    console.log('\nClés manquantes:')
    report.missingKeys.forEach(key => console.log(`- ${key}`))
  }

  if (report.extraKeys.length > 0) {
    hasIssues = true
    console.log('\nClés supplémentaires:')
    report.extraKeys.forEach(key => console.log(`- ${key}`))
  }

  if (report.missingKeys.length === 0 && report.extraKeys.length === 0) {
    console.log('✓ Toutes les traductions sont synchronisées')
  }
})

console.log('')

// Utiliser le code de sortie pour indiquer le statut de la vérification
// Code 1 indique un échec, code 0 indique un succès
if (hasIssues) {
  console.log('❌ Problèmes de traduction détectés. Veuillez mettre à jour vos fichiers de localisation.')
  process.exit(1) // Sortie avec échec
}
else {
  console.log('✅ Tous les fichiers de traduction sont synchronisés!')
  process.exit(0) // Sortie avec succès
}
