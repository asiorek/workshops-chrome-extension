// pętla for(let i of y) iteruje po elementach tablicy lub stringu a nie po liczniku (iteratorze)
// import dictionary from './dictionary.js';

 elements = document.getElementsByTagName('*');
 dictionary = {
    "gira": "gwóźdź",
    "dupa": "siedzisko",
    "pizda": "konstantynopolitańczykiewiczówna",
    "kurwa": "pani pani",
    "Zamieniacz": "b",
    "Z": "x",
    "słowackim": "czeskim"
}
// localStorage.setItem("dictionary", JSON.stringify(dictionary));

// dictionary = JSON.parse(localStorage.getItem("dictionary"));


// console.log(localStorage.myObj);


function clickPlanet() {
    // var planets = document.getElementsByClassName("planet-name"),
    //     randomplanet = Math.floor(Math.random() * planets.length),
    //     clickplanet = planets[randomplanet];
    //     alert('CONTENT SCRIPT: I am running!')
    // clickplanet.click();
    console.log("labl")
}

clickPlanet();


// function addWordToDictionary() {
    // badWord = document.getElementById('badWord');
    // niceWord = document.getElementById('niceWord');
    // dictionary[badWord.value] = niceWord.value;
    // console.log(dictionary);
        // event.preventDefault();
        // });
// }

// function changeWords() {  

    // window.addEventListener('DOMContentLoaded', function() {
    // document.getElementById('pageWordsChanger').addEventListener('click', () => {
        for(let element of elements) {
            for(let node of element.childNodes) {
                if (node.nodeType === 3) {
                     text = node.nodeValue.toLowerCase();

                    Object.keys(dictionary).forEach(word => {
                         replacedText = text.replace(word, match => dictionary[match]);
                        if (replacedText !== text) {
                            element.replaceChild(document.createTextNode(replacedText), node);
                        }
                    });
                }
            }
        }
    // });
// });
// }


// function changeOneInputWord() {
    //  badWord = document.getElementById('badWord');
    //  niceWord = document.getElementById('niceWord');

    // document.getElementById('changeOneWord').addEventListener('click', () => {
    //     for(let element of elements) {
    //         for(let node of element.childNodes) {
    //             if (node.nodeType === 3) {
    //                  text = node.nodeValue;
    //                  replacedText = text.replace(badWord, () =>{console.log("clicks");
    //                     niceWord});

    //                 if (replacedText !== text) {
    //                     element.replaceChild(document.createTextNode(replacedText), node);
    //                 }
    //             }
    //         }
    //     }
    // });
    

// }
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    console.log(msg.dictionary);
    dictionary = msg.dictionary;
    // If the received message has the expected format...
    if (msg.text === 'report_back') {
        // Call the specified callback, passing
        // the web-page's DOM content as argument
        sendResponse(document.all[0].outerHTML);
    }
});


chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    console.log("cs: onMessage addListener is fired ",request);

    if (request.subject == "listen"){
        listenToClicks(document);
        console.log(document)
}
    else if(request.subject == "stoplisten")
        stopListenToClicks();
    sendResponse({ msg: "cs: click events are now fired from listentoclicks event is function" });
    return true;
});
chrome.runtime.sendMessage({
    changed_words: "elements" // or whatever you want to send
});

// chrome.runtime.onMessage.removeListener(changeWords);  //optional