import React from "react";

function HomePage() {
  return (
    <div>
      <h2
        style={{
          display: "flex",
          fontWeight: "bold",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "sans-serif",
        }}
      >
        Educating everyone, one person at a time!
      </h2>
      <div
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <img
          src="https://img.freepik.com/free-vector/e-learning-icons-flat_1284-3950.jpg?w=2000"
          style={{
            marginLeft: "15px",
            marginRight: "15px",
            width: "400px",
          }}
          alt=""
        />
        <h4
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontFamily: "sans-serif",
          }}
        >
          We offer courses in every possible field, ranging from languages
          around the world to your exam-level matematics. All our teachers are
          well-qualified and enthusiastic. Thriving to make education
          accessible, fin and interactive for everyone around the globe.
        </h4>
      </div>
      <footer
        style={{
          position: "fixed",
          color: "gray",
          marginTop: "auto",
          padding: "8px",
          display: "bottom",
          justifyContent: "center",
          alignContent: "center",
        }}
      >{`Copyright © eLearn 2022`}</footer>
    </div>
  );
}

export default HomePage;
