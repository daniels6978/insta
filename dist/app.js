// import axios from "../node_modules/axios/index.js";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const like_btn = document.getElementsByClassName("like-btn");
const comments_btn = document.querySelector(".comments-btn");
const share_btn = document.querySelector(".share-btn");
const save_post_btn = document.getElementsByClassName("save-post-btn");
const post_temp = document.querySelector(".post_temp");
const loading_temp = document.querySelector(".loading_temp");
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
    console.log(e.target);
};
const addNewPost = () => __awaiter(this, void 0, void 0, function* () {
    fetch(API_LINK)
        .then((res) => res.json())
        .then((data) => {
        const loading_element = loading_temp.content.cloneNode(true);
        const lds_dual_ring = loading_element.querySelector(".lds_dual_ring");
        main_content.append(loading_element);
        setTimeout(() => {
            lds_dual_ring.remove();
            const newPost = post_temp.content.cloneNode(true);
            const img_element = newPost.querySelector(".photo");
            main_content.append(newPost);
            img_element.setAttribute("src", data.message);
        }, 2000);
    })
        .catch((err) => console.log(err));
});
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
