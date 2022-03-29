import * as fs from 'fs';

const { token, campaignId } = JSON.parse(fs.readFileSync('variables.json', 'utf-8'))

export { token, campaignId }