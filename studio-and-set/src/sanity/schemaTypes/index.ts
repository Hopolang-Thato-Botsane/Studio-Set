import { type SchemaTypeDefinition } from 'sanity'
import { processType } from './processType';
import { serviceType } from './serviceTypes'
import { projectType } from './projectType'
import { productType } from './productType';


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    processType,
    serviceType,
    projectType,
    productType,
  ],
}