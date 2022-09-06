import React from "react";
import Content from "../components/Content/Content";

function NotFound() {
  const styles = {
    div: {
      position: "relative",
      top: "50%",
      transform: "translate(0, -50%)",
    },
    img: {
      url: "../assets/error.svg"
    }
  };
  return (
    <Content>
      <img alt="" style={styles.img}/>
      <div className="notFound" style={styles.div}>
        <img src="../ass" alt="" />
        <h1>Can not find that page: "{window.location.pathname}"</h1>
      </div>
    </Content>
  );
}
export default NotFound;
