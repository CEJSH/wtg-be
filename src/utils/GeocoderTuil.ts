// src/utils/GeocoderUtil.ts

import axios from 'axios';

export async function getGeocoder(url: string) {
  try {
    const response = await axios.get(url);
    const result_address = response.data.documents[0].address;
    const latitude: number = parseFloat(result_address.y);
    const longitude: number = parseFloat(result_address.x);
    return { latitude, longitude };
  } catch (error) {
    console.error(error);
    return null;
  }
}
