import React from 'react';
import { ApolloClient, HttpLink, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'http://localhost:4000/graphql',
  })
})


const query = gql`
query {
  allItems {
    name
    price
    description
  }
}
`

client.query({ query })
  .then((response) => {
    console.log(response.data);
  });

const App = () => (
  
  <div>
    <h1>
      Hello Kern
    </h1>
  </div>
)

export default App;
