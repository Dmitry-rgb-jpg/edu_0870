// ==UserScript==
// @name         Bot for yandex experement
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://yandex.ru/*
// @match        https://xn----7sbab5aqcbiddtdj1e1g.xn--p1ai/*
// @match        https://crushdrummers.ru/*
// @grant        none
// ==/UserScript==
let sites = {
    "xn----7sbab5aqcbiddtdj1e1g.xn--p1ai":['Гобой','Как звучит флейта', 'Кларнет','Саксофон','Тромбон','Валторна'],
    "crushdrummers.ru":['Барабанное шоу','Заказать барабанное шоу','Шоу барабанщиков в Москве']
};

let site = Object.keys(sites)[getRandom(0,Object.keys(sites).length)];
let yandexInput = document.getElementsByName('text')[0];
let keywords = sites[site];
let keyword = keywords[getRandom(0,keywords.length)];
let btnK = document.getElementsByClassName("button_theme_websearch")[0];
let k = 0;
let links1 = document.links;


if (btnK != undefined){
    document.cookie = "site="+site;
}else if (location.hostname == "yandex.ru"){
    site = getCookie("site");
}else{
    site = location.hostname;
}


if(btnK != undefined){
       document.cookie = "site="+site;
   let timerId = setInterval(()=>{
       yandexInput.value += keyword[k];
       k++;
       if(k == keyword.length){
           clearInterval(timerId);
           btnK.click();
       }
   },1000);
    }else if(location.hostname == site){
          setInterval(()=>{
              let index = getRandom(0,links1.length);
              if( getRandom(0,101)>=70){
               location.href ='https://yandex.ru/';

              }
             else if (links1[index].href.indexOf(site)!=-1)
                      links1[index].click();
          },getRandom(3000,7000));
}else{
    let nextYandexPageTriger = true; 
    for(let k = 0; k < links1.length; k++){
        if(links1[k].href.indexOf(site) !=-1){
            let link = links1[k];
            nextYandexPageTriger = false;
            link.removeAttribute("target");
            setTimeout(()=>{link.click();},getRandom(1000,4000));
            break;
        }
    }

      if(document.querySelector(".pager__item_current_yes").innerText == "7"){
        nextYandexPageTriger = false;
        location.href = 'https://yandex.ru/';

    }
    let next = document.querySelector(".pager__item_kind_next");
    if(nextYandexPageTriger == setTimeout(()=>{next.click();},getRandom(2000,7000))){

    }
}


function getRandom(min,max){
    return Math.floor(Math.random()*(max-min)+min);.

}
function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}
