import axios from 'axios'
import { campaignId, token } from '../variables.js'

const axiosConfig = {
    headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json'
    }
}

async function get(uri) {
    try {
        const response = await axios.get(`https://kanka.io/api/1.0/campaigns/${campaignId}/${uri}`, axiosConfig);

        return response.data.data
    } catch (error) {
        console.error(error);
    }
}

async function post(uri, payload) {
    try {
        const response = await axios.post(`https://kanka.io/api/1.0/campaigns/${campaignId}/${uri}`, payload, axiosConfig);

        return response.data.data
    } catch (error) {
        console.error(error);
    }
}

export { get, post }