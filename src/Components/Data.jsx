const Data = ({Name, Info}) => {
  return (
    <div>
      <div className="data background-secundary">
        <div>
          <p className="font-size-md bold">{Name}</p>
          <p className="padding-primary">{Info}</p>
        </div>
      </div>
    </div>
  );
};

export default Data;
