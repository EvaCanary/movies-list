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
    checked: false,
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
    movieInput.className = "movies__item-checkbox movies__checkbox";
    movieTitle.className = "movies__item-title";
    movieCloseBtn.className = "js-movies-close-btn movies__close-btn";

    movieInput.setAttribute("type", "checkbox");
    movieInput.checked = movie.checked;
    movieTitle.innerText = movie.name;
    movieItem.dataset.id = movie.id;
    movieCloseBtn.dataset.id = movie.id;

    moviesListNode.appendChild(movieItem);
    movieItem.appendChild(movieLabel);
    movieLabel.appendChild(movieInput);
    movieLabel.appendChild(movieTitle);
    movieItem.appendChild(movieCloseBtn);

    if (movie.checked) {
      movieItem.classList.add("movies__item_active");
    }

    movieInput.addEventListener("click", () => {
      movieItem.classList.toggle("movies__item_active");
      movie.checked = movieInput.checked;
    });
    console.log(movieItem);
    movieCloseBtn.addEventListener("click", () => {
      const id = movieItem.dataset.id;
      removeButton(movies, id);
    });
  });
};

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
