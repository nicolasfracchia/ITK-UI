import Link from "next/link";
import CardVertical from "./CardVertical";
import "../app/styles/components/latestEvents.css";



const LatestEvents = () => {
  // This constant is only simulating a response from the API to show any quantity of events
  const eventsContentTest = [
    {
      id: 1,
      imagePath: '/images/events/evt1.png',
      title: 'TECHNOLOGY ADDICT24',
      description: 'Join us for InnovateX, a dynamic tech event where industry leaders and innovators come together to discuss the future of technology. This free event will cover the latest trends in...',
      location: 'TechHub Auditorium, 123 Innovation Drive, San Francisco, CA 94103',
      speaker: 'Dr. Debbie Jones',
      date: 'Dec 12, 2024',
      attendants: 5000,
      price: 0
    },
    { id: 2, imagePath: '/images/events/evt1.png', title: 'TECHNOLOGY ADDICT24', description: 'Join us for InnovateX, a dynamic tech event where industry leaders and innovators come together to discuss the future of technology. This free event will cover the latest trends in...', location: 'TechHub Auditorium, 123 Innovation Drive, San Francisco, CA 94103', speaker: 'Dr. Debbie Jones', date: 'Dec 12, 2024', attendants: 5000, price: 0 },
    { id: 3, imagePath: '/images/events/evt1.png', title: 'TECHNOLOGY ADDICT24', description: 'Join us for InnovateX, a dynamic tech event where industry leaders and innovators come together to discuss the future of technology. This free event will cover the latest trends in...', location: 'TechHub Auditorium, 123 Innovation Drive, San Francisco, CA 94103', speaker: 'Dr. Debbie Jones', date: 'Dec 12, 2024', attendants: 5000, price: 0 },
    { id: 4, imagePath: '/images/events/evt1.png', title: 'TECHNOLOGY ADDICT24', description: 'Join us for InnovateX, a dynamic tech event where industry leaders and innovators come together to discuss the future of technology. This free event will cover the latest trends in...', location: 'TechHub Auditorium, 123 Innovation Drive, San Francisco, CA 94103', speaker: 'Dr. Debbie Jones', date: 'Dec 12, 2024', attendants: 5000, price: 0 },
    { id: 5, imagePath: '/images/events/evt1.png', title: 'TECHNOLOGY ADDICT24', description: 'Join us for InnovateX, a dynamic tech event where industry leaders and innovators come together to discuss the future of technology. This free event will cover the latest trends in...', location: 'TechHub Auditorium, 123 Innovation Drive, San Francisco, CA 94103', speaker: 'Dr. Debbie Jones', date: 'Dec 12, 2024', attendants: 5000, price: 0 },
    { id: 6, imagePath: '/images/events/evt1.png', title: 'TECHNOLOGY ADDICT24', description: 'Join us for InnovateX, a dynamic tech event where industry leaders and innovators come together to discuss the future of technology. This free event will cover the latest trends in...', location: 'TechHub Auditorium, 123 Innovation Drive, San Francisco, CA 94103', speaker: 'Dr. Debbie Jones', date: 'Dec 12, 2024', attendants: 5000, price: 0 }
  ];

  return (
    <section className="latestEvents">
      <div id="latestEventsSectionSpaced"></div>
      <h2>Latest events</h2>
      <Link href={`/events`}>View all events</Link>

      <div className="latestEvents-container">
        <div className="slider-container">
          {eventsContentTest.map((content, index) => {
            return (
              <CardVertical key={`event_id_${index}`} content={content} />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LatestEvents;