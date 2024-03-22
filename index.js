let posts = [];
const TITLE_VALIDATION_LIMIT = 20;

const postTitleInputNode = document.querySelector(".js-movies-input");
const newPostBtnNode = document.querySelector(".js-movies-btn");
const postLabelNode = document.querySelector(".movies__item-checkbox");
const postSpanNode = document.querySelector(".js-movies__item-title");
const closePostBtnNode = document.querySelector(".js-movies-close-btn");
const moviesListNode = document.querySelector(".movies__list");

newPostBtnNode.onclick = function () {
  moviesListNode.innerHTML = ` 
  <ul class="movies__list">
  <li class='movies__item'>
  <label class="js-movies-checkox movies__item-lable">
  <input type="checkbox" class="movies__item-checkbox" id="movies__item-checkbox" name="movie"
  value="yes" />
  <span class='movies__item-title'>${postTitleInputNode.value}</span>
  </label>
  <button class="js-movies-close-btn movies__close-btn"></button>
  </li>
  </ul>`;
};
console.log(postTitleInputNode.value);
newPostBtnNode.addEventListener("click", function () {
  validation();
  const titleLen = postTitleInputNode.value;

  if (titleLen === "") {
    return;
  }
  const postFromUser = getPostFromUser();
  addPost(postFromUser);
  renderPosts();
});

postTitleInputNode.addEventListener("input", validation);

function validation() {
  const titleLen = postTitleInputNode.value.length;

  if (titleLen === "") {
    validationMessage.innerText = `Длинна текста не должна превышать ${TITLE_VALIDATION_LIMIT} символов`;
    validationMessage.classList.remove("validationMessage_hidden");
    return;
  }
  validationMessage.classList.add("validationMessage_hidden");
}
function getPostFromUser() {
  const title = postTitleInputNode.value;

  return {
    text: title,
  };
}
// function renderPosts() {
//   let postsHTML = "";
//   posts.forEach((post) => {
//     postsHTML += `
//         <ul class='movies__list'>
//         <li class='movies__item'>
//         <label class="js-movies-checkox movies__item-lable">
//                         <input type="checkbox" class="movies__item-checkbox" id="movies__item-checkbox" name="movie"
//                             value="yes" />
//         <span class='movies__item-title'>${post.title}</span>
//         </label>
//         <button class="js-movies-close-btn movies__close-btn"></button>
//         </li>
//         </ul>`;
//   });

//   postsNode.innerHTML = postsHTML;
// }
