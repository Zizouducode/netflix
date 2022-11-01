import "./App.css";
import logo from "./images/logo.webp";
import data from "./data.json";
import Section from "./components/Section";

const App = () => {
  return (
    <div className="App">
      <img className="logo" src={logo} alt="Logo Netflix" />
      {/* {data.map((elem, index) => {
        return (
          <div key={index} className="container">
            <p className="category">{elem.category}</p>
            <div className="movie-list">
              {elem.images.map((elem, index) => {
                return <img key={index} src={elem} alt="movie" />;
              })}
            </div>
          </div>
        );
      })} */}
      <Section data={data} />
    </div>
  );
};

export default App;
