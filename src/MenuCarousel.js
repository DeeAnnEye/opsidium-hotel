import cb from "./cb.jpg";
import mb from "./mb.jpg";
import bb from "./bb.jpg";
import ch from "./ch.jpg";
import bh from "./bh.jpg";
import cocoh from "./cocoh.jpg";
import "./MenuCarousel.css";
import "./App.css";

export default function MenuCarousel() {
  const items = [
    { name: "Chicken Biryani", img: cb, desc: "Tender & spicy" },
    { name: "Mutton Biryani", img: mb, desc: "Rich & aromatic" },
    { name: "Beef Biryani", img: bb, desc: "Bold & flavorful" },
    { name: "Carrot Halwa", img: ch, desc: "Sweet & nutty" },
    { name: "Rice Halwa", img: bh, desc: "Creamy & fragrant" },
    { name: "Coconut Halwa", img: cocoh, desc: "Coconut delight" },
    { name: "Chicken Biryani", img: cb, desc: "Tender & spicy" },
    { name: "Mutton Biryani", img: mb, desc: "Rich & aromatic" },
    { name: "Beef Biryani", img: bb, desc: "Bold & flavorful" },
    { name: "Carrot Halwa", img: ch, desc: "Sweet & nutty" },
    { name: "Rice Halwa", img: bh, desc: "Creamy & fragrant" },
    { name: "Coconut Halwa", img: cocoh, desc: "Coconut delight" },
  ];

  return (
    <div className="about">
      <h1 className="menu-title">MENU</h1>
      <div className={`menu-carousel fade-in`}>
        <div className="carousel">
          {items.map((item, i) => (
            <div key={i} className="carousel-card">
              <img src={item.img} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
