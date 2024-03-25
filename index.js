let posts = [];
const MAX_TITLE_LENGTH = 20;

const postTitleInputNode = document.querySelector(".js-movies-input");
const newPostBtnNode = document.querySelector(".js-movies-btn");
const postLabelNode = document.querySelector(".movies__item-checkbox");
const postSpanNode = document.querySelector(".js-movies__item-title");
const closePostBtnNode = document.querySelector(".js-movies-close-btn");
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

const getPostFromUser = () => {
  const title = postTitleInputNode.value;
  return title;
};

function renderPosts(posts) {
  console.log(posts);
  moviesListNode.innerHTML = "";
  posts.forEach((post) => {
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

    movieInput.setAttribute("unchecked", "");
    movieInput.setAttribute("type", "checkbox");

    movieTitle.innerText = post;

    moviesListNode.appendChild(movieItem);
    movieItem.appendChild(movieLabel);
    movieLabel.appendChild(movieInput);
    movieLabel.appendChild(movieTitle);
    movieItem.appendChild(movieCloseBtn);
  });
}

const handler = (event) => {
  event.preventDefault();
  const title = getPostFromUser();
  if (!validation(title)) {
    return;
  }
  posts.push(title);
  renderPosts(posts);
};

newPostBtnNode.addEventListener("click", handler);

// const getPostFromUser = () => {
//   return postTitleInputNode.value;
// };

// const handler = (event) => {
//   event.preventDefault();
//   const title = getPostFromUser();
//   console.log(title);
// };

// newPostBtnNode.addEventListener("click", handler);
