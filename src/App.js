
import { Route, Routes } from "react-router-dom";
import "./App.css"
import About from "./components/About";
import AdminDetails from "./components/AdminDetails";
import Contact from "./components/Contact";
import FeaturedPro from "./components/FeaturedPro";
import Home from "./components/Home";
import MainIndex from "./components/MainIndex";
import Nav from "./components/Nav";
import NewPro from "./components/NewPro";
import NoMatch from "./components/NoMatch";
import Order from "./components/Order";
import Product from "./components/Product";
import { User } from "./components/User";
import { UserDetails } from "./components/UserDetails";

function App() {
  return (
    <>
      <div className="app">
        <h1>React Router</h1>
        <Nav />
      </div>
      <Routes>
        <Route path="/" element={<MainIndex />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/order" element={<Order />} />
        <Route path="/product" element={<Product />}>
          <Route path="featured" element={<FeaturedPro />} />
          <Route path="new" element={<NewPro />} />
        </Route>
        <Route path="users" element={<User />}>
          <Route path=":usersid" element={<UserDetails />} />
          <Route path="admin" element={<AdminDetails />} />
        </Route>
        <Route path="/*" element={<NoMatch />} />
      </Routes>
    </>

  );
}

export default App;
