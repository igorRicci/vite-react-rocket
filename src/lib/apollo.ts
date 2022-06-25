import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4ub361s0s1o01t660om8nm7/master',
  cache: new InMemoryCache()
})
