import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import logo from "../assets/logo.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import {AiOutlineShoppingCart} from "react-icons/ai" ;
const NavBar = () => {
  const[active,setActive] = useState(""); 
  return (
         <nav
        className={`${styles.paddingX} w-full h-[90px] flex items-center py-5 fixed top-0 z-20 bg-[#FFFFFF]`}
        >
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                <Link to="/" className="flex items-center" onClick={()=>{
                setActive("") ;
                window.scrollTo(0,0);
                }}>
                <img src={logo} alt="logo" className="w-22 h-20 object-contain" ></img>
                {/* <p className="text-black text-[18px] font-bold cursor-pointer">Manit Singhal</p> */}
                </Link>
                <Link to="/RestaurantRegister">
                    <div  className={`${styles.heroSubText} text-[#000000]`}>
                        <h1 className="cursor-pointer">Switch to Selling</h1>
                    </div>
                </Link>
                <span className="text-[40px]"><AiOutlineShoppingCart/></span>
            </div>
            
        </nav>
  );
};

export default NavBar;