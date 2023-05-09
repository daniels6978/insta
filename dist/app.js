// import axios from "../node_modules/axios/index.js";
const like_btn = document.getElementsByClassName("like-btn");
const comments_btn = document.querySelector(".comments-btn");
const share_btn = document.querySelector(".share-btn");
const save_post_btn = document.querySelector(".save-post-btn");
const post_temp = document.querySelector(".post_temp");
const main_content = document.querySelector(".main-content");
let offset = 500;
const API_LINK = "https://dog.ceo/api/breeds/image/random";
console.log(like_btn);
const setActiveLike = (e) => {
    e.target.classList.toggle("active-like-btn");
    e.target.classList.toggle("fas");
    console.log(e.target);
};
const setSavePostActive = (e) => {
    e.target.classList.toggle("fas");
};
const addNewPost = () => {
    // axios.get(API_LINK).then((res: unknown) => {
    //   console.log(res);
    // });
    fetch(API_LINK)
        .then((res) => res.json())
        .then((data) => {
        const newPost = post_temp.content.cloneNode(true);
        const img_element = newPost.querySelector(".photo");
        img_element.setAttribute("src", data.message);
        main_content.append(newPost);
    });
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
save_post_btn.addEventListener("click", setSavePostActive);
share_btn.addEventListener("click", addNewPost);
main_content.addEventListener("scroll", handleScroll);
