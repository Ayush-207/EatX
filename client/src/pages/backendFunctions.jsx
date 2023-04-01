import {ethers} from 'ethers';
import resabi from '../assets/abi.json';
import contractInfo from '../assets/polygontest.json';


const provider = new ethers.provider.Web3Provider(window.ethereum);

export default async function fetchRestaurants(){

    const contract = new ethers.Contract(contractInfo.address,resabi,provider);
    
}