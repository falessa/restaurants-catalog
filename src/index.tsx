import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, InMemoryCache, HttpLink, ApolloProvider, ApolloLink } from "@apollo/client";
import dotenv from "dotenv";

// dotenv.config();

const authLink = new ApolloLink((operation, forward) => {
  // TODO: get token from .env file
  const token = "tokenIsSecret!";
  operation.setContext({
    headers: {
      "Authorization": `Bearer ${token}`
    }
  });

  return forward(operation);
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([
    authLink,
    new HttpLink({ uri: "http://localhost:3001/graphql" })]) // // TODO: get uri from .env file
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
