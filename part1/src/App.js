import "./App.css";
import Mensaje from "./Mensaje";

const Description = () => {
  return <p>Esta es la App del curso Fullstack bootcamp </p>;
};

function App() {
  return (
    <div className="App">
      <Mensaje color="red" message="Estamos trabajando" />
      <Mensaje color="green" message="en un curso" />
      <Mensaje color="yellow" message="de React" />
      <Mensaje color="blue" message="Bienvenido Daxson y Papa" />
      <Description />
    </div>
  );
}

export default App;
