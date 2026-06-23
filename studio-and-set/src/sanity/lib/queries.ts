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

export async function getProjects() {
  const query = `*[_type == "project"] | order(sortOrder asc)[0...4] {
    _id,
    title,
    productionName,
    productionYear,
    projectUrl,
    "imageUrl": projectImage.asset->url
  }`;

  const projects = await client.fetch(query);
  return projects;
}
