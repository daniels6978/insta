const like_btn = document.getElementsByClassName("like-btn");
const comments_btn = document.querySelector(".comments-btn");
const share_btn = document.querySelector(".share-btn");
const save_post_btn = document.querySelector(".save-post-btn");
const post_temp = document.querySelector(".post_temp");
const main_content = document.querySelector(".main-content");
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
    const newPost = post_temp.content.cloneNode(true);
    main_content.append(newPost);
};
main_content.addEventListener("click", () => {
    Array.from(like_btn).forEach((like) => {
        like.addEventListener("click", setActiveLike);
    });
});
save_post_btn.addEventListener("click", setSavePostActive);
share_btn.addEventListener("click", addNewPost);
