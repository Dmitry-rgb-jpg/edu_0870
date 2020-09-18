// ==UserScript==
// @name         Bot for yandex experement
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://yandex.ru/*
// @match        https://xn----7sbab5aqcbiddtdj1e1g.xn--p1ai/*
// @grant        none
// ==/UserScript==
let yandexInput = document.getElementsByName('text')[0];
let keywords = ['Гобой','Как звучит флейта','Кларнет','Саксофон'];//массив ключевых слов для поиска,если не найдется ключевое слово бот зависнит.
let keyword = keywords[getRandom(0,keywords.length)];// получение случайного слова,записывается в document.getElementsByName('text')[0].value = Гобой,Как звучит флейта,Кларнет.
let btnK = document.getElementsByClassName("button_theme_websearch")[0];

let k = 0;
let links1 = document.links;//сбор всех ссылок.
if(btnK != undefined){//условие если кнопка не найдена.
   let timerId = setInterval(function(){
       yandexInput.value+=keyword[k]
       k++;
       if(k == keyword.length){
           clearInterval(timerId);
           btnK.click();
       }
   },1000);
    }else if(location.hostname == "xn----7sbab5aqcbiddtdj1e1g.xn--p1ai"){
          setInterval(()=>{
              let index = getRandom(0,links1.length);
              if( getRandom(0,101)>=70){
               location.href ='https://www.yandex.ru/';

              }
             else if (links1[index].href.indexOf("xn----7sbab5aqcbiddtdj1e1g.xn--p1ai")!=-1)
                      links1[index].click();
          },getRandom(3000,7000));
}else{

    
    let nextYandexPageTriger = true; //переменная переключатель ЕСЛИ НЕ НАШЛИ НУЖНУЮ ССЫЛКУ ТО ПЕРЕХОДИМ НА СЛУДУЮЩУЮ СТРАНИЦУ.
    for(let k = 0; k < links1.length;k++){
        if(links1[k].href.indexOf('xn----7sbab5aqcbiddtdj1e1g.xn--p1ai')!=-1){//получение нужной по подстроке.
            console.log("Ссылка найдена "+links1[k]);
            let link = links1[k];
            nextYandexPageTriger = false;//ЕСЛИ НАШЛИ НУЖНУЮ ССЫЛКУ ТО УСЛОВИЕ ПЕРЕХОДА НА СЛУДУЮЩУЮ СТРАНИЦУ НЕ ВЫПОЛНИТСЯ.
            link.removeAttribute("target");//удаление атрибута.
            setTimeout(()=>{links1[k].click();},getRandom(1000,4000));
            break;
        }
    }

      if(document.querySelector(".pager__item_current_yes").innerText == "7"){
        nextYandexPageTriger = false;
        location.href = 'https//yandex.ru/';

    }
    let next = document.querySelector(".pager__item_kind_next");
    if(nextYandexPageTriger == setTimeout(()=>{next.click();},getRandom(2000,7000))){

    

    }
}


function getRandom(min,max){
    return Math.floor(Math.random()*(max-min)+min);//Math floor  округляем случайное число в меньшую сторону.

}
