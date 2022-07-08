const Location = ({Name, Info}) => {
  return (
    <div>
      <div className="location background-secundary">
        <div>
          <p className="font-size-md bold">{Name}</p>
          <p className="padding-primary font-size-small">{Info}</p>
        </div>
      </div>
    </div>
  );
};

export default Location;
