import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { getImages } from "./pixabay-api";
import simpleLightbox from "simplelightbox";
const link = document.querySelector(".image-large");
const form = document.querySelector(".list-width-item");


export function createImg({ largeImageURL, likes, views, downloads, comments, webformatURL }) {

    return `<li class="item">
        <a class="image-large" href="${largeImageURL}">
            <img
            class="img"
            src="${ webformatURL}"
            alt=""
            />
        </a>
        
        <ul class="list-width-img">
          <li class="item-params">
            <p class="name-params">Likes</p>
            <p class="params">${likes}</p>
          </li>
          <li class="item-params">
            <p class="name-params">Views</p>
            <p class="params">${views}</p>
          </li>
          <li class="item-params">
            <p class="name-params">Comments</p>
            <p class="params">${comments}</p>
          </li>
          <li class="item-params">
            <p class="name-params">Downloads</p>
            <p class="params">${downloads}</p>
          </li>
        </ul>
      </li>`


}



export function imagesTemplate({ hits }) {
    form.innerHTML = ""
    const markup =hits.map(createImg).join("");
    form.insertAdjacentHTML("beforeend", markup);
    const gallery = new simpleLightbox('.list-width-item .image-large');
    gallery.refresh();
}


    


  



