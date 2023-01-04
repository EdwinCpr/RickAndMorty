const StatusColor = ({ Status }) => {
    if (Status === "Dead") {
        return <div className="status-dead"></div>
    } else if (Status === "Alive") {
        return <div className="status-alive"></div>
    } else {
        return <div className="status-unknown"></div>
    }
};

export default StatusColor;