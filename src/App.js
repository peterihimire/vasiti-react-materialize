import StoryItem from "./story-item";
import "./App.css";
import Navbar from "./components/Navbar";
// import Banner from "./components/Banner";
// import ExperienceOne from "./components/ExperienceOne";
// import StoryList from "./components/StoryList";
// import ExperienceTwo from "./components/ExperienceTwo";
// import Footer from "./components/Footer";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  console.log(StoryItem);
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        {/* <Banner />
        <ExperienceOne />
        <StoryList stories={StoryItem} />
        <ExperienceTwo />
        <StoryList stories={StoryItem} />
        <Footer /> */}
      </Switch>
    </>
  );
}

export default App;
