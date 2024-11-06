import Link from "next/link";
import "../app/styles/components/cardHorizontal.css";

const CardHorizontal = ({ content }) => {
  return (
    <Link href={`/events/${content.id}`}>
      <article className="cardHorizontal">
        {/* IMAGE | REQUIRED */}
        <div className="img" style={{ backgroundImage: `url(${content.imagePath})` }}></div>

        <div className="content">
          {/* DATE | REQUIRED*/}
          <h4>{content.date}</h4>

          <div className="name">
            {/* TITLE | REQUIRED*/}
            <h3>{content.title}</h3>

            {/* DESCRIPTION | OPTIONAL */}
            {content.description && content.description !== '' && (<p>{content.description}</p>)}
          </div>

          <ul>
            {/* HOST | OPTIONAL */}
            {content.host && content.host !== '' && (
              <li>
                <label>Host/Facilitator:</label><br />
                <p>{content.host}</p>
              </li>
            )}

            {/* CATEGORIES | OPTIONAL */}
            <li className="categories">
              {content.categories.map((category, index) => {
                return <span key={`category_id_${content.id}_${index}`} style={{ color: category.color }}>{category.name}</span>
              })}
            </li>
          </ul>

          <div className="location">
            {/* LOCATION | REQUIRED */}
            <label>{content.location}</label>

            {/* ENTRANCE | REQUIRED */}
            {content.entrance.map((entrance, index) => {
              return <span key={`entrance_id_${content.id}_${index}`}>{entrance}</span>
            })}
          </div>

        </div>
      </article>
    </Link>
  );
};

export default CardHorizontal;