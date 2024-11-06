import React from "react";
import CommentItem from './CommentItem'
import "../app/styles/components/comments.css";
import useMessageRotation from '../hooks/useMessageRotation';

const Comments = () => {
  
  const { currentSlotData, isHovered, setIsHovered } = useMessageRotation();

  return (
    <section className="comments">
      <h2>What People are Saying</h2>
      <div className={`comments-container comments-container-odd`}>
        <h4>Discover what our event facilitators and <br /> attendees are saying about their experience <br /> with the events we put out</h4>

        {currentSlotData.map((comment, index) => (
          <CommentItem 
            key={`comment_id_${index + 1}`} 
            comment={comment} 
            id={`commentItem${index + 1}`} 
            isHovered={isHovered} 
            onHoverChange={setIsHovered} 
          />
        ))}

      </div>
      <div className='background-bottom'></div>
    </section>
  );
};

export default Comments;