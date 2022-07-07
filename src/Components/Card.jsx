import React from "react";

const Card = ({ Status, Name, Type, Info, Episodes }) => {
  return (
    <div className="card background-secundary">
      <div className="card-img">
        <img
          src="https://rickandmortyapi.com/api/character/avatar/14.jpeg"
          alt=""
        />
        <div className="card-status">
          <div className="card-status-flex background-secundary">
          <div></div>
            <p className="">
              {Status}
            </p>
          </div>
        </div>
      </div>
      <div className="card-info">
        <h2 className="name font-weight-none">
          {Name}
        </h2>
        <div className="card-race margin-top-primary">
          <p className="bold font-size-small color-gray">RAZA</p>
          <p className="bold">
            {Type}
          </p>
        </div>
        <div className="card-origin margin-top-primary">
          <p className="bold font-size-small color-gray">ORIGEN</p>
          <p className="bold">
            {Info}
          </p>
        </div>
        <div className="card-episode margin-top-primary">
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

export default Card;
