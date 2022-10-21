import React from "react";
import Card from "../components/Card.jsx";

export default function Course() {
  return (
    <div className="wrapper">
      <p
        style={{
          fontFamily: "sans-serif",
          fontWeight: "bold",
          display: "flex",
          justifyContent: "center"
        }}
      >
        We offer a wide variety of courses. Here is a sneak peek into them!
      </p>
      <Card
        title="Content Writing and Publishing"
        description="A safe place for new budding writers to grow and hone their skills and creativity. Includes certification."
        img="https://www.digitalvidya.com/wp-content/uploads/2018/11/HOW-TO-START-CONTENT-WRITING-1.png"
        price="Rs. 500"
      />
      <Card
        title="Java- basics to advance"
        description="Learn Java from the beginning stage and solve questions in Java. Build a new Java project and win goodies if you're one of the top 3 students. Includes certification."
        img="https://cdn.mindmajix.com/blog/images/java-tutorial-030320.png"
        price="Rs. 700"
      />
      <Card
        title="Freelaning 101"
        description="Learn how to pitch to high paying clients andmdeliver high-quality content everytime."
        img="https://i.ytimg.com/vi/5v_7Sy7OILU/maxresdefault.jpg"
        price="Rs. 500"
      />
    </div>
  );
}
