import axios from "axios";
import { createImg } from "./render-functions";


export async function getImages(query, currentPage) {
    const BASE_URL = "https://pixabay.com/";
    const END_POINT = "api/";
    const API_KEY = "43200126-fe47e1a89238cebb9641f8f5f";
    const paramsUrl = new URLSearchParams({
        key: API_KEY,
        q: query,
        image_type: "photo",
        orientation:"horizontal",
        safesearch: "true",
    });

    const params = {
        per_page: 15,
        page : currentPage,
    }

    const url = `${BASE_URL}${END_POINT}?${paramsUrl}`;
    const res = await axios.get(url, {params});
    return res.data;

}




