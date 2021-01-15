import React from "react";
import "./StoryList.css";
import Story from "../components/Story";

const StoryList = ({ stories }) => {
  console.log(stories);
  return (
    <section className="customer-stories">
      <div className="container">
        <div className="customer-grid">
          {stories.map((storie) => (
            <Story key={storie.id} story={storie} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoryList;
