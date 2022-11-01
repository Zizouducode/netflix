const Section = ({ data }) => {
  return (
    <div>
      {data.map((elem, index) => {
        return (
          <div key={index} className="container">
            <p className="category">
              {elem.category === "Reprendre avec"
                ? elem.category + " le profil de Tom Roberto"
                : elem.category}
            </p>
            <div className="movie-list">
              {elem.images.map((elem, index) => {
                return <img key={index} src={elem} alt="movie" />;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Section;
