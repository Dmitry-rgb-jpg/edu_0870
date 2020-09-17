// ==UserScript==
// @name         Bot for yandex
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://yandex.ru/*
// @grant        none
// ==/UserScript==
let keywords = ['Гобой','Как звучит флейта','Кларнет'];//массив ключевых слов для поиска,если не найдется ключевое слово бот зависнит.
let keyword = keywords[getRandom(0,keywords.length)];// получение случайного слова,записывается в document.getElementsByName('text')[0].value = Гобой,Как звучит флейта,Кларнет.
//document.getElementsByName('text')[0].value = "Гобой"; //строка поиска нулевой элемент value - значение = Габой.
let btnK = document.getElementsByClassName("button_theme_websearch")[0]; //кнопка поиска нулевой элемент.
if(btnK != undefined){//условие если кнопка не найдена.
    document.getElementsByName('text')[0].value = keyword;//(момент присвоения)гарантия того что ключевое слово будет только на первой странице поисковика.
    document.getElementsByClassName("button_theme_websearch")[0].click();//клик по кнопке.
}else{

    let links1 = document.links;//сбор всех ссылок.

    for(let k = 0; k < links1.length;k++){
        if(links1[k].href.indexOf('xn----7sbab5aqcbiddtdj1e1g.xn--p1ai')!=-1){//получение нужной ссылки по подстроке.
            console.log("Ссылка найдена "+links1[k]);
            let link = links1[k];
            link.removeAttribute("target");//удаление атрибута.
            link.click();//клик по нужной ссылке(последний элемент).
            break;
        }
    }
}


function getRandom(min,max){
    return Math.floor(Math.random()*(max-min)+min);//Math floor  округляем случайное число в меньшую сторону.

}
