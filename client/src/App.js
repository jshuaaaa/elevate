import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Video from "./pages/main";
import Search from "./pages/searchbar";

// import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
// import Login from "./pages/Login";
// import Course from "./pages/Course";
// import main from "./pages/main"
// import searchbar from "./pages/searchbar"
import Header from "./components/Header";
import Footer from "./components/Footer";
import SideNav from "./components/Sidenav";

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
          <Header />
          <SideNav />
          <div className='container'>
            <Routes>
              <Route path='/' element={<Video />} />
              <Route path='/login' element={<Search />} />
              {/* <Route path='/login' element={<Login />} /> */}
              <Route path='/signup' element={<Signup />} />

              {/* <Route path='/me' element={<Profile />} /> */}
              {/* <Route path='/courses/:courseId' element={<Course/>}/> */}
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
