import IziToast from "izitoast";
import 'izitoast/dist/css/iziToast.min.css';


import { getImages } from "./js/pixabay-api";
import { imagesTemplate } from "./js/render-functions";
import iziToast from "izitoast";


const submit = document.querySelector(".form");
const form = document.querySelector(".list-width-item");
const loader = document.querySelector("#loading");

loader.classList.remove("loader");

submit.addEventListener("submit", e => {
    e.preventDefault();
    const query = e.target.elements.query.value;
    const emptyValue = query.trim();
    loader.classList.add("loader");
    getImages(query).then(imgArr => { 
        const markup = imagesTemplate(imgArr);
        if (!emptyValue) {
            iziToast.error({
                title: 'Error',
                message: 'You don`t put value',
                position: "topRight",
            });
            form.innerHTML = "";

        } else {
            
           if (!markup.length) {
            iziToast.warning({
                title: 'Caution',
                message: 'Not correct data',
                position: "topLeft",
            });
                form.innerHTML = "";
           } else {

                form.innerHTML = markup;

           } 
        } 
    }).finally(() => loader.classList.remove("loader"));
    e.target.reset();
});




