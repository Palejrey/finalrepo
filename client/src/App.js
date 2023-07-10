import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Main from './pages/Main';
import Signup from './pages/Signup';
import Login from './pages/Login';
//import Header from "./components/Header";
//import Footer from "./components/Footer";

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
      <div className="App">

        <div>
        <Routes>
          <Route 
            path="/"
            element={<Main />}
          />
          <Route 
            path="/signup"
            element={<Signup />}
          />
          <Route 
            path="/login"
            element={<Login />}
          />
        </Routes>
        </div>
      
      </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
