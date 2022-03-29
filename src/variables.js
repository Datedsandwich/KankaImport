import * as fs from 'fs';

const { campaignId, token, worldAnvilExportDir } = JSON.parse(fs.readFileSync('variables.json', 'utf-8'))

export { campaignId, token, worldAnvilExportDir }