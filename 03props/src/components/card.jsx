const Card = (props) => {
  return (
    <div className="card">
      <img
        src="https://plus.unsplash.com/premium_photo-1757581531991-da0f33189b5c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <h1>
        {props.user},{props.age}
      </h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      <button>View Profile</button>
    </div>
  );
};

export default Card;
