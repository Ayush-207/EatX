import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Box, Typography, styled } from '@mui/material';
import { styles } from "../styles";
import { cards } from "../constants";
import { Link } from "react-router-dom"
import { ethers } from "ethers";
import resabi from '../assets/abi.json';
import contractInfo from '../assets/polygontest.json';
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";


if (window.ethereum) {
    // MetaMask is available

    window.ethereum.request({ method: 'eth_requestAccounts' })
        .then((accounts) => {
            // User has authorized the app
            const account = accounts[0];
            console.log(`Connected to MetaMask account: ${account}`);
        })
        .catch((error) => {
            // User has denied the app or MetaMask is not available
            console.log(`Failed to connect to MetaMask: ${error.message}`);
        });
} else {
    // MetaMask is not available
    window.ethereum.enable();
}

const provider = new ethers.providers.Web3Provider(window.ethereum);

const Image = styled('img')({
    width: "auto",
    height: 600,
})

const Wrapper = styled(Box)`
    padding: 25px 15px;
    align-items: 'center';
`

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
    }
};




const Card = ({
    index,
    _name,
    _location,
    _image,
    _category,
    _description,
    _id
}) => {
    const navigate = useNavigate();
const dispatch = useDispatch();

function callRestaurant(_id){
    dispatch({type : redirectToRestaurant, payload : _id})
    return navigate("/restaurant");
}
    return (
        <div className='bg-[#FFFFF0] p-5 rounded-2xl sm:w-[500px] w-full' onClick={()=>callRestaurant(_id)}>
                <div className='relative w-full h-[300px]'>
                    <img
                        src={_image}
                        alt='card_image'
                        className='w-full h-full object-cover rounded-2xl'
                    />
                </div>

                <div className='mt-5 flex flex-col items-start'>
                    <h3 className='text-black font-bold text-[40px]'>{_name}</h3>
                    <p className="text-[20px]">{_category}</p>
                    <p className='mt-2 text-secondary text-[15px] text-start'>{_description}</p>
                    <p className="font-bold">{_location}</p>


                </div>
        </div>

    )
}

function Home() {

    const dispatch = useDispatch();
    const restaurants = useSelector((state) => !state ? '' : state.restaurants);
    const temp=[];
    for(let i =0; i<restaurants.length; i++){
        temp.push(restaurants[i]);
    }
    const getRestaurants = async () => {
        const restaurantContract = new ethers.Contract(contractInfo.address, resabi, provider);
        const restaurants = await restaurantContract.getRestaurants();
        console.log(restaurants);
        dispatch({ type: 'fetchRestaurants', payload: restaurants });
    }

    useEffect(() => {
        getRestaurants();
    },[])

    return (
        <div className="top-[120px] mt-[80px]">
            <Carousel
                swipeable={true}
                draggable={false}
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={4000}
                keyBoardControl={true}
                centerMode={true}
                containerClass="carousel-container"
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px">
                <Wrapper>
                    <Image src="https://home.iitd.ac.in/images/for-faculty/amul.jpg" />

                </Wrapper>
                <Wrapper>
                    <Image src="https://i0.wp.com/stanzaliving.wpcomstaging.com/wp-content/uploads/2022/04/ad4f8-shutterstock_1189146616-min.jpg?fit=1000%2C632&ssl=1" />

                </Wrapper>
                <Wrapper>
                    <Image src="https://assets.cntraveller.in/photos/62975dd66a6d562435831f90/master/pass/new-restaurants-delhi-lead.jpg" />

                </Wrapper>
            </Carousel>
            <div>
                <div className={`${styles.heroHeadText} text-[#000000]`}>
                    <h1>Best Food in Delhi NCR</h1>
                </div>
                <div className='mt-20 flex flex-wrap gap-7 justify-center'>
                    {temp.map((card, index) => (
                        <Card key={`card-${index}`} index={index} {...card} />
                    ))}
                </div>
            </div>
        </div>

    );
}

export default Home;