import Hero from '../components/Hero';
import LatestEvents from '../components/LatestEvents';
import Comments from '../components/Comments';
import Community from '../components/Community';
import Sponsors from '../components/Sponsors';


export default function Home() {
  return (
    <>
        <Hero />
        <LatestEvents />
        <Comments />
        <Community />
        <Sponsors />
    </>
  );
}
