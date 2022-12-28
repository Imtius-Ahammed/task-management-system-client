import { Button } from 'flowbite-react';
import React from 'react';
import Banner from '../Banner/Banner';

const Home = () => {

  return (
    <div>
      <h2>Hello</h2>
      <Banner></Banner>
      <form>
      <div className='pt-4'>
        <h3>Enter your Task</h3>
        <textarea name="task" id="" cols="50" rows="10"></textarea>
        <div className='flex justify-center'>
      <Button  color="gray">
      Submit </Button>
      </div>
       
      </div>
      </form>
     
      
    </div>
  );
};

export default Home;