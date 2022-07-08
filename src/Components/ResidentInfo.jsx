const ResidentInfo = ({ Status, Name, Type, Info, Episodes }) => {
  return (
    <div className="ResidentInfo background-secundary">
      <div className="ResidentInfo-img">
        <img
          src="https://rickandmortyapi.com/api/character/avatar/14.jpeg"
          alt=""
        />
        <div className="ResidentInfo-status">
          <div className="ResidentInfo-status-flex background-secundary">
          <div></div>
            <p className="">
              {Status}
            </p>
          </div>
        </div>
      </div>
      <div className="ResidentInfo-info">
        <h2 className="name font-weight-none">
          {Name}
        </h2>
        <div className="ResidentInfo-race margin-top-primary">
          <p className="bold font-size-small color-gray">RAZA</p>
          <p className="bold">
            {Type}
          </p>
        </div>
        <div className="ResidentInfo-origin margin-top-primary">
          <p className="bold font-size-small color-gray">ORIGEN</p>
          <p className="bold">
            {Info}
          </p>
        </div>
        <div className="ResidentInfo-episode margin-top-primary">
          <p className="bold font-size-small color-gray">
            APARICION EN EPISODIOS
          </p>
          <p className="bold">
            {Episodes}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResidentInfo;
