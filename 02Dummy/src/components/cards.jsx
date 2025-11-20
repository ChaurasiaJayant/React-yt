import { Bookmark } from "lucide-react";

const Cards = (props) => {
  return (
    <div className="papa">
      <div className="upper">
        <div className="card">
          {/* top */}
          <div className="top">
            <p>{props.date}</p>
            <button>
              <Bookmark size={10} />
            </button>
          </div>

          {/* centre */}
          <div className="center">
            <div className="centreLeft">
              <h3>{props.company}</h3>
              <h2> {props.post} </h2>
            </div>
            <span>
              <img src={props.logo} alt="" />
            </span>
          </div>

          <div className="bottom">
            <div className="tag">
              <span> {props.tag1} </span>
              <span>{props.tag2}</span>
              <span>{props.tag3}</span>
              <span>{props.tag4}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="lower">
        <div>
          <h4>{props.pay}</h4>
          <p>{props.location}</p>
        </div>
        <button>Details</button>
      </div>
    </div>
  );
};

export default Cards;
