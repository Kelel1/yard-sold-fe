import React from 'react';
import { ApolloClient, HttpLink, InMemoryCache, gql } from '@apollo/client';
import Navbar from '../components/Nav'

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
  
  <div className="container">
    <Navbar/>
    <h1>
      Welcome to Yard Sold!
    </h1>
    <div>
      <p>
        Add an online presence to your yard sale, making it easier for potential customers
        to find out when and where your yard sale is, as well as what items you are selling.
      </p>
    </div>
  </div>
)

export default App;
