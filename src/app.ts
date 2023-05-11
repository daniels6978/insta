// import axios from "../node_modules/axios/index.js";

const like_btn: HTMLCollection = document.getElementsByClassName("like-btn");
const comments_btn: HTMLButtonElement = document.querySelector(".comments-btn");
const share_btn: HTMLButtonElement = document.querySelector(".share-btn");
const save_post_btn: HTMLCollection =
  document.getElementsByClassName("save-post-btn");

const post_temp: any = document.querySelector(".post_temp");
const loading_temp: any = document.querySelector(".loading_temp");
const main_content: HTMLElement = document.querySelector(".main-content");

let offset: number = 500;

const API_LINK: string = "https://dog.ceo/api/breeds/image/random";

console.log(like_btn);
const setActiveLike = (e) => {
  e.target.classList.toggle("active-like-btn");
  e.target.classList.toggle("fas");
  console.log(e.target);
};

const setSavePostActive = (e) => {
  e.target.classList.toggle("fas");
  console.log(e.target);
};

const addNewPost = async () => {
  fetch(API_LINK)
    .then((res) => res.json())
    .then((data) => {
      const loading_element: HTMLElement = loading_temp.content.cloneNode(true);
      const lds_dual_ring: any =
        loading_element.querySelector(".lds_dual_ring");
      main_content.append(loading_element);
      setTimeout(() => {
        lds_dual_ring.remove();
        const newPost: HTMLElement = post_temp.content.cloneNode(true);
        const img_element: HTMLImageElement = newPost.querySelector(".photo");
        main_content.append(newPost);
        img_element.setAttribute("src", data.message);
      }, 2000);
    })
    .catch((err) => console.log(err));
};

const handleScroll = () => {
  if (main_content.scrollTop > offset) {
    addNewPost();
    offset += 700;
    console.log(offset);
    return 0;
  }
};

main_content.addEventListener("click", () => {
  Array.from(like_btn).forEach((like) => {
    like.addEventListener("click", setActiveLike);
  });
});
main_content.addEventListener("click", () => {
  Array.from(save_post_btn).forEach((save_post) => {
    save_post.addEventListener("click", setSavePostActive);
  });
});
// save_post_btn.addEventListener("click", setSavePostActive);
share_btn.addEventListener("click", addNewPost);

main_content.addEventListener("scroll", handleScroll);
