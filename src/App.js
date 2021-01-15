import StoryItem from "./story-item";
import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import ExperienceOne from "./components/ExperienceOne";
import StoryList from "./components/StoryList";
import ExperienceTwo from "./components/ExperienceTwo";

function App() {
  console.log(StoryItem);
  return (
    <>
      <Navbar />
      <Banner />
      <ExperienceOne />
      <StoryList stories={StoryItem} />
      <ExperienceTwo />
    </>
  );
}

export default App;
