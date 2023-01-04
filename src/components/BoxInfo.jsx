import "../styles/boxInfo.css";

const BoxInfo = ({ Name, Result }) => {
    return (
        <div>
            <div className="info">
                <div className="info-box">
                    <div className="box-name">
                        <h3>{Name}</h3>
                    </div>
                    <div className="box-result">
                        <p>{Result}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BoxInfo;