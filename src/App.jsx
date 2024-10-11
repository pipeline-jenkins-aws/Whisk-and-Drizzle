import { Navigate, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import AdminPage from "./pages/AdminPage";
import CategoryPage from "./pages/CategoryPage";

import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
import { useUserStore } from "./stores/useUserStore";
import { useEffect } from "react";
import LoadingSpinner from "./components/LoadingSpinner";
import CartPage from "./pages/CartPage";
import { useCartStore } from "./stores/useCartStore";
import PurchaseSuccessPage from "./pages/PurchaseSuccessPage";
import PurchaseCancelPage from "./pages/PurchaseCancelPage";
import AboutPage from "./pages/AboutPage";

function App() {
  const { user, checkAuth, checkingAuth } = useUserStore();
  const { updateCartItems } = useCartStore(); // Ensure this function is defined in your useCartStore

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  useEffect(() => {
    const getCartItems = async () => {
      if (!user) return;

      try {
        const response = await fetch('/api/cart'); // Adjust to your API endpoint
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();

        // Ensure data is an array
        if (!Array.isArray(data)) throw new Error('Data is not an array');

        updateCartItems(data); // Update your cart store with the fetched items
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    getCartItems();
  }, [user, updateCartItems]); // Ensure to include updateCartItems in the dependencies

  if (checkingAuth) return <LoadingSpinner />;

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(120,200,120,0.6)_0%,rgba(150,190,210,0.5)_45%,rgba(230,230,230,0.7)_100%)]" />
        </div>
      </div>

      <div className="relative z-50 pt-20">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/signup"
            element={!user ? <SignUpPage /> : <Navigate to="/" />}
          />
          <Route
            path="/login"
            element={!user ? <LoginPage /> : <Navigate to="/" />}
          />
          <Route path="/about" element={<AboutPage />} />
          <Route
            path="/secret-dashboard"
            element={
              user?.role === "admin" ? <AdminPage /> : <Navigate to="/login" />
            }
          />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route
            path="/cart"
            element={user ? <CartPage /> : <Navigate to="/login" />}
          />
          <Route
            path="/purchase-success"
            element={user ? <PurchaseSuccessPage /> : <Navigate to="/login" />}
          />
          <Route
            path="/purchase-cancel"
            element={user ? <PurchaseCancelPage /> : <Navigate to="/login" />}
          />
        </Routes>
      </div>
      <Toaster />
    </div>
  );
}

export default App;
