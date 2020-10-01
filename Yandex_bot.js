// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://yandex.ru/*
// @match        https://xn----7sbab5aqcbiddtdj1e1g.xn--p1ai/*
// @match        https://crushdrummers.ru/*
// @grant        none
// ==/UserScript==

let yandexInput = document.getElementsByName("text")[0];
let SearchButton = document.querySelector(".button_theme_websearch");

let sites = {
    "xn----7sbab5aqcbiddtdj1e1g.xn--p1ai": ["Гобой", "Саксофон", "Валторна", "Фагот", "Скрипка", "Флейта", "Как звучит флейта"],
    "crushdrummers.ru": ["Барабанное шоу", "Шоу барабанщиков в Москве", "Заказать барабанщиков в Москве"]
};
let site = Object.keys(sites)[getRandom(0,Object.keys(sites).length)];
let keywords = sites [site];
let keyword = keywords[getRandom(0,keywords.length)];
let i=0;
function getRandom (min, max){
    return Math.floor(Math.random()*(max-min)+min);
}
function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}
if (SearchButton!=undefined) {
    document.cookie = "site="+site;
}else{
    site = getCookie("site");
}
if (SearchButton!=undefined){
    let timerId = setInterval(()=>{
    yandexInput.value += keyword[i++];
    if (i==keyword.length){
        clearInterval(timerId);
        document.getElementsByName("SearchButton")[0].click();
    }
},500);
}else if (location.hostname == "yandex.ru"){
    let links = document.links;
    let flag = true;
    let numPage = document.querySelector(".pager__item").innerText;
    for (let i=0; i<links.length; i++){
         let link = links[i];
         if(link.href.indexOf(site) != -1){
             setTimeout(()=>links[i].click(),2000);
             flag=false;
            break;
         }
    }
    if (numPage=="10") location.href = "https://yandex.ru/";
    if (flag) setTimeout(()=>pnnext.click(),2000);
}else {
    if (getRandom(0,100)>=80){
       location.href = "https://yandex.ru/";
    }else{
        let links = document.links;
        setInterval(()=>{
            let index = getRandom(0, links.length);
            if (links[index].href.indexOf(location.hostname) != -1) {
                links[index].click();
            }
        },5000);
    }
}