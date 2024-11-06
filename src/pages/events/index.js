import Banner from '../../components/Banner';
import CardHorizontal from '../../components/CardHorizontal'


export default function AllEvents() {

  // This constant is only simulating a response from the API to show any quantity of events
  const eventsContentTest = [
    {
      id: 1,
      imagePath: '/images/events/evt2.png',
      date: 'WEDS, SEP 10 2024, 9AM MDT',
      title: 'Tech Innovators Meetup:',
      description: 'Unlocking Success in the Digital World',
      host: 'Edmonton Unlimited',
      categories: [{name: 'Free', color: '#007BFF'}, {name: 'Tech', color: '#151515'}],
      location: 'James mowatt T6W 5N4',
      entrance: ['general']
    },
    {id: 2,imagePath: '/images/events/evt2.png',date: 'WEDS, SEP 10 2024, 9AM MDT',title: 'Tech Innovators Meetup:',description: 'Unlocking Success in the Digital World',host: 'Edmonton Unlimited',categories: [{name: 'Free', color: '#007BFF'}, {name: 'Tech', color: '#151515'}],location: 'James mowatt T6W 5N4',entrance: ['general']},
    {id: 3,imagePath: '/images/events/evt2.png',date: 'WEDS, SEP 10 2024, 9AM MDT',title: 'Tech Innovators Meetup:',description: 'Unlocking Success in the Digital World',host: 'Edmonton Unlimited',categories: [{name: 'Free', color: '#007BFF'}, {name: 'Tech', color: '#151515'}],location: 'James mowatt T6W 5N4',entrance: ['general']},
    {id: 4,imagePath: '/images/events/evt2.png',date: 'WEDS, SEP 10 2024, 9AM MDT',title: 'Tech Innovators Meetup:',description: 'Unlocking Success in the Digital World',host: 'Edmonton Unlimited',categories: [{name: 'Free', color: '#007BFF'}, {name: 'Tech', color: '#151515'}],location: 'James mowatt T6W 5N4',entrance: ['general']},
    {id: 5,imagePath: '/images/events/evt2.png',date: 'WEDS, SEP 10 2024, 9AM MDT',title: 'Tech Innovators Meetup:',description: 'Unlocking Success in the Digital World',host: 'Edmonton Unlimited',categories: [{name: 'Free', color: '#007BFF'}, {name: 'Tech', color: '#151515'}],location: 'James mowatt T6W 5N4',entrance: ['general']},
    {id: 6,imagePath: '/images/events/evt2.png',date: 'WEDS, SEP 10 2024, 9AM MDT',title: 'Tech Innovators Meetup:',description: 'Unlocking Success in the Digital World',host: 'Edmonton Unlimited',categories: [{name: 'Free', color: '#007BFF'}, {name: 'Tech', color: '#151515'}],location: 'James mowatt T6W 5N4',entrance: ['general']},
    {id: 7,imagePath: '/images/events/evt2.png',date: 'WEDS, SEP 10 2024, 9AM MDT',title: 'Tech Innovators Meetup:',description: 'Unlocking Success in the Digital World',host: 'Edmonton Unlimited',categories: [{name: 'Free', color: '#007BFF'}, {name: 'Tech', color: '#151515'}],location: 'James mowatt T6W 5N4',entrance: ['general']},
    {id: 8,imagePath: '/images/events/evt2.png',date: 'WEDS, SEP 10 2024, 9AM MDT',title: 'Tech Innovators Meetup:',description: 'Unlocking Success in the Digital World',host: 'Edmonton Unlimited',categories: [{name: 'Free', color: '#007BFF'}, {name: 'Tech', color: '#151515'}],location: 'James mowatt T6W 5N4',entrance: ['general']},
  ];

  return (
    <>
        <Banner />
        <div id="events-horizontal-container">
          {eventsContentTest.map((content, index) => {
            return (
              <CardHorizontal key={`event_id_${index}`} content={content} />
            );
          })}
      </div>
    </>
  );
}
