import { GraphQLClient } from "graphql-request";

import { getSdk } from "~/lib/__generated/sdk";
import { endpoint } from "codegen";
import { env } from "../env.mjs";

const graphQlClient = new GraphQLClient(endpoint, {
  headers: {
    Authorization: `Bearer ${env.CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN}`,
  },
});

export const graphQL = getSdk(graphQlClient);
