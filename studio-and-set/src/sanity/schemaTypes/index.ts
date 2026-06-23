import { type SchemaTypeDefinition } from 'sanity'
import { serviceType } from './serviceTypes'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    serviceType,
  ],
}
