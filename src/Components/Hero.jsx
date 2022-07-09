import HeaderImgTwo from "./Img/HeaderImgTwo.jpg";
import HeaderImgTitle from "./Img/HeaderImgTitle.png";

const Hero = ({searchLocation, value, setValue}) => {
  return (
    <div>
      <div className="header-img">
        <img src={HeaderImgTwo} alt="" />
      </div>
      <div className="header-title">
        <img src={HeaderImgTitle} alt="" className="img-title" />
      </div>
      <div className="header-input">
        <input
          type="text"
          name="search"
          placeholder="Search for id..."
          id="input-search"
          value={value}
          onChange={((e) => setValue(e.target.value))}
        />
        {value >= 1 && searchLocation()}
      </div>
      
    </div>
  );
};

export default Hero;

