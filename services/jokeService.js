const fetchRandomJoke = () => {
  // fetch a random joke from the chucknorris.io API
  return fetch('https://api.chucknorris.io/jokes/random?category=dev')
    .then(response => response.json())
    .then(data => data.value)
    .catch(error => {
      console.error('Error fetching joke:', error);
      throw error;
    });
};

export default fetchRandomJoke;