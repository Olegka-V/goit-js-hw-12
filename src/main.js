import IziToast from "izitoast";
import 'izitoast/dist/css/iziToast.min.css';



import { getImages } from "./js/pixabay-api";
import { imagesTemplate } from "./js/render-functions";
import iziToast from "izitoast";


const submit = document.querySelector(".form");
const form = document.querySelector(".list-width-item");
const loader = document.querySelector("#loader");
const btnLoadMore = document.querySelector(".load-more");



// Global params ==============

let currentPage;
let query;
let maxPage = 0;
let pageSize = 15;

// ============================

submit.addEventListener("submit", async e => {

    e.preventDefault();

    query = e.target.elements.query.value;
    const emptyValue = query.trim();

    currentPage = 1;
    form.innerHTML = "";

    showLoader();
   

    const imgArr = await getImages(query, currentPage);
    maxPage = Math.ceil(imgArr.totalHits / pageSize);
    try {
        
        imagesTemplate(imgArr);
        if (!emptyValue) {
            iziToast.error({
                title: 'Error',
                message: 'You don`t put value',
                position: "topRight",
            });
        hiddenLoader();
           return  form.innerHTML = "";
        } else {

           if (imgArr.total == 0) {
            iziToast.warning({
                title: 'Caution',
                message: 'Not correct data',
                position: "topLeft",
            });
        hiddenLoader();
            return  form.innerHTML = "";
           } 
        } 
        
    } catch (error) {
        console.log(err);
    }


    showLoadMore();
    checkBtnStatus();
    hiddenLoader();



    e.target.reset();
});

btnLoadMore.addEventListener("click", onLoadMoreClick);

async function onLoadMoreClick() {
    currentPage += 1;
    showLoader();
     const imgArr = await getImages(query, currentPage);
    try { 
        imagesTemplate(imgArr);  
    } catch (error) {
        console.log(err);
    }
    hiddenLoader();
    showLoadMore();
    checkBtnStatus();
    myScroll();
}

function showLoader() {
    loader.classList.remove("hidden");
}

function hiddenLoader() {
    loader.classList.add("hidden");
}

function showLoadMore() {
    btnLoadMore.classList.remove("hidden");
 }
function hiddenLoadMore() {
    btnLoadMore.classList.add("hidden");
}

function checkBtnStatus() {
    if (currentPage >= maxPage) {
        hiddenLoadMore();
        iziToast.info({
            message:"Sorry, we don`t heve images"
        });
    } else { 
        showLoadMore();
    }
}

function myScroll() {
    const height = (form.firstChild.getBoundingClientRect().height) * 2;

    window.scrollBy({
        top: height ,
        behavior: 'smooth',
    });
}




