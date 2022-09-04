import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/main";

import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Course from "./pages/Course";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SideNav from "./components/Sidenav";
import ElevateInfo from "./components/ElevateInfo";
import SearchedCourse from "./components/SearchedCourse";
import AddCourse from "./pages/AddCourse";
import { Helmet } from "react-helmet";
import Module from "./pages/Module";

const TITLE = "Elevate";
const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className='min-100-vh'>
          <Helmet>
            <title>{TITLE}</title>
          </Helmet>
          <Header />
          <SideNav />

          <div className='videWS'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/me' element={<Profile />} />
              <Route path='/courses/:courseId' element={<Course />} />
              <Route path='/course/search/:name' element={<SearchedCourse />} />
              <Route path='/courses/add' element={<AddCourse />} />
              <Route path='module/:moduleId' element={<Module />} />
            </Routes>
          </div>
          <ElevateInfo />
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
