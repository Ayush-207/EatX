import { Button, Loader, Pagination, Skeleton } from "@mantine/core";
import { createStyles, Modal, useMantineTheme } from "@mantine/core";
// import { Help } from "tabler-icons-react";
import ReactDOM from "react-dom";
// import Link from "next/link";

import React, { useMemo } from 'react';
// import { addRestaurant, connectWallet, isRestrauntExist } from "api";

import { useEffect, useState } from "react";
import { ethers } from 'ethers';
import contractInfo from '../assets/polygontest.json';
import resabi from '../assets/abi.json'

const provider = new ethers.providers.Web3Provider(window.ethereum);

async function addFood(restData) {
  try {
    console.log(restData);
    const restaurantContract = new ethers.Contract(contractInfo.address, resabi, provider.getSigner());
    const ownerAddress = await restaurantContract.owner();
    const ownerBalance = await provider.getBalance(ownerAddress);
    console.log(ownerBalance.toString());
    // const functionInputs = ['pizza hut', 'description dakdjkjfhdksfkjkjhfs', 'continental', 'Delhi'];
    const res = await restaurantContract.addRestaurants(restData.name, restData.description, restData.url, restData.price);
    console.log(res);
    const receipt = await res.wait();
    console.log(receipt.blockNumber);
  } catch (error) {
    console.error(error);
  }
}

// import RestNavbar from "components/Resturant-Navbar";
// import { useDropzone } from "react-dropzone"
const useStyles = createStyles((theme) => ({
  rowSelected: {
    backgroundColor: "bg-primary",
  },
}));


const baseStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#eeeeee',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  outline: 'none',
  transition: 'border .24s ease-in-out'
};

const focusedStyle = {
  borderColor: '#2196f3'
};

const acceptStyle = {
  borderColor: '#00e676'
};

const rejectStyle = {
  borderColor: '#ff1744'
};

// function StyledDropzone(props) {
//   const {
//     getRootProps,
//     getInputProps,
//     isFocused,
//     isDragAccept,
//     isDragReject,
//     acceptedFiles
//   } = useDropzone({ accept: { 'image/*': [] } });

//   const style = useMemo(() => ({
//     ...baseStyle,
//     ...(isFocused ? focusedStyle : {}),
//     ...(isDragAccept ? acceptStyle : {}),
//     ...(isDragReject ? rejectStyle : {})
//   }), [
//     isFocused,
//     isDragAccept,
//     isDragReject
//   ]);

//   const files = acceptedFiles.map(file => (
//     <li key={file.path}>
//       {file.path} - {file.size} bytes
//     </li>
//   ))
//   return (
//     <div className="container">
//       <div {...getRootProps({ style })}>
//         <input {...getInputProps()} />
//         <p>Drag 'n' drop some files here, or click to select files</p>
//       </div>
//       <aside>
//         <ul>{files}</ul>
//       </aside>
//     </div>
//   );
// }

{/* <StyledDropzone /> */}

// ReactDOM.render(<StyledDropzone />, document.getElementById("root"));

const RestaurantMenuForm = ({ opened2, setOpened2 }) => {
  const theme = useMantineTheme();

  //   const [opened2, setOpened2] = useState(true);
  const [restData, setRestData] = useState({
    name: '',
    description: '',
    price: 0,
    url: ''
  });

  return (
    <>
      <div className="w-[80%] h-[80%] bg-gradient-to-r from-primary-500 to-blue-500">
        <Modal
          centered
          overlaycolor={
            theme.colorScheme === "dark"
              ? theme.colors.dark[9]
              : theme.colors.gray[2]
          }
          withCloseButton={false}
          overlayopacity={0.55}
          overlayblur={3}
          opened={opened2}
          onClose={() => setOpened2(false)}
          size="lg">
          <div
            className="cards w-sm"
            style={{ background: "var(--pastel-color)" }}>
            <h3 className="text-xl text-gray-900 dark:text-black font-bold mb-5">
              Add Menu
            </h3>
            <div className=" items-center">
              <label className="mb-2 basis-1/5 block text-sm font-medium text-gray-900 ">
                Food Item
              </label>

              <input
                type="text"
                className="form-control mb-2 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleText0"
                placeholder="Official Name"
                value={restData.name}
                onChange={(e) =>
                  setRestData((old) => ({ ...old, name: e.target.value }))
                }
              />
            </div>

            <div className=" items-center mt-3">
              <label className="mb-2 basis-1/5 block text-sm font-medium text-gray-900 ">
                Description
              </label>

              <input
                type="text"
                className="form-control mb-2 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleText0"
                placeholder="category"
                value={restData.category}
                onChange={(e) =>
                  setRestData((old) => ({ ...old, description: e.target.value }))
                }
              />
            </div>

            <div className=" items-center mt-3">
              <label className="mb-2 basis-1/5 block text-sm font-medium text-gray-900 ">
                Image url
              </label>

              <textarea
                type="text"
                className="form-control mb-2 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleText0"
                placeholder="Description"
                value={restData.description}
                onChange={(e) =>
                  setRestData((old) => ({
                    ...old,
                    url: e.target.value,
                  }))
                }
              />
            </div>

            {/* <div className=" items-center mt-3">
              <label className="mb-2 basis-1/5 block text-sm font-medium text-gray-900 ">
                Address
              </label>

              <input
                type="text"
                className="form-control mb-2 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleText0"
                placeholder="physical address"
                value={restData.ptaa}
                onChange={(e) =>
                  setRestData((old) => ({ ...old, ptaa: e.target.value }))
                }
              />
            </div> */}

            {/* image url */}
            <div className=" items-center mt-3">
              <label className="mb-2 basis-1/5 block text-sm font-medium text-gray-900 ">
                Price
              </label>

              <input
                type="text"
                className="form-control mb-2 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleText0"
                placeholder="url"
                value={restData.imageUrl}
                onChange={(e) =>
                  setRestData((old) => ({ ...old, price: e.target.value }))
                }
              />
              {/* <StyledDropzone/> */}
            </div>

            <div className="flex items-center space-x-2 mt-5 justify-end">
              {/* <Link href="/resturant/add-items" legacyBehavior> */}
              <a>
                <button
                  onClick={() => addFood(restData)}
                  className="bg-primary text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                // style={{ background: loader ? "var(--secondary-color)" : "var(--primary-color)" }}
                >
                  Add
                </button>
              </a>
              {/* </Link> */}

              <button
                className="bg-mainRed text-gray-500 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 "
                onClick={() => setOpened2(false)}>
                Cancel
              </button>
            </div>

          </div>
        </Modal>

      </div>
    </>
  );
};

export default RestaurantMenuForm;