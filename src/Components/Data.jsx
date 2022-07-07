const Data = ({Name, Info}) => {
  return (
    <div>
      <div className="data">
        <div>
          <p className="font-size-md bold">{Name}</p>
          <p className="padding-one">{Info}</p>
        </div>
      </div>
    </div>
  );
};

export default Data;
