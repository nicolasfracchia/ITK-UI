import Image from "next/image";
import Link from "next/link";
import "../app/styles/components/cardVertical.css";

const CardVertical = ({content}) => {
  return (
    <article className="cardVertical">
      {/* IMAGE | REQUIRED */}
      <Image src={content.imagePath} width={390} height={228} alt={content.title} />

      {/* TITLE | REQUIRED*/}
      <h3>{content.title}</h3>

      {/* DESCRIPTION | OPTIONAL */}
      {content.description && content.description !== '' && (<p>{content.description}</p>)}

      <ul>
        {/* LOCATION | REQUIRED */}
        <li className="location">{content.location}</li>
        
        {/* DATE | REQUIRED */}
        <li className="calendar">{content.date}</li>

        <li className="line-break"></li>

        {/* SPEAKER | OPTIONAL */}
        {content.speaker && content.speaker !== '' && (
          <li className="speaker">Speaker: {content.speaker}</li>
        )}

        <li className="line-break"></li>
        
        {/* ATTENDANTS | OPTIONAL */}
        {content.attendants && content.attendants !== '' && (
          <li className="attendants">Attendants: {content.attendants}</li>
        )}

        {/* PRICE | REQUIRED */}
        <li><Link href={`/events/${content.id}`}>{(content.price !== 0) ? content.price : 'Free'}</Link></li>
      </ul>
    </article>
  );
};

export default CardVertical;