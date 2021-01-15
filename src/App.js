import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import ExperienceOne from "./components/ExperienceOne";
import StoryItem from "./story-item";

function App() {
  console.log(StoryItem);
  return (
    <>
      <Navbar />
      <Banner />
      <ExperienceOne />
    </>
  );
}

export default App;
