import Link from "next/link";
import Image from "next/image";
import "../../app/styles/components/eventInfo.css";
import { getEventById } from '../../api/events';


export default function EventInfo({ eventInformation }) {

    return (
        <section className="eventInformation">
            <div className="row-1">
                <Link href={'/events'}>
                    <Image src={'/images/icons/back-arrow.svg'} width={'15'} height={'15'} alt='' />
                </Link>
                <h1>{eventInformation.title_short}</h1>
            </div>
            <div className="row-2">
                <Image src={'/images/events/evt2.png'} width={'805'} height={'664'} alt={eventInformation.title_short} />
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.4344470780775!2d-79.39123432346902!3d43.659933651994805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34b7ccd8ba1f%3A0x7e6f7af0cc4e65f3!2sMaRS%20Discovery%20District!5e0!3m2!1sen!2sca!4v1727629651229!5m2!1sen!2sca" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="row-3">
                <h2>About Event</h2>

                <h3>Event Host/Facilitator</h3>
                <p>{eventInformation.host}</p>

                <h3>Event Description</h3>
                <p>{eventInformation.description}</p>

                <ul>
                    <li>
                        <h3>Event Type</h3>
                        <p>{eventInformation.type}</p>
                    </li>
                    <li>
                        <h3>Industry</h3>
                        <p>{eventInformation.industry}</p>
                    </li>
                </ul>

                {eventInformation.speakers.map((speaker, index) => {
                    return <label className="speaker" key={`speaker_${index}`}>{speaker}</label>
                })}
                <label className="date">{eventInformation.date}</label>
                <label className="time">{eventInformation.time}</label>
                <label className="location">{eventInformation.location}</label>

                <label className="admission"><b>Admission:</b> {(eventInformation.price !== 0) ? eventInformation.price : 'Free'}</label>

                <a className="attend" href="https://www.eventbrite.ca/d/canada--calgary/events/" target="_blank"> Attend </a>


            </div>
        </section>
    );
}

export async function getServerSideProps(context) {
    const { id } = context.params;

    const eventInformation = await getEventById(id);

    return {props: {id, eventInformation} };
}
