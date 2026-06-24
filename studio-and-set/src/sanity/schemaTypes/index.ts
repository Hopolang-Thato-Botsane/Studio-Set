import { type SchemaTypeDefinition } from 'sanity'
import { serviceType } from './serviceTypes'
import { productType } from './productType';
import { projectType } from './projectType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    serviceType,
    projectType,
    productType,
  ],
}
