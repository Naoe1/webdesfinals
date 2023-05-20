import { useEffect, useState } from "react";
import products from "../products"
import { AppShell, Navbar, Text } from "@mantine/core";
import Home from "./Home";
import ShopHome from "./ShopHome";
import ShopList from "./ShopList";
import { BrowserRouter as Router, Link, Route, Routes, useLocation } from "react-router-dom";
import NotFound from "./NotFound"
import NavbarSimple from "./Navbar";
import HeaderMiddle from "./Navheader";
import Cart from "./Cart"
import { FooterLinks } from "./Footer";

export default function App() {
  const [prodDisplay, setProdDisplay] = useState();
  const [cart, setCart] = useState([]);
  useEffect(() => {
    console.log(cart)
  }, [cart])
  const location = useLocation();
  
  console.log(prodDisplay)
  return (
      <AppShell
        padding={0}
        navbarOffsetBreakpoint="sm"
        navbar={
          location.pathname.includes('/shop' ) ? <NavbarSimple setProdDisplay={setProdDisplay}/>: null
        }
        header={
          <HeaderMiddle
            links={[
              { link: "/", label: "Home" },
              { link: "/shop", label: "Shop" },
              { link: "/cart", label: "Cart" },
            ]}
          />
        }
      >
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/shop" element={<ShopHome/>}/>
          <Route path="/cart" element={<Cart cart={cart}/>}/>
          <Route path="/shop/:prodType" element={<ShopList prodDisplay={prodDisplay} cart={cart} setProdDisplay={setProdDisplay} setCart={setCart}/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        <FooterLinks/>
      </AppShell>
  );
}
