import "../app/styles/components/commentItem.css";

const CommentItem = ({ comment, id }) => {
  return (
    <div className={`comment`} id={id}>
      <div className="photo" style={{ backgroundImage: `url(${comment.photoPath})` }}>
      </div>
      <div className="text">
        <label>{comment.name}</label>
        <span>{comment.position}</span>
        <p>&quot;{comment.comment}&quot;</p>
      </div>
    </div>

  );
};

export default CommentItem;