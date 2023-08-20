import Tour from "./Tour";

const Tours = ({ tours, handleRemoveTours }) => {
  console.log(tours);
  return (
    <section>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => {
          return (
            <Tour
              handleRemoveTours={handleRemoveTours}
              key={tour.id}
              {...tour}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Tours;
