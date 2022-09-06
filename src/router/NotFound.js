import React from "react";
import Content from "../components/Content/Content";
import error from "../assets/error.svg"

function NotFound() {
  const styles = {
    div: {
      position: "relative",
      "text-align": "center",
      position: "absolute",
      left: "50%",
      top: "40%",
      transform: "translate(-50%, -50%)",
    },
    img: {
      width: "350px",
      height: "350px",
    },
    text : {
      "margin-top": "50px",
      color : "#696969"
    }
  };

  return (
    <Content>
      <div className="notFound" style={styles.div}>
        <img alt="Not Found" src={error} style={styles.img} />
        <h1 style={styles.text}>Can not find that page: "{window.location.pathname}"</h1>
      </div>
    </Content>
  );
}
export default NotFound;
