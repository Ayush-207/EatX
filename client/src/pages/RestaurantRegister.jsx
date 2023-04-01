import React from "react";
import { GiHamburger } from "react-icons/gi";
import { useState } from "react";
import RestaurantRegisterForm from "../components/RestaurantRegisterForm" ; 
function  RestaurantRegister() {

const [opened,setOpened] = useState(false);
  return (
    <div className="py-8 grid grid-cols-1 place-items-center gap-0 lg:grid-cols-2 lg:gap-10 md:py-32 mt-20">
            <div className="mb-16 text-center lg:mb-0 lg:text-left">
                <h1 className="text-4xl font-bold leading-12 md:text-6xl lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px]">
                    Register Your <br/> <span className="text-[#9D5353]">Restaurant Now</span> 
                </h1>
                  <div className="cursor-pointer flex justify-center items-center gap-2 w-max m-auto py-2 px-4 bg-[#9D5353] text-white font-bold border border-black-500 rounded-md ease-in-out duration-150 shadow-slate-600 hover:bg-white hover:text-black lg:m-0 md:py-3 md:px-6" title="Order Now">
                      <br/>
                      <span onClick={()=>setOpened(true)}>Register Now</span>
                      <span><GiHamburger /></span>
                  </div>
            </div>

            <div className="w-[90%]">
                <img src="https://img.freepik.com/premium-photo/cozy-restaurant-with-people-waiter_175935-230.jpg?w=2000" alt="Women-Delivering-A-Package" />
            </div>

            {opened && <RestaurantRegisterForm opened={opened} setOpened={setOpened} />}

    </div>

    
  );
}

export default RestaurantRegister;
