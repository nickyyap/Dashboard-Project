import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import useLocalStorage from 'use-local-storage';
import { AuthContext } from './AuthContext';
import RequireAuth from "./components/RequireAuth";

function App() {
  const [token, setToken] = useLocalStorage("token", null);
  return (
    <AuthContext.Provider value={{ token, setToken }}>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Login />} path="/login" />
          <Route element={<RequireAuth><Dashboard /></RequireAuth>} path="/dashboard" />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App;
