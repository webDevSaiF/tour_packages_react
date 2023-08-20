import React, { useState } from "react";

const Tour = ({ id, name, info, image, price, handleRemoveTours }) => {
  const [readMore, setReadMore] = useState(true);
  const handleReadMore = () => setReadMore(!readMore);

  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {readMore ? `${info.substring(0, 200)}...` : info}
          <button onClick={handleReadMore}>
            {readMore ? "Read more" : "Show less"}
          </button>
        </p>
        <button onClick={() => handleRemoveTours(id)} className="delete-btn">
          not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
