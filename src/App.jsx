import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

// hooks
import { useState, useEffect } from "react";
import { useAuthentication } from "./hooks/useAuthentication";

// pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Post from "./pages/Post/Post";
import Stock from "./pages/StockManager/Stock";
import StockReport from "./pages/StockManager/StockReport";

// components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CreatePost from "./pages/CreatePost/CreatePost";
import Search from "./pages/Search/Search";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import EditPost from "./pages/EditPost/EditPost";
import Menu from "./pages/Menu/Menu";
import SalesReport from "./pages/SalesReport/SalesReport";
import Orders from "./pages/Orders/Orders";

// context
import { AuthProvider } from "./contexts/AuthContext";



function App() {
  const [user, setUser] = useState(undefined);
  const { auth } = useAuthentication();

  const loadingUser = user === undefined;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth]);

  if (loadingUser) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="App">
      <AuthProvider value={{ user }}>
        <BrowserRouter>
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route
                path="/posts/create"
                element={user ? <CreatePost /> : <Navigate to="/login" />}
              />
              <Route
                path="/posts/edit/:id"
                element={user ? <EditPost /> : <Navigate to="/login" />}
              />
              <Route path="/posts/:id" element={<Post />} />
              <Route path="/search" element={<Search />} />
              <Route
                path="/login"
                element={!user ? <Login /> : <Navigate to="/" />}
              />
              <Route
                path="/register"
                element={!user ? <Register /> : <Navigate to="/" />}
              />
              <Route
                path="/stock"
                element={user ? <Stock /> : <Navigate to="/login" />}
              />
              <Route
                path="/stock-report"
                element={user ? <StockReport /> : <Navigate to="/login" />}
              />
              <Route
                path="/menu"
                element={user ? <Menu /> : <Navigate to="/login" />}
              />
              <Route
                path="/sales-report"
                element={user ? <SalesReport /> : <Navigate to="/login" />}
              />
              <Route
                path="/orders"
                element={user ? <Orders /> : <Navigate to="/login" />}
              />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;