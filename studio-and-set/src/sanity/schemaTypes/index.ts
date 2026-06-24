import { type SchemaTypeDefinition } from 'sanity'
import { processType } from './processType';
import { serviceType } from './serviceTypes'
import { merchType } from './merchType';
import { kitType } from './kitType';
import { projectType } from './projectType';
import { footerType } from './footerType';



export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    processType,
    serviceType,
    projectType,
    merchType,
    footerType,
  ],
}