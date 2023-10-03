import React, { useState } from 'react'
import carData from './carData';
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { LiaBedSolid } from "react-icons/lia";
import { LiaBathSolid } from "react-icons/lia";
import { LiaArrowsAltSolid } from "react-icons/lia";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';




export default function CardItem(props) {
  const { brand, description, imgUrl, carName, price } = props;





  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);
  }

  return (
    <>
      <div className="my-2" style={{ width: '18rem' }}>

        <div className="card">
          <div className="max-w-[300px] max-h-[300px]">
            <img src={imgUrl} className="card-img-top" alt="..." style={{ height: '150px', backgroundColor: 'lightgray' }} />
          </div>

          <div className="card-body">

            <div className="card-title font-semibold text-2xl ">{brand}
              -{carName}
            </div>
            <div className='flex flex-row space-x-9 mb-2 '>
              <div className='flex flex-col justify-between '>
                <div className='flex items-center py-2 font-semibold text-sm'> <HiOutlineBuildingOffice2 className="inline mr-2" /> People</div>
                <div className='flex  items-center font-semibold text-sm'><LiaBedSolid className="inline mr-2" />Gasoline</div>

              </div>
              <div className='flex flex-col '>
                <div className='flex  font-semibold py-2 text-sm'> <LiaBathSolid className="inline mr-2" />5.3/1 Km</div>
                <div className='flex  font-semibold text-sm'><LiaArrowsAltSolid className="inline mr-2" />Automatic</div>
              </div></div>

            <hr />
            <div className="py-2 ">
              <p className="card-price d-inline px-2">
                <strong>${price}</strong> /month
              </p>

              <button className="rounded-full p-2 mt-1 bg-gray-200 px-1" onClick={handleLikeClick}>
                <FontAwesomeIcon
                  icon={faHeart}
                  className={liked ? 'text-red-500' : 'text-gray-500'}
                />
              </button>
              <button

                className="py-2 mt-1 px-3 text-sm bg-blue-400 text-white font-semibold rounded-full absolute right-2"
              >
                Rent Now
              </button>



            </div>
          </div> </div>
      </div>

    </>
  )
}

