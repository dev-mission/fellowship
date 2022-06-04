import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.scss';

import Admin from './Admin';
import { AuthContextProvider, AuthProtected } from './AuthContext';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import PasswordRoutes from './Passwords/PasswordRoutes';
import Register from './Register';
import UserRoutes from './Users/UserRoutes';

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/passwords/*" element={<PasswordRoutes />} />
          {process.env.REACT_APP_FEATURE_REGISTRATION === 'true' && <Route path="/register" element={<Register />} />}
          <Route
            path="/account/*"
            element={
              <AuthProtected>
                <UserRoutes />
              </AuthProtected>
            }
          />
          <Route
            path="/admin/*"
            element={
              <AuthProtected>
                <Admin />
              </AuthProtected>
            }
          />
        </Routes>
        <Footer />
      </Router>
    </AuthContextProvider>
  );
}

export default App;
