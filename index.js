let movies = [];
const MAX_TITLE_LENGTH = 20;

const movieTitleInputNode = document.querySelector(".js-movies-input");
const newMovieBtnNode = document.querySelector(".js-movies-btn");
const movieLabelNode = document.querySelector(".movies__item-checkbox");
const movieSpanNode = document.querySelector(".js-movies__item-title");
const closeMovieBtnNode = document.querySelector(".js-movies-close-btn");
const moviesListNode = document.querySelector(".movies__list");

const validation = (title) => {
  let result = true;

  if (title === "") {
    result = false;
    return result;
  }
  if (title.length > MAX_TITLE_LENGTH) {
    result = false;
    return result;
  }
  return result;
};

const getMovieFromUser = () => {
  const title = movieTitleInputNode.value;
  return title;
};

const createMovie = (title) => {
  const movie = {
    name: title,
    id: `${Math.random()}`,
  };
  movies.push(movie);
};

const renderMovies = (movies) => {
  console.log(movies);
  moviesListNode.innerHTML = "";
  movies.forEach((movie) => {
    const movieItem = document.createElement("li");
    const movieLabel = document.createElement("label");
    const movieInput = document.createElement("input");
    const movieTitle = document.createElement("span");
    const movieCloseBtn = document.createElement("button");

    movieItem.className = "movies__item";
    movieLabel.className = "js-movies-checkbox movies__item-label";
    movieInput.className = "movies__item-checkbox";
    movieTitle.className = "movies__item-title";
    movieCloseBtn.className = "js-movies-close-btn movies__close-btn";

    // movieInput.setAttribute("unchecked", "");
    movieInput.setAttribute("type", "checkbox");

    movieTitle.innerText = movie.name;
    movieItem.dataset.id = movie.id;
    movieCloseBtn.dataset.id = movie.id;

    moviesListNode.appendChild(movieItem);
    movieItem.appendChild(movieLabel);
    movieLabel.appendChild(movieInput);
    movieLabel.appendChild(movieTitle);
    movieItem.appendChild(movieCloseBtn);

    movieCloseBtn.addEventListener("click", () => {
      const id = movieItem.dataset.id;
      removeButton(movies, id);
    });
  });
};

// const closeBtn = (movies, id) => {
//   let newMoviesArr = movies.filter((movie) => {
//     return id !== movie.id;
//   });
//   renderMovies(newMoviesArr);
// };

const removeButton = (movies, id) => {
  movies.forEach((movie, index) => {
    if (movie.id === id) {
      movies.splice(index, 1);
    }
  });
  renderMovies(movies);
};

const clearInput = () => {
  movieTitleInputNode.value = "";
};

const handler = (event) => {
  event.preventDefault();
  const title = getMovieFromUser();
  clearInput();
  if (!validation(title)) {
    return;
  }
  createMovie(title);
  renderMovies(movies);
};

newMovieBtnNode.addEventListener("click", handler);
// const getPostFromUser = () => {
//   return postTitleInputNode.value;
// };

// const handler = (event) => {
//   event.preventDefault();
//   const title = getPostFromUser();
//   console.log(title);
// };

// newPostBtnNode.addEventListener("click", handler);
