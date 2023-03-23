import React from "react";
import myImage from "../../assets/myface.png";
import Footer from "../Footer";

const styles = {
  img: {
    width: "200px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  container: {
    margin: "auto",
    width: "100%",
  },
  center: {
    marginLeft: "auto",
    marginRight: "auto",
    paddingTop: "5%",
  },
  heading: {
    textAlign: "center",
  },
  p: {
    textAlign: "center",
    paddingTop: "3%",
  },
};

export default function Main() {
  return (
    <div className="auto">
      <div className="flex-container">
        <div style={styles.center}>
          <h1 style={styles.heading}>Hello, I'm Adam</h1>
          <div style={styles.center} className="flex-container">
            <img style={styles.img} src={myImage} alt="Smiling man" />
          </div>
          <p style={styles.p}>
            {" "}
            I am a full stack web developer based out of Austin, Texas.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
