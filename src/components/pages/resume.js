import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const styles = {
  container: {
    marginTop: "2%",
    color: "white",
  },
  card: {
    marginLeft: "1%",
    marginRight: "2%",
  },
};

export default function CV() {
  return (
    <div style={styles.container}>
      <Carousel responsive={responsive}>
        <div style={styles.card}>
          <h3> React</h3>
          <hr />
          <ul style={styles.card}>
            <li>Dynamic element rendering</li>
            <li>Use state variables using the useState hook and JSX</li>
            <li>Pass data using props</li>
          </ul>
        </div>
        <div style={styles.card}>
          <h3> Front End</h3>
          <hr />
          <ul>
            <li>HTML5</li>
            <li>Handlebars.js:</li>
            <li>CSS</li>
            <li>Bootstrap</li>
            <li>Flexbox</li>
            <li>Creating Wire Frames</li>
            <li>Media Queries</li>
            <li>Responsive layouts</li>
          </ul>
        </div>
        <div style={styles.card}>
          <h3> Back End</h3>
          <hr />
          <ul>
            <li>JavaScript </li>
            <li>DOM</li>
            <li>MVC framework </li>
            <li>Local Storage </li>
            <li>jQuery </li>
            <li>Working with APIs </li>
            <li>JavaScript constructors </li>
            <li>TDD </li>
            <li>Classes </li>
            <li>Node.js </li>
            <li>Working with library packages </li>
            <li>Modularization </li>
            <li>Ability to create command line interface applications </li>
          </ul>
        </div>
        <div style={styles.card}>
          <h3> Express.js</h3>
          <hr />
          <ul>
            <li>Implemented Express.js routing </li>
            <li> Use of express servers </li>
            <li> Use of middleware in HTML applications </li>
            <li>
              Ability to implement client server requests: Post, Fetch, Put,
              Delete
            </li>
          </ul>
        </div>
      </Carousel>
    </div>
  );
}
