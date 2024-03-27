import { useEffect, useState } from "react";
import axios from "axios";
import TutorialList from "../components/TutorialList";
import AddTutorial from "../components/AddTutorial";

const Home = () => {
  const [tutorial, setTutorial] = useState([]);
  const url =
    "https://65f48298f54db27bc021de76.mockapi.io/tutorial-app-starter";

  const getTutorial = async () => {
    const { data } = await axios(url);
    setTutorial(data);
    console.log(data);
  };
  useEffect(() => {
    getTutorial();
  }, []);

  return (
    <>
      <AddTutorial getTutorial={getTutorial} />
      <TutorialList tutorial={tutorial} getTutorial={getTutorial} />
    </>
  );
};
export default Home;
