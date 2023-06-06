import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Search from './Search';
import { Header } from './components/Header/header';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, InMemoryCache, HttpLink, ApolloProvider, ApolloLink } from "@apollo/client";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SearchContextProvider } from './context/SearchContext';

const authLink = new ApolloLink((operation, forward) => {
  const token = process.env.REACT_APP_API_TOKEN;
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
    new HttpLink({ uri: process.env.REACT_APP_API_URL })])
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <SearchContextProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<App />}/>
            <Route path="/search" element={<Search />} />
          </Routes>
        </BrowserRouter>
      </SearchContextProvider>
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
