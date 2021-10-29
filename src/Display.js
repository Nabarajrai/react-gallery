import React, { useState } from "react";

const Display = ({ data, handle }) => {
  const [displyPhotos, setDisplyPhotos] = useState(3);
  const [expanded, setExpanded] = useState(false);
  const showMore = (data) => {
    setExpanded(!expanded);
    displyPhotos === 3 ? setDisplyPhotos(data.length) : setDisplyPhotos(3);
  };
  return (
    <div>
      {data.slice(0, displyPhotos).map((item, index) => (
        <img
          key={item.id}
          src={item.image}
          alt={item.title}
          style={{ maxHeight: "80vh", maxWidth: "50vw" }}
          onClick={() => {
            handle(true, index);
          }}
        />
      ))}
      {data.length === 3 ? (
        ""
      ) : (
        <a style={{ display: "block" }} onClick={() => showMore(data)}>
          {expanded ? (
            <span>Show Less &rarr;</span>
          ) : (
            <span>Show More &rarr;</span>
          )}
        </a>
      )}
    </div>
  );
};

export default Display;
