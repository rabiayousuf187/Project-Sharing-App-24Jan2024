import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';

// Pages for Routing
// import Layout from './components/Layout'
// import Home from './components/pages/Home';
// import Login from './components/pages/Auth/Login';
// import Register from './components/pages/Auth/Register';
// import Blogs from './components/pages/Blogs/Blogs';
// import About from './components/pages/About';
// import Contact from './components/pages/Contact';
import NoPage from './components/pages/NoPage';
import AuthRoutes from './routes/AuthRoutes';
import UnAuthRoutes from './routes/UnAuthRoutes';
// import { UserContextProvider } from './components/contexts/UserContexts';


function App() {
  return (
    <>
      {/* <UserContextProvider> */}
        <Router>
          {/* All routes are nested inside it */}
          {/* use Below Guard Auth and Unauth */}
          <Routes>
            {AuthRoutes}
            {UnAuthRoutes}
            <Route path="*" element={<NoPage />} />
          </Routes>



          {/* use Below withour Guard Auth and Unauth */}
          {/* <Routes>
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/login" element={<Layout><Login/></Layout>} />
          <Route path="/register" element={<Layout><Register/></Layout>} />
          <Route path="/blog" element={<Layout><Blogs/></Layout>} />
          <Route path="/about" element={<Layout><About/></Layout>} />
          <Route path="/contact" element={<Layout><Contact/></Layout>} />
          <Route path="*" element={<NoPage/>} />
        </Routes> */}
        </Router>;
      {/* </UserContextProvider> */}

    </>
  );
}

export default App;
