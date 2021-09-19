import axios from "axios";

const LandingPage = ({ currentUser }) => {
  console.log(currentUser);

  return <h1>Landing Page1</h1>;
};

LandingPage.getInitialProps = async () => {
  if (typeof window === "undefined") {
  ///Request on the server
  } else {
  //Request in the browser
  }

  const response = await axios.get("/api/users/currentuser");

  return response.data;
};

export default LandingPage;
