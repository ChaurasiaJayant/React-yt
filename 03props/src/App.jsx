import Card from "./components/card.jsx";

const App = () => {
  return (
    <div className="parent">
      <Card user="Jayant" age={22} />
      <Card user="Sarthak" age={5} />
      <Card user="Vedant" age={27} />
    </div>
  );
};

export default App;
