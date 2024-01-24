import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NoPage from './components/pages/NoPage';
import AuthRoutes from './routes/AuthRoutes';
import UnAuthRoutes from './routes/UnAuthRoutes';


function App() {
  return (
    <>
        <Router>
          {/* All routes are nested inside it */}
          {/* use Below Guard Auth and Unauth */}
          <Routes>
            {AuthRoutes}
            {UnAuthRoutes}
            <Route path="*" element={<NoPage />} />
          </Routes>
        </Router>;
    </>
  );
}

export default App;
