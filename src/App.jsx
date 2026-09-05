
import './App.css'
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Checkout from "./pages/Checkout";
import Navbar from "./components/Navbar";
import AuthProvider from "./context/AuthContext";
import ProductDetails from "./pages/ProductDetails";
import CartProvider from "./context/CartContext";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <div className="app">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="products/:id" element={<ProductDetails />} />
          </Routes>
        </div>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;

{/* OLD CODE
          
          const [user, setUser] = useState({ name: "", isAuth: false});

          function login(name){
            setUser({name: name, isAuth: true});
          }

          function logout() {
            setUser({name: "", isAuth: false});
          }

          <AuthContext.Provider value={{ user, login, logout }}>
            <Navbar />
            <Route path="/" element={<HomePage />}/>
            <Route path="/fridge" element={<FridgePage />}/>
            <Route path="/profile" element={<ProfilePage />}/>
            <Route path="/login" element={<LoginPage />}/>
            <Route path="*" element={<h1>404 Not Found</h1>}/>
          </AuthContext.Provider>
  */}
  {/*

function Navbar() {
  const {user, logout} = useContext(AuthContext);

  return(
    <header
      style={{
        padding: "1rem 1.5rem",
        marginBottom: "1rem",
        borderBottom: "1px solid #e5e7eb",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <nav style={{ display: "flex", gap: "1rem" }}>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/fridge">Fridge</Link>
      </nav>

      <div>
        {!user.isAuth ? <Link to="/login">Login</Link> : <button onClick={logout}>Logout</button>}
      </div>
    </header>
  )
}

function HomePage() {
  const {user} = useContext(AuthContext);
  return (
    <div style={{ padding: "0 1.5rem" }}>
      <h1>Home</h1>
      {user.isAuth ? (
        <p>Welcome back, {user.name}!</p>
      ) : (<p>You are not logged in. Go to the login page to sign in.</p>)}
      
    </div>
    
  );
}

function ProfilePage() {
  const {user} = useContext(AuthContext);
  return (
    <div style={{ padding: "0 1.5rem" }}>
      <h1>Profile</h1>
      <p>Name: {user.name}</p>
      <p>Here you could show more user info from the context.</p>
    </div>
  );
}

function LoginPage() {
  const [name, setName] = useState("");
  const {user, login} = useContext(AuthContext);

  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim()) return;
    login(name);
  }

  return (
    <div style={{ padding: "0 1.5rem" }}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit} style={{ marginTop: "1rem" }}>
        <label>
          Name
          <input
            type="text"
            placeholder="Type any name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ marginLeft: "0.5rem" }}
          />
        </label>
        <button type="submit" style={{marginLeft: "0.5rem"}}>
          Log in
        </button>
      </form>
      {user.isAuth && <p>User Logged In</p>}
    </div>
  )
}

function FridgePage() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: "0 1.5rem" }}>
      <h1>Fridge</h1>

      <p>What's in my fridge</p>
      <button onClick={() => setCount(count + 1)}>Add Item</button>
      <p>Items in fridge: {count}</p>

      <button onClick={() => setCount(0)}>Clear Fridge</button>

    </div>
  );
}

*/}
