// create your App component here
import React, { useState, useEffect } from "react";

function App() {
  const [dogImageUrl, setDogImageUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch a random dog image from the API
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        setDogImageUrl(data.message);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching the dog image:", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        dogImageUrl && <img src={dogImageUrl} alt="A Random Dog" />
      )}
    </div>
  );
}

export default App;