const App = () => {
  const user = {
    username: "Jayant",
    age: 22,
    city: "GKP",
  };
  localStorage.setItem("user", JSON.stringify(user));

  const users = JSON.parse(localStorage.getItem("user"));
  console.log(users.username);

  return <div>App</div>;
};

export default App;
