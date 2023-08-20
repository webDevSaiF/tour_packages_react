import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";
function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  const handleRemoveTours = (id) => {
    const filteredTours = tours.filter((tour) => tour.id !== id);
    setTours(filteredTours);
  };
  const fetchTour = async () => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json(response);
      setTours(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTour();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No Tours Left</h2>
          <button className="btn" onClick={fetchTour}>
            refresh
          </button>
        </div>
      </main>
    );
  }
  return (
    <main>
      <Tours handleRemoveTours={handleRemoveTours} tours={tours} />
    </main>
  );
}

export default App;
