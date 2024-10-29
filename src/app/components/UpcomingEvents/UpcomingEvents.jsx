import Image from 'next/image';
import React from 'react'
import EventsList from './EventsList';
import { events } from '@/app/hooks/MockEvents';

const UpcomingEvents = () => {
  return (
    <section className="bg-[#f7f7f8]">
      <div className="w-full h-[200px] relative overflow-hidden">
        <Image
          src="/assets/Images/banner.jpg"
          alt="banner"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
        <p className="absolute inset-0 flex items-center justify-center text-white z-20 text-4xl font-semibold">
          Find Your Event
        </p>
      </div>

      <section className=" lg:px-20 px-10 flex flex-col items-center justify-center">
        <p className="text-[#757480] text-center py-10 lg:w-[60%] w-full">
          Mark your calendar, bring the squad and let’s party. There’s
          definitely something for you. Attend our live concerts with your
          favorite artists, game nights with a twist, and a must attend sport
          tournament! Each event is designed for fun like no other. Find an
          event near you and secure your spot today.
        </p>

        <EventsList events={events} />
      </section>
    </section>
  );
}

export default UpcomingEvents