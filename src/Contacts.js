import React from "react";
import "./App.css";

export default function Contacts() {
  return (
    <div className="about">
      <h1 className="about-title">Contact Us</h1>
      <div style={styles.container}>
        <div style={styles.card}>
          <p style={styles.link}>
            📍 <strong>Address:</strong>{" "}
            <a
              style={styles.link}
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              123 Spice Street, Foodie Town
            </a>
          </p>
          <p style={styles.link}>
            📞 <strong>Phone:</strong>{" "}
            <a style={styles.link} href="tel:+919876543210">
              +91 98765 43210
            </a>
          </p>
          <p style={styles.link}>
            ✉ <strong>Email:</strong>{" "}
            <a style={styles.link} href="mailto:info@spicebiryani.com">
              info@spicebiryani.com
            </a>
          </p>
          <p style={styles.link}>
            🕒 <strong>Hours:</strong> Mon–Sun: 11 AM – 11 PM
          </p>
        </div>

        <div style={styles.map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.033452676629!2d144.9537363156837!3d-37.81627917975139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ5JzAwLjYiUyAxNDTCsDU3JzEzLjUiRQ!5e0!3m2!1sen!2sin!4v1615564480951!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Restaurant Location"
          ></iframe>
          {/* <div style={styles.social}>
            <a style={styles.link} href="#">
              Facebook
            </a>
            <a style={styles.link} href="#">
              Instagram
            </a>
            <a style={styles.link} href="#">
              WhatsApp
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    color: "#333",
    display: "flex",
    flexDirection: "row",
    gap: "2rem",           // instead of 30px
    alignItems: "center",
    marginTop: "1rem",     // instead of 10px
  },
  title: {
    textAlign: "center",
    color: "rgb(183, 50, 50)",
    fontSize: "2.5vmin",   // scales with viewport height/width
  },
  card: {
    background: "white",
    padding: "1rem",
    height: "40vmin",
    borderRadius: "0.75rem", // 12px ~ 0.75rem
    boxShadow: "0 0.125rem 0.375rem rgba(0,0,0,0.1)", // 2px,6px
  },
  link: {
    color: "rgb(183, 50, 50)",
    textDecoration: "none",
    fontSize: "2vmin",
  },
  map: {
    width: "100%",
    height: "40vmin",      // roughly responsive height
    borderRadius: "0.75rem",
    overflow: "hidden",
  },
  button: {
    background: "rgb(183, 50, 50)",
    color: "white",
    padding: "0.8rem 1.5rem", // 12px 20px approx
    border: "none",
    borderRadius: "1.5rem",   // 25px
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "2vmin",
  },
  social: {
    textAlign: "center",
    marginTop: "1.5rem",
    fontSize: "2vmin",
  },
};

