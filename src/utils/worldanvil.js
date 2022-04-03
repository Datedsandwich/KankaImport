import { worldAnvilExportDir } from '../variables.js'
import { parseJsonInDirectories } from './fileUtils.js'

function stripLinks(content) {
    return content.replace(/<a\b[^>]*>/gi, '').replace(/<\/a>/gi, '')
}

function fixParagraphs(content) {
    return '<p>' + content.replace(/<span\b[^>]*>/gi, '').replace(/<\/span>/gi, '').replace(/\&nbsp\;/gi, '<\/p><p>') + '<\/p>'
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
    return entities.filter(entity => entity.template === 'species' || entity.template === 'ethnicity').map(transformEntity)
}

function getLocations() {
    return entities.filter(entity => entity.template === 'location' || entity.template === 'settlement' || entity.template === 'landmark').map(transformEntity)
}

function getOrganisations() {
    return entities.filter(entity => entity.template === 'organization').map(transformEntity)
}

function getCharacters() {
    return entities.filter(entity => entity.template === 'person').map(transformEntity)
}

function getGenericArticles() {
    return entities.filter(entity => entity.template === 'article').map(transformEntity)
}

function getReports() {
    return entities.filter(entity => entity.template === 'report').map(transformEntity)
}

function getDocuments() {
    return entities.filter(entity => entity.template === 'document').map(entity => ({
        ...transformEntity(entity),
        entry: formatContent(entity.content_parsed) + formatContent(entity.sections.contents.content_parsed),
        type: 'Document'
    }))
}

function getLandmarks() {
    return entities.filter(entity => entity.template === 'landmark').map(transformEntity)
}

function getItems() {
    return entities.filter(entity => entity.template === 'item').map(transformEntity)
}

export { getCharacters, getDocuments, getGenericArticles, getItems, getLandmarks, getLocations, getOrganisations, getReports, getSpecies, loadEntities }