import * as fs from 'fs';

const token = fs.readFileSync('token.txt', 'utf-8')
const campaignId = fs.readFileSync('campaign-id.txt', 'utf-8')

export { token, campaignId }