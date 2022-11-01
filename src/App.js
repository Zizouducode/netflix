import "./App.css";
import logo from "./images/logo.webp";
import data from "./data.json";

const App = () => {
  return (
    <div className="App">
      <img className="logo" src={logo} alt="Logo Netflix" />
      {data.map((elem, index) => {
        return (
          <div className="container">
            key={index}
            <p className="category">{elem.category}</p>
            <div className="movie-list">
              {elem.images.map((elem) => {
                return <img src={elem} alt="movie" />;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default App;
