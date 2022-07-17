import "./content.css";


export default function Content({ setNewPage }) {
  return (
    <div className="content-images">
      <div class="image-content">
        <img className="content-img" src="./images/hero.png" alt="hero" />
      </div>
      <div class="image-content">
        <img className="content-img" src="./images/image1.png" alt="hero1" />
      </div>
      <div class="image-content">
        <img className="content-img" src="./images/image2.png" alt="hero2" />
      </div>
    </div>
    );
}
