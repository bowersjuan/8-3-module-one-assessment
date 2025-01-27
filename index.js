/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleMovies` variable below to gain access to an array of movies.

  Keep in mind that your functions must still have and use a parameter for accepting all movies.
*/
const exampleMovies = require("./movies");
// Do not change the line above.

/**
 * getAllMovieTitles()
 * -----------------------------
 * Returns all of titles from an array of movies. If the inputted `movies` array is empty, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string[]} An array of strings, which are movie titles.
 *
 * EXAMPLE:
 *  getAllMovieTitles(movies);
 *  //> [
      "Toy Story 4",
      "Inside Out",
      "Coco",
      "Incredibles 2",
      "Moana",
      "How to Train Your Dragon",
      "Paddington",
      "The Lion King",
      "Fantasia",
      "James and the Giant Peach",
    ];
 */
function getAllMovieTitles(movies) {
  let movieTitles = [];

  if (!movies.length) {
    return movieTitles;
  } // Validator for empty movies array

  for (let movie of movies) {
    movieTitles.push(movie.title);
  } // Pushes movie titles into movieTitles array

  return movieTitles;
}

/**
 * getHighestMetascore()
 * -----------------------------
 * Returns the highest `metascore` among all movies. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The highest `metascore` of all movies.
 *
 * EXAMPLE:
 *  getHighestMetascore(movies);
 *  //> 96
 */
function getHighestMetascore(movies) {
  let highestMetascore = 0;

  if (!movies.length) {
    return highestMetascore;
  } // Validator for empty movies array

  highestMetascore = parseInt(movies[0].ratings[2].value);
  for (let i = 1; i < movies.length; ++i) {
    if (highestMetascore < parseInt(movies[i].ratings[2].value)) {
      highestMetascore = parseInt(movies[i].ratings[2].value);
    }
  }
  // Loops through each movie of movies array and converts the value for the Metascore to a number that can be compared with the other ratings
  // Saves the highest encountered rating as highestMetascore and then returns that value when the loop is complete

  return highestMetascore;
}

/**
 * getAverageIMDBRating()
 * -----------------------------
 * Averages all of the IMDB ratings from all movies and returns it, as a number. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The average IMDB rating across all movies.
 *
 * EXAMPLE:
 *  getAverageIMDBRating(movies);
 *  //> 7.76
 */
function getAverageIMDBRating(movies) {
  let avgIMDBRating = 0;
  if (!movies.length) {
    return avgIMDBRating;
  } // Validator for empty movies array

  function getAverageOfNumsInArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; ++i) {
      sum += array[i];
    }
    let avg = sum / array.length;
    console.log(sum);
    console.log(array.length);
    console.log(avg);
    return avg;
  } // Helper function used to calculate averages

  let arrayOfIMDBRatings = [];
  for (let movie of movies) {
    arrayOfIMDBRatings.push(parseFloat(movie.ratings[0].value));
  }
  console.log(arrayOfIMDBRatings);
  console.log(getAverageOfNumsInArray(arrayOfIMDBRatings));

  avgIMDBRating = getAverageOfNumsInArray(arrayOfIMDBRatings);

  return avgIMDBRating;
}

/**
 * countByRating()
 * -----------------------------
 * Returns an object where the keys are movie ratings and the values are the number of movies in the array with that rating. If the inputted `movies` array is empty, return `{}`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {Object} An object where keys are movie ratings (e.g. "PG") and the values are how many movies in the array have that rating (e.g. 7).
 *
 * EXAMPLE:
 *  countByRating(movies);
 *  //> { G: 3, PG: 7 }
 */
function countByRating(movies) {
  let ratingsFrequency = {};

  if (!movies.length) {
    return ratingsFrequency;
  } // Validator for empty movies array

  for (let movie of movies) {
    ratingsFrequency[movie.rated] = 0;
  } // Creates the output object with all possible ratings as keys before taking into account each frequency

  for (let movie of movies) {
    for (rating in ratingsFrequency) {
      if (movie.rated === rating) {
        ratingsFrequency[rating] += 1;
      }
    }
  } // Loops through movies array and compares the frequency of each possible rating, if it exists then it adds one to respective ratingsFrequency key for each time it is encounters in the movies array

  return ratingsFrequency;
}
/**
 * findById()
 * -----------------------------
 * Returns a movie object from an array of objects based on the ID. If the inputted `movies` array is empty or the ID does not match any movie, return `null`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} id - A unique `imdbID`.
 * @returns {Object|null} The movie object with the matching `imdbID`.
 *
 * EXAMPLE:
 *  findById(movies, "tt1979376");
 *  //> {
      // Toy Story 4
    };
 */
function findById(movies, id) {
  let possibleIDs = [];
  for (let movie of movies) {
    possibleIDs.push(movie.imdbID);
  } // Creates an array of possible movie id's

  if (!movies.length || !possibleIDs.includes(id)) {
    return null;
  } // Validates whether movie id exists in the original movies array and whether the movies array is empty

  for (let movie of movies) {
    if (id === movie.imdbID) {
      return movie;
    } // Searches for the movie in the movies array with a matching id and returns that movie object
  }
}

/**
 * filterByGenre()
 * -----------------------------
 * Returns all movie objects with a matching genre. Case-insensitive. If the inputted `movies` array is empty or no movies match the inputted `genre`, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} genre - The genre of a movie. (e.g. "Fantasy")
 * @returns {Object[]} An array of movies where at least one of the genres matches the `genre` inputted.
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Mystery");
 *  //> [
      {
        // Coco
      }
    ]
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Horror")
 *  //> []
 */
function filterByGenre(movies, genre) {
  let filterdMoviesByGenre = [];

  let genreIsAvailable = false;
  for (let movie of movies) {
    if (movie.genre.includes(genre)) {
      genreIsAvailable = true;
    }
  }

  if (!movies.legnth || !genreIsAvailable) {
    return filterdMoviesByGenre;
  }

  for (let movie of movies) {
    if (movie.genre.includes(genre)) {
      filterdMoviesByGenre.push(movie);
    }
  }
  return filterdMoviesByGenre;
}

/**
 * getAllMoviesReleasedAtOrBeforeYear()
 * -----------------------------
 * Returns all movie objects with a `released` year equal to or less than the given year.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {number} year - A year as a number. (e.g. 2000)
 * @returns {Object[]} An array of movies where the `released` year is equal to or less than the inputted year.
 *
 * EXAMPLE:
 *  getAllMoviesReleasedAtOrBeforeYear(movies, 2000);
 *  //> [
      {
        // The Lion King
      },
      {
        // Fantasia
      },
      {
        // James and the Giant Peach
      }
    ];
 */
function getAllMoviesReleasedAtOrBeforeYear(movies, year) {
  let moviesReleasedAtOrBeforeYear = [];

  if (!movies.length) {
    return moviesReleasedAtOrBeforeYear;
  } // Validates for empty movies array

  for (let movie of movies) {
    if (parseInt(movie.released.split(" ")[2]) <= year) {
      moviesReleasedAtOrBeforeYear.push(movie);
    }
  } // Loops through movies array and formats dates in order for them to be compared then pushes the movie objects that have been releasaed before or on the given date parameter onto the output array

  return moviesReleasedAtOrBeforeYear;
}

/**
 * getBiggestBoxOfficeMovie()
 * -----------------------------
 * Returns the name of the movie with the highest `boxOffice` amount.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string} The name of the movie that made the most money at the box office.
 *
 * EXAMPLE:
 *  getBiggestBoxOfficeMovie(movies);
 *  //> "Incredibles 2"
 */
function getBiggestBoxOfficeMovie(movies) {
  if (!movies.length) {
    return null;
  } // Validates for empty movies array

  let biggestBoxOfficeMovie = movies[0];

  for (let i = 1; i < movies.length; ++i) {
    if (
      parseInt(
        biggestBoxOfficeMovie.boxOffice
          .substring(1)
          .replace(",", "")
          .replace(",", "")
      ) <
      parseInt(
        movies[i].boxOffice.substring(1).replace(",", "").replace(",", "")
      )
    ) {
      biggestBoxOfficeMovie = movies[i];
    }
  }
  return biggestBoxOfficeMovie.title;
}

getBiggestBoxOfficeMovie(exampleMovies);
// Do not change anything below this line.
module.exports = {
  getAllMovieTitles,
  getHighestMetascore,
  getAverageIMDBRating,
  countByRating,
  findById,
  filterByGenre,
  getAllMoviesReleasedAtOrBeforeYear,
  getBiggestBoxOfficeMovie,
};
