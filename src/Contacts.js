import React from "react";
import "./App.css";

export default function Contacts() {
  return (
    <div className="about">
      <h1 className="about-title">Contact Us</h1>
      <div style={styles.container}>
        <div style={styles.card}>
          <p>
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
          <p>
            📞 <strong>Phone:</strong>{" "}
            <a style={styles.link} href="tel:+919876543210">
              +91 98765 43210
            </a>
          </p>
          <p>
            ✉ <strong>Email:</strong>{" "}
            <a style={styles.link} href="mailto:info@spicebiryani.com">
              info@spicebiryani.com
            </a>
          </p>
          <p>
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
    gap: "30px",
    alignItems:"center",
    marginTop: "10px"
  },
  title: {
    textAlign: "center",
    color: "rgb(183, 50, 50)",
  },
  card: {
    background: "white",
    padding: "10px",
    borderRadius: "12px",
    // marginBottom: "20px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  },
  link: {
    color: "rgb(183, 50, 50)",
    textDecoration: "none",
  },
  map: {
    width: "100%",
    height: "370px",
    borderRadius: "12px",
    overflow: "hidden",
    // marginBottom: "20px",
  },
  button: {
    background: "rgb(183, 50, 50)",
    color: "white",
    padding: "12px 20px",
    border: "none",
    borderRadius: "25px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  social: {
    textAlign: "center",
    marginTop: "20px",
  },
};
