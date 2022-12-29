import { Carousel } from 'flowbite-react';
import React from 'react';

const Banner = () => {
  return (
    <div>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 container mx-auto">
  <Carousel>
    <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
      <img src="https://img.freepik.com/free-vector/online-exam-distant-education-landing-page-banner_33099-2272.jpg?w=1380&t=st=1672284696~exp=1672285296~hmac=2bb054c1cd772c23f6dcd3b83f4617a676d17225818be7c4944c0899a19c08c1" alt="" />
    </div>
    <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
      <img src="https://img.freepik.com/free-vector/time-management-banner-with-calendar-clock_107791-13657.jpg?w=1380&t=st=1672284714~exp=1672285314~hmac=698ac087170ca9c4363ce18470c0006969d39db7a9f9bc8d69ab88747b392b69" alt="" />
    </div>
    <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
      <img src="https://img.freepik.com/free-vector/group-office-workers-collaborating-tasks_1262-19784.jpg?w=1380&t=st=1672284728~exp=1672285328~hmac=3f55b21b4395d7bad93c473af036218418d506900e2f549c477a870f0525faa8" alt="" />
    </div>
  </Carousel>
</div>
    </div>
  );
};

export default Banner;