import { createImg } from "./render-functions";


export function getImages(query) {
    const BASE_URL = "https://pixabay.com/";
    const END_POINT = "api/";
    const API_KEY = "43200126-fe47e1a89238cebb9641f8f5f";
    const params = new URLSearchParams({
        key: API_KEY,
        q: query,
        image_type: "photo",
        orientation:"horizontal",
        safesearch: "true",
    });
    const url = `${BASE_URL}${END_POINT}?${params}`;

    return fetch(url).then(res => res.json());
}




