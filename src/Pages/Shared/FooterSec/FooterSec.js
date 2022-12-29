import { Footer } from 'flowbite-react';
import React from 'react';
import { FaBeer, FaFacebook, FaTelegram, FaWhatsapp } from 'react-icons/fa';

const FooterSec = () => {
  return (
    <div>
      <div className='bg-sky-100 h-52'>
       <div>
       <h1 className='text-3xl py-10'>@CopyRight Reserved For Md. Imtius Ahammed</h1>
       </div>
       <hr />
       <div className='flex justify-center text-3xl py-5 gap-5'>
        <FaFacebook></FaFacebook>
        <FaTelegram></FaTelegram>
        <FaWhatsapp></FaWhatsapp>
       </div>
      </div>
     
    </div>
  );
};

export default FooterSec;