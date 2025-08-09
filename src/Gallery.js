import "./Gallery.css";
import "./App.css";
import gallery1 from "./gallery1.jpeg";
import gallery2 from "./gallery2.jpeg";
import gallery3 from "./gallery3.jpeg";
import gallery4 from "./gallery4.jpeg";
import gallery5 from "./gallery5.jpeg";

export default function Gallery() {
  const items = [
    { img: gallery1, name: "gallery1" },
    { img: gallery2, name: "gallery2" },
    { img: gallery3, name: "gallery3" },
    { img: gallery4, name: "gallery4" },
    { img: gallery5, name: "gallery5" },
  ];

  return (
    <div className="about">
      <h1 className="menu-title">Gallery</h1>
      <div className={`gallery-carousel fade-in`}>
        <div className="gallery">
          {items.map((item, i) => (
            <div key={i} className="gallery-card">
              <img src={item.img} alt={item.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
