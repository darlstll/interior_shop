import React from "react";
import { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { Footer } from "../footer";
import { Order } from "../order";
import { FaCartShopping } from "react-icons/fa6";

export const Layouts = () => {


  const setActive = ({ isActive }) => (isActive ? "active-page" : null);

  return (
    <>
      <header>
        <nav>
          <div className="container">
            <div className="nav">
            {/* <span className="logo">Interior shop</span> */}
              
              <NavLink to="/" className={setActive}>
                Главная
              </NavLink>
              <NavLink to="/about" className={setActive}>
                О нас
              </NavLink>
              <NavLink to="/products" className={setActive}>
                Продукты
              </NavLink>
            </div>
          </div>
        </nav>
      </header>

<main>
        <div className="container">
          <Outlet />
        </div>
      </main>

<Footer/>
    </>
    );
  };
