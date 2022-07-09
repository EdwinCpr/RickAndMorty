const Status = ({character}) => {
    if (character.status == "Dead") {
      return <div className="brown" />;
    } else if (character.status == "Alive") {
      return <div className="green" />;
    } else {
      return <div className="gray" />;
    }
};

export default Status;
