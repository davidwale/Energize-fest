'use client'
import EventsCard from './EventsCard';


const EventsList = ({events}) => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 py-10">
      {events.map((event) => (
        <EventsCard key={event.id} event={event} />
      ))}
    </div>
  );
};

export default EventsList