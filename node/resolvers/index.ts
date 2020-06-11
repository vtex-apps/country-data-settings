import { GraphQLJSON, GraphQLJSONObject } from 'graphql-type-json'

import { queries as countryQueries } from './country'

export default {
  JSON: GraphQLJSON,
  JSONObject: GraphQLJSONObject,
  Query: {
    ...countryQueries,
  },
}
