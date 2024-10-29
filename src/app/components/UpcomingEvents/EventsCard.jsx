import Image from "next/image";
import Link from "next/link";

function EventsCard({ event }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex justify-between items-center mb-4">
        <span className="text-pink font-semibold">{event.organizer}</span>
        <span className="text-gray-500">{event.time}</span>
      </div>
      <div className="relative  h-[200px] w-full overflow-hidden rounded-md">
        <Image
          src="/assets/Images/cover.jpg"
          alt="Slide 1"
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>
      <div className="my-4">
        <span className="bg-pink text-white text-xs font-bold px-4 py-2 rounded-full">
          View Event
        </span>
      </div>
      <h2 className="text-lg font-semibold text-pink mb-2">{event.title}</h2>
      <p className="text-gray-600 mb-4">{event.description}</p>
      <div className="flex justify-between items-center mb-4">
        <span className="text-gray-500 text-sm">{event.date}</span>
        <span className="text-gray-500 text-sm">{event.location}</span>
      </div>
    </div>
  );
}

export default EventsCard;
