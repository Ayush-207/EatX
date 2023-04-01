import React from "react";
import { styles } from "../styles";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import { Link } from "react-router-dom";

const dishes = [
  {
    name: "Dal makhani",
    price: "Rs 20",
    QTY: 20,
    Action: "+",
    desc: "Dummy text to describe the food item! Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
  },
  {
    name: "Paneer Butter Masala",
    price: "Rs 50",
    QTY: 10,
    Action: "+",
    desc: "Dummy text to describe the food item! Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
  },
  {
    name: "Murgh makhani",
    price: "Rs 80",
    QTY: 30,
    Action: "+",
    desc: "Dummy text to describe the food item! Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
  },
];

const compl = [
  {
    name: "Dal makhani",
    price: "Rs 20",
    QTY: 20,
    Action: "+",
    desc: "Dummy text to describe the food item! Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
  },
  {
    name: "Paneer Butter Masala",
    price: "Rs 50",
    QTY: 10,
    Action: "+",
    desc: "Dummy text to describe the food item! Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
  },
  {
    name: "Murgh makhani",
    price: "Rs 80",
    QTY: 30,
    Action: "+",
    desc: "Dummy text to describe the food item! Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
  },
];

const Cart = () => {
  return (
    <>
      <div className="mt-20 flex flex-row item-start mb-5 py-5 px-8">
        <h1 className="text-[60px] font-medium text-[#632626]">
          Restaurant Name
        </h1>
      </div>
      <div className="flex flex-row item-start">
        <AccessAlarmIcon className="ml-5 mr-2"></AccessAlarmIcon>
        Delivery in 30 mins
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          margin: "15px",
        }}
      >
        <div style={{ flex: 3, height: "1px", backgroundColor: "black" }} />

        <div style={{ flex: 1 }} className="ml-[-10px]">
          <h3>ITEM(S) ADDED</h3>
        </div>

        <div style={{ flex: 3, height: "1px", backgroundColor: "black" }} />
      </div>

      <div className="flex flex-col  justify-center gap-10 mt-15 mr-20">
        {dishes.map((dish) => {
          return (
            <div className="flex flex-row gap-10 justify-center ml-20 bg-[#FFFFF0]">
              <div className=" h-[250px] flex-2 px-8 py-8">
                <img
                  src="https://thewowstyle.com/wp-content/uploads/2015/01/nature-images..jpg"
                  alt="project_image"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <div className="mt-5 flex flex-1 item-start px-8 py-8">
                <div className="flex flex-col mr-20 item-start">
                  <h3 className="item-start text-left text-black font-bold text-[30px] ">
                    {dish.name}
                  </h3>
                  <h2 className="mt-2 text-black text-left text-secondary font-medium text-[20px]">
                    {dish.price}
                  </h2>
                  <h3 className="text-black text-left font-medium text-[16px]">
                    QTY Available: {dish.QTY}
                  </h3>
                  <p className="mt-2 text-secondary text-[15px]">{dish.desc}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex flex-col mt-10">
        <div className={`${styles.sectionHeadText}`}>
          COMPLEMENT YOUR MEAL WITH
        </div>
        <div>
          <div className="flex flex-row justify-center gap-7">
            {compl.map((comp) => {
              return (
                <div className="bg-[#FFFFF0] p-5 rounded-2xl sm:w-[500px] w-full">
                  <div className="relative w-full h-[300px]">
                    <img
                      src="https://thewowstyle.com/wp-content/uploads/2015/01/nature-images..jpg"
                      alt="card_image"
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>

                  <div className="mt-5 flex flex-col items-start">
                    <h3 className="text-black font-bold text-[40px]">
                      {comp.name}
                    </h3>
                    <p className="text-[15px] text-left">{comp.desc}</p>
                    <p className="font-bold">{comp.price}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mt-10">
        <Link to="/restaurant">
          <button className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
            Add more items
          </button>
        </Link>
      </div>

      <div className="mt-7">Bill Summary</div>
    </>
  );
};

export default Cart;
