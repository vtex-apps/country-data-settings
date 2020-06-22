import { GraphQLJSON, GraphQLJSONObject } from 'graphql-type-json'

import { queries as countryQueries } from './country'

export default {
  JSON: GraphQLJSON,
  JSONObject: GraphQLJSONObject,
  Field: {
    __resolveType(root: any) {
      return root.label === 'postalCode' ? 'PostalCodeData' : 'FieldData'
    },
  },
  Query: {
    ...countryQueries,
  },
}
