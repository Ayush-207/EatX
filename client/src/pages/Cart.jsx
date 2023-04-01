import React from "react";
import { styles } from "../styles";
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import { Link } from "react-router-dom";

const dishes = [
  {
    name: "dal makhani",
    price: "Rs 20",
    QTY: 20,
    Action: "+",
    desc: "ndsjjdnjfanksfnkandnakdndancaa ajshdansdansidakda dcjasbdjasndkasodkashdjasbckjhsdkcskdcnsdncksd idscnzkd"
  },
  {
    name: "Paneer Butter Masala",
    price: "Rs 50",
    QTY: 10,
    Action: "+",
    desc: "ndsjjdnjfanksfnkandnakdndancaa ajshdansdansidakda dcjasbdjasndkasodkashdjasbckjhsdkcskdcnsdncksd idscnzkd"
  },
  {
    name: "Murgh makhani",
    price: "Rs 80",
    QTY: 30,
    Action: "+",
    desc: "ndsjjdnjfanksfnkandnakdndancaa ajshdansdansidakda dcjasbdjasndkasodkashdjasbckjhsdkcskdcnsdncksd idscnzkd"
  },
]

const compl = [

  {
    name: "dal makhani",
    price: "Rs 20",
    QTY: 20,
    Action: "+",
    desc: "ndsjjdnjfanksfnkandnakdndancaa ajshdansdansidakda dcjasbdjasndkasodkashdjasbckjhsdkcskdcnsdncksd idscnzkd"
  },
  {
    name: "Paneer Butter Masala",
    price: "Rs 50",
    QTY: 10,
    Action: "+",
    desc: "ndsjjdnjfanksfnkandnakdndancaa ajshdansdansidakda dcjasbdjasndkasodkashdjasbckjhsdkcskdcnsdncksd idscnzkd"
  },
  {
    name: "Murgh makhani",
    price: "Rs 80",
    QTY: 30,
    Action: "+",
    desc: "ndsjjdnjfanksfnkandnakdndancaa ajshdansdansidakda dcjasbdjasndkasodkashdjasbckjhsdkcskdcnsdncksd idscnzkd"
  },

]

const Cart = () => {
  return (
    <>
      <div className="mt-20 flex flex-row item-start mb-5"><h6 className={`${styles.sectionHeadText}`}>Restaurant Name</h6></div>
      <div className="flex flex-row item-start bg-[#FFFFF0]">
        <AccessAlarmIcon className="ml-5 mr-2"></AccessAlarmIcon>
        Delivery in 30 mins
      </div>
      <div
        style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', margin: '15px' }}
      >
        <div style={{ flex: 2, height: '1px', backgroundColor: 'black' }} />

        <div style={{ flex: 1 }}>
          <h3>ITEM(S)</h3>
        </div>

        <div style={{ flex: 2, height: '1px', backgroundColor: 'black' }} />
      </div>



      <div className='flex flex-col  justify-center gap-10 mt-15'>
        {dishes.map((dish) => {
          return (
            <div className='flex flex-row gap-10 justify-center ml-20 mt-10 bg-[#FFFFF0]'>
              <div className=' h-[150px] flex-2'>
                <img
                  src="https://thewowstyle.com/wp-content/uploads/2015/01/nature-images..jpg"
                  alt='project_image'
                  className='w-full h-full object-cover rounded-2xl'
                />

                {/* <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open("", "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              
            </div>
          </div> */}
              </div>



              <div className='mt-5 flex flex-1 item-start'>
                <div className="flex flex-col mr-20 item-start">
                  <h3 className='item-start text-left text-black font-bold text-[18px]'>{dish.name}</h3>
                  <h3 className='text-black text-left font-bold text-[16px]'>QTY Available: {dish.QTY}</h3>
                  <h2 className='mt-2 text-black text-left text-secondary text-[14px]'>{dish.price}</h2>
                  <p className='mt-2 text-secondary text-[14px]'>{dish.desc}</p>
                </div>
              </div>





            </div>
          )

        })}
      </div>







      <div className="flex flex-col mt-10">

        <div className="flex flex-row item-start mb-5">COMPLEMENT YOUR MEAL WITH</div>
        <div>
          <div className="flex flex-row justify-center">
            {compl.map((comp) => {
              return (
                <div className='bg-[#FFFFF0] p-5 rounded-2xl sm:w-[500px] w-full'>
                  <div className='relative w-full h-[300px]'>
                    <img
                      src="https://thewowstyle.com/wp-content/uploads/2015/01/nature-images..jpg"
                      alt='card_image'
                      className='w-full h-full object-cover rounded-2xl'
                    />
                  </div>

                  <div className='mt-5 flex flex-col items-start'>
                    <h3 className='text-black font-bold text-[40px]'>{comp.name}</h3>
                    <p className="text-[20px]">{comp.desc}</p>
                    <p className='mt-2 text-secondary text-[15px] text-start'>{comp.QTY}</p>
                    <p className="font-bold">{comp.price}</p>


                  </div>

                </div>
              )
            })

            }

          </div>
        </div>

      </div>


      <div className="mt-10">
        <Link to='/restaurant'>
          <button className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">Add more items</button>
        </Link>
      </div>




      <div className="mt-7">Bill Summary</div>

    </>
  )
}

export default Cart;