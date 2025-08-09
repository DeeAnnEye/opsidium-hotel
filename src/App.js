import React, { useEffect, useState } from "react";
import logo from "./chbakery.png";
import hero1 from "./hero.png";
import hero2 from "./hero2.png";
import event from "./events.png";
import "./App.css";
import MenuCarousel from "./MenuCarousel";
import About from "./About";
import Contacts from "./Contacts";
import Gallery from "./Gallery";

function App() {
  const [showCarousel, setShowCarousel] = useState(false);
  const [menu, setMenu] = useState("home");

  useEffect(() => {
    const timer = setTimeout(() => setShowCarousel(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <h1 className={`App-name ${showCarousel ? "fade-in" : ""}`}>
          CH BAKERS
        </h1> */}
      </header>
      <div className="App-body">
        {menu === "menu" && <MenuCarousel />}
        {menu === "about" && <About />}
        {menu === "home" && showCarousel && (
          <div className="hero">
            <img
              src={hero1}
              alt={"hero1"}
              className="hero-img"
              onClick={() => setMenu("menu")}
            />
            <img
              src={hero2}
              alt={"hero2"}
              className="hero-img"
              onClick={() => setMenu("menu")}
            />
          </div>
        )}
        {menu === "events" && (
          <div className="hero">
            <img src={event} alt={"event"} className="event-img" />
          </div>
        )}
        {menu === "contact" && <Contacts />}
        {menu === "gallery" && <Gallery />}
        {showCarousel && (
          <div className="carousel-container fade-in">
            <button
              className="carousel-btn left"
              onClick={() => {
                document
                  .querySelector(".carousel-items")
                  .scrollBy({ left: -150, behavior: "smooth" });
              }}
            >
              &#8249;
            </button>

            <div className="carousel-items">
              <button className="carousel-item" onClick={() => setMenu("home")}>
                Home
              </button>
              <button className="carousel-item" onClick={() => setMenu("menu")}>
                Menu
              </button>
              <button
                className="carousel-item"
                onClick={() => setMenu("about")}
              >
                About
              </button>
              <button
                className="carousel-item"
                onClick={() => setMenu("events")}
              >
                Events
              </button>
              <button
                className="carousel-item"
                onClick={() => setMenu("gallery")}
              >
                Gallery
              </button>
              <button
                className="carousel-item"
                onClick={() => setMenu("contact")}
              >
                Contact
              </button>
            </div>

            <button
              className="carousel-btn right"
              onClick={() => {
                document
                  .querySelector(".carousel-items")
                  .scrollBy({ left: 150, behavior: "smooth" });
              }}
            >
              &#8250;
            </button>
          </div>
        )}
      </div>
      {/* <button className="fab" onClick={() => alert("Open Chatbot")}>
        💬
      </button> */}
    </div>
  );
}

export default App;
