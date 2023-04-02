import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Box, Typography, styled, Icon } from "@mui/material";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import { styles } from "../styles";
import { useSelector } from "react-redux";


const Text = styled(Typography)`
  font-size: 14px;
  margin-top: 5px;
`;

const Image = styled("img")({
  width: 100,
  height: 400,
});

const Wrapper = styled(Box)`
    padding: 25px 15px;
    align-items: 'center';
    infiniteLoop={true}
    centerSlidePercentage:80
    width: 100

`;

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

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

const Restaurant = () => {

  const foodItems = useSelector((state) => state ? state.restaurants[state.rid]._menu : '');
  console.log(foodItems);
  return (
    <>
      <div className="mt-20">
        <p className="text-black font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Order Your Meal
        </p>
        <h2 className="text-black font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]">
          Welcome, user
        </h2>
      </div>
      <Carousel
        className="mb-5"
        swipeable={false}
        draggable={false}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        centerMode={true}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <Wrapper textAlign="center" className="width: 100px">
          <Image
            src="https://thewowstyle.com/wp-content/uploads/2015/01/nature-images..jpg"
            alt="product"
          />
        </Wrapper>
        <Wrapper textAlign="center">
          <Image
            src="https://thewowstyle.com/wp-content/uploads/2015/01/nature-images..jpg"
            alt="product"
          />
        </Wrapper>
        <Wrapper textAlign="center">
          <Image
            src="https://thewowstyle.com/wp-content/uploads/2015/01/nature-images..jpg"
            alt="product"
          />
        </Wrapper>
      </Carousel>

      {/* <div className="flex flex-row justify-center justify-between bg-orange-400 mx-20">
            <div className="mx-20 text-white " >Item Name</div>
            <div className="text-white">Price</div>
            <div className="text-white">Available qty</div>
            <div className="mx-20 text-white" >Action</div>
        </div> */}
      <div className="mb-10">
        <h2 className={styles.sectionHeadText}>
          FIND THE DISHES THAT MATCH YOUR TASTE
        </h2>
      </div>
      <div className="flex item-start ml-20">
        <h6 className={`${styles.sectionHeadText}`}>Restaurant Name</h6>
      </div>
      <div className="flex flex-col  justify-center gap-10 mt-15 mr-20">
        {dishes.map((dish) => {
          return (
            <div className="flex flex-row gap-10 justify-center ml-20 mt-10 bg-[#FFFFF0]">
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

              <div className="mt-5 flex-2 mr-10 text-black">
                <AddToPhotosIcon onclick="" />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Restaurant;
