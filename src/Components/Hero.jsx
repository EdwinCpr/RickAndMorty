import HeaderImg from "./Img/HeaderImg.png";
import HeaderImgTitle from "./Img/HeaderImgTitle.png";

const Hero = () => {
  return (
    <div>
      <div className="header-img">
        <img src={HeaderImg} alt="" />
      </div>
      <div className="header-title">
        <img src={HeaderImgTitle} alt="" className="img-title" />
      </div>
      <div className="header-input">
        <input
          type="text"
          name="search"
          placeholder="Search..."
          id="input-search"
        />
      </div>
    </div>
  );
};

export default Hero;

