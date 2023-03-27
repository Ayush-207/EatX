import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../../styles";
import logo from "../../assets/logo.png";

const NavBar = () => {
  const[active,setActive] = useState("") ; 
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-[#BF8B67]`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-2" onClick={()=>{
          setActive("") ;
          window.scrollTo(0,0);
        }}>
          <img src={logo} alt="logo" className="w-21 h-20 object-contain" ></img>
          {/* <p className="text-black text-[18px] font-bold cursor-pointer">Manit Singhal</p> */}
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
