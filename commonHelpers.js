import{s as S,a as v,i as d}from"./assets/vendor-b16ce8bc.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const M=document.querySelector(".list-width-item");function $({largeImageURL:r,likes:s,views:o,downloads:a,comments:e,webformatURL:t}){return`<li class="item">
        <a class="image-large" href="${r}">
            <img
            class="img"
            src="${t}"
            alt=""
            />
        </a>
        
        <ul class="list-width-img">
          <li class="item-params">
            <p class="name-params">Likes</p>
            <p class="params">${s}</p>
          </li>
          <li class="item-params">
            <p class="name-params">Views</p>
            <p class="params">${o}</p>
          </li>
          <li class="item-params">
            <p class="name-params">Comments</p>
            <p class="params">${e}</p>
          </li>
          <li class="item-params">
            <p class="name-params">Downloads</p>
            <p class="params">${a}</p>
          </li>
        </ul>
      </li>`}function f({hits:r}){const s=r.map($).join("");M.insertAdjacentHTML("beforeend",s),new S(".list-width-item .image-large").refresh()}async function g(r,s){const o="https://pixabay.com/",a="api/",e="43200126-fe47e1a89238cebb9641f8f5f",t=new URLSearchParams({key:e,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true"}),i={per_page:15,page:s},b=`${o}${a}?${t}`;return(await v.get(b,{params:i})).data}const q=document.querySelector(".form"),c=document.querySelector(".list-width-item"),h=document.querySelector("#loader"),u=document.querySelector(".load-more");let n,l,y=0,P=15;q.addEventListener("submit",async r=>{r.preventDefault(),l=r.target.elements.query.value;const s=l.trim();n=1,c.innerHTML="",L();const o=await g(l,n);y=Math.ceil(o.totalHits/P);try{if(f(o),s){if(o.total==0)return d.warning({title:"Caution",message:"Not correct data",position:"topLeft"}),m(),c.innerHTML=""}else return d.error({title:"Error",message:"You don`t put value",position:"topRight"}),m(),c.innerHTML=""}catch{console.log(err)}p(),w(),m(),r.target.reset()});u.addEventListener("click",E);async function E(){n+=1,L();const r=await g(l,n);try{f(r)}catch{console.log(err)}m(),p(),w(),T()}function L(){h.classList.remove("hidden")}function m(){h.classList.add("hidden")}function p(){u.classList.remove("hidden")}function O(){u.classList.add("hidden")}function w(){n>=y?(O(),d.info({message:"Sorry, we don`t heve images"})):p()}function T(){const r=c.firstChild.getBoundingClientRect().height*2;window.scrollBy({top:r,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
