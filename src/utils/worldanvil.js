import { worldAnvilExportDir } from '../variables.js'
import { parseJsonInDirectories } from './fileUtils.js'

function stripLinks(content) {
    return content.replace(/<a\b[^>]*>/gi, "").replace(/<\/a>/gi, "")
}

function fixParagraphs(content) {
    return '<p>' + content.replace(/<span\b[^>]*>/gi, "").replace(/<\/span>/gi, "").replace(/\&nbsp\;/gi, '<\/p><p>') + '<\/p>'
}

function formatContent(content) {
    const formatted = fixParagraphs(stripLinks(content))

    return formatted;
}

function transformEntity(entity) {
    return {
        name: entity.title,
        entry: formatContent(entity.content_parsed),
        is_private: entity.state !== 'public'
    }
}

let entities = []

function loadEntities() {
    entities = parseJsonInDirectories(worldAnvilExportDir)
}

function getSpecies() {
    const species = entities.filter(entity => entity.template === "species" || entity.template === "ethnicity").map(transformEntity)

    return species
}

export { getSpecies, loadEntities }