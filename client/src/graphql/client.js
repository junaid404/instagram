import { HttpLink, split, InMemoryCache, ApolloClient } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { WebSocketLink } from "@apollo/client/link/ws";

const httpLink = new HttpLink({
  uri: process.env.REACT_APP_GRAPHQL_HTTP_LINK,
});

const wsLink = new WebSocketLink({
  uri: process.env.REACT_APP_GRAPHQL_WEBSOCKET_LINK,
  options: {
    reconnect: true,
  },
});

const ForwardRequestToCorrectEndPoint = split(
  ({ query }) => {
    const def = getMainDefinition(query);
    return (
      def.kind === "OperationDefinition" && def.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  link: ForwardRequestToCorrectEndPoint,
  cache: new InMemoryCache(),
});

export default client;
