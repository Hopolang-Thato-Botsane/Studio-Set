import { client } from './client';

export async function getProcessSteps() {
  const query = `*[_type == "processStep"] | order(stepNumber asc) {
    "id": _id,
    "act": "ACT " + string(stepNumber),
    tagline,
    headline,
    description
  }`;
  return await client.fetch(query);
}

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

export async function getStorefrontPreview() {

  const query = `*[_type == "product"] | order(_createdAt desc)[0...3] {
    "id": _id,
    "brand": coalesce(brandName, "Studio&Set"),
    title,
    price,
    "imageUrl": productImage.asset->url
  }`;

  const products = await client.fetch(query);
  return products;
}

export async function getFooterConfiguration() {
  const query = `*[_type == "footerConfig"][0] {
    ctaHeading,
    ctaButtonText,
    ctaButtonLink,
    "imageUrl": bannerImage.asset->url,
    studioLinks[] { _key, label, route },
    showroomLinks[] { _key, label, route },
    contactLinks[] { _key, label, route },
    copyrightText
  }`;
  return await client.fetch(query);
}