import React from "react";
import "./Story.css";
import Zoom from "react-reveal/Zoom";

const Story = ({ story }) => {
  console.log(story);
  return (
    <Zoom>
      <div className=" customer-item">
        <div className="c-v-img-container">
          <img src={story.image} alt="customer" />
        </div>
        <div className="c-v-name">
          <h6>{story.name}</h6>
          <p>
            {story.location}{" "}
            <span className={story.color}>{story.interact}</span>
          </p>
        </div>
        <div className="c-v-comment">
          <p>{story.comment}</p>
        </div>
      </div>
    </Zoom>
  );
};

export default Story;
