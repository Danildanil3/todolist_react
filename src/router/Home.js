import React from "react";
import Content from "../components/Content/Content";
import welcome from "../assets/welcome.png";

function Home() {
  const styles = {
    div: {
      position: "relative",
      textAlign: "center",
      position: "absolute",
      left: "50%",
      top: "40%",
      transform: "translate(-50%, -50%)",
    },
    img: {
      width: "400px",
      height: "400px",
    },
  };

  return (
    <Content text="ref">
      <div style={styles.div}>
        <img alt="Home page" src={welcome} style={styles.img} />
      </div>
    </Content>
  );
}
export default Home;
