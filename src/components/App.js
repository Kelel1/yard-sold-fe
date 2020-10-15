import React, { useState, useEffect } from "react";
// import { ApolloClient, HttpLink, InMemoryCache, gql } from "@apollo/client";
import ItemList from "./ItemList";
import Navbar from "./Nav";
import Footer from "./Footer";
// import Login from "./Login";
import { fetchAllItems } from "./../mock-api/fake-api-call";

// const client = new ApolloClient({
//   cache: new InMemoryCache(),
//   link: new HttpLink({
//     uri: "http://localhost:4000/graphql",
//   }),
// });

// const query = gql`
//   query {
//     allItems {
//       name
//       price
//       description
//     }
//   }
// `;

// client.query({ query }).then((response) => {
//   console.log(response.data);
// });

const App = () => {
  const [items, setItems] = useState([]); // setting the local data

  useEffect(() => {
    fetchAllItems().then((data) => {
      console.log(data);
      return setItems(data);
    }); // calling the API and settign the recived data
  }, []);

  return (
    <div className="">
      <Navbar />
      <div className="all">
        <p className="welcome">Welcome to Yard Sold</p>
        <p className="container">
          Add an online presence to your yard sale, making it easier for
          potential customers to find out when and where your yard sale is, as
          well as what items you are selling.
        </p>
      </div>
      {/* <Login /> */}
      <ItemList items={items} />
      <Footer />
      {/* <style jsx>{`
        .all {
          background-color: #2f4f4f;
          color: white;
          height: 200px;
        }
        .welcome {
          font-size: 20px;
          margin: auto;
          text-align: center;
          padding-top: 5%;
        }
      `}</style> */}
    </div>
  );
};

export default App;