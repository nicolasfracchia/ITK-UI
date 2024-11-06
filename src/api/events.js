/*
import axios from 'axios';

export default async function fetchEvents() {
  try {
    const response = await axios.get(`${process.env.API_ENDPOINT}events/id`);
    return response.data;
  } catch (error) {
    console.error('Error fetching events:', error);
    return null;
  }
}
*/



export async function getEventById(id) {
  try {
    const response = {
      id: id,
      imagePath: '/images/events/evt2.png',
      title_short: 'Tech Innovators Meetup',
      host: 'Edmonton Unlimited',
      title_long: 'Tech Innovators Meetup: Unlocking Success in the Digital World',
      description: "Join us for an exciting evening of learning, networking, and inspiration at the Tech Innovators Meetup in Toronto. Whether you're a tech enthusiast, budding entrepreneur, or seasoned professional, this event is perfect for anyone eager to expand their knowledge and skills in the tech industry. Our panel of leading tech entrepreneurs, developers, and innovators will share their expertise on topics such as emerging technologies, product development, and growth strategies.",
      type: 'general',
      industry: 'Tech',
      speakers: ['Alex Mitchell, Founder & CEO at TechWave'],
      date: 'September 12, 2024',
      time: '9:00am MDT',
      location: 'MaRS Discovery District, Toronto',
      price: 0
    }
    return response;
  } catch (error) {
    console.error('Error fetching event:', error);
    return null;
  }
}