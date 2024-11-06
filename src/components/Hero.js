import Link from "next/link";
import "../app/styles/components/hero.css";

const Hero = () => {
  return (
    <section className="hero">
        <div className="hero-content">
          <h1>DISCOVER & ATTEND!</h1>
          <h2><span>ALL OVER CANADA</span>, More than 23,600 <br /> participants join our registered events daily.</h2>
          <div className="call-to-action">
            <Link href={'#latestEventsSectionSpaced'}>Attend an Event</Link>
          </div>
        </div>
        {/* <div className="hero-image"></div> */}
    </section>
  );
};

export default Hero;