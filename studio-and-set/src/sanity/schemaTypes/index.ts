import { type SchemaTypeDefinition } from 'sanity'
import { serviceType } from './serviceTypes'
import { projectType } from './projectType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    serviceType,
    projectType
  ],
}
