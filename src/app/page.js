'use client'
import Image from "next/image";
import { events } from "./hooks/MockEvents";
import EventsList from "./components/UpcomingEvents/EventsList";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";


export default function Home() {
   const [animateCards, setAnimateCards] = useState(false);
   const [animateText, setAnimateText] = useState(false);

   useEffect(() => {
     const timer = setTimeout(() => {
       setAnimateCards(true);
       setAnimateText(true);
     }, 4000); // Delay to trigger animation

     return () => clearTimeout(timer);
   }, []);
  const previewEvents = events.slice(0, 3);
  const router = useRouter();
  const viewAllEevents = () => {
    router.push("/events");
  };
  
  return (
    <section>
      <div className="slide-item relative w-full h-screen">
        {/* Dark overlay  to make text pop on image*/}
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black z-10"></div>

        <Image
          src="/assets/Images/cover.jpg"
          alt="Slide 1"
          layout="fill"
          objectFit="fill"
          className="w-full h-full"
        />
      </div>
      <motion.section
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="bg-[#f7f7f8] lg:px-20 px-10 flex flex-col items-center justify-center py-10"
      >
        <p className="text-black font-semibold text- text-center text-lg">
          Events Schedule
        </p>
        <p className="text-[#757480] text-center  pt-3 lg:w-[60%] w-full font-normal text-base">
          Mark your calendar, bring the squad and let’s party. There’s
          definitely something for you. Attend our live concerts with your
          favorite artists, game nights with a twist, and a must attend sport
          tournament! Each event is designed for fun like no other. Find an
          event near you and secure your spot today.
        </p>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
        >
          <EventsList events={previewEvents} />
        </motion.div>
        <button
          className="bg-green text-white font-semibold text-xl md:px-20 py-3 px-10  rounded-full"
          onClick={viewAllEevents}
        >
          View All Events
        </button>
      </motion.section>
      <motion.section
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="bg-white lg:px-20 px-10 flex flex-col items-center justify-center py-10"
      >
        <p className="text-black font-semibold text- text-center text-lg">
          Have an Event Idea? Let’s Link Up!
        </p>
        <p className="text-[#757480] text-center  pt-3 lg:w-[60%] w-full font-normal text-base">
          Got a fresh concept that could light up December? If your idea matches
          our vibe, let’s team up! Pitch it by Nov 15, and it could be part of
          Energize Fest 2024. Let’s amplify the season together and make faith
          cool everywhere!
        </p>
        <button
          className="bg-pink text-white font-semibold text-xl md:px-20 py-3 px-10  rounded-full mt-10"
          onClick={() => console.log("Pitch Your Event")}
        >
          Pitch Your Event
        </button>
      </motion.section>
      <motion.section
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 3 }}
        className="bg-[#f7f7f8] lg:px-20 px-10 flex flex-col items-center justify-center py-10"
      >
        <p className="text-black font-semibold text- text-center text-lg">
          Want to Support? Let’s Go Big Together!
        </p>
        <p className="text-[#757480] text-center  pt-3 lg:w-[60%] w-full font-normal text-base">
          Your generosity helps us bring faith-filled events to communities.
          Support us through donations or become a sponsor and make a lasting
          impact on the worldwide. Together, we’re building something huge for
          believers everywhere!
        </p>
        <button
          className="bg-yellow text-white font-semibold text-xl md:px-20 py-3 px-10 rounded-full mt-10"
          onClick={() => console.log("Pitch Your Event")}
        >
          Sponsor An Event
        </button>
      </motion.section>
    </section>
  );
}
