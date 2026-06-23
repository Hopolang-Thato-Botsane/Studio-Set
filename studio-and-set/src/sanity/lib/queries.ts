import { client } from './client';

export async function getServices() {
  const query = `*[_type == "service"] | order(displayOrder asc) {
    _id,
    title,
    description,
    tags,
    "imageUrl": serviceImage.asset->url
  }`;

  const services = await client.fetch(query);
  return services;
}