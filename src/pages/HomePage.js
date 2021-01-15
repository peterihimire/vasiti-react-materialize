import React from "react";
import StoryItem from "../story-item";
import Banner from "../components/Banner";
import ExperienceOne from "../components/ExperienceOne";
import StoryList from "../components/StoryList";
import ExperienceTwo from "../components/ExperienceTwo";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <Banner />
      <ExperienceOne />
      <StoryList stories={StoryItem} />
      <ExperienceTwo />
      <StoryList stories={StoryItem} />
      <Footer />
    </>
  );
};

export default HomePage;
