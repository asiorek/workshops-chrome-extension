// pętla for(let i of y) iteruje po elementach tablicy lub stringu a nie po liczniku (iteratorze)
// import dictionary from './dictionary.js';

const elements = document.getElementsByTagName('*');
const dictionary = {
        "gira": "gwóźdź",
        "dupa": "siedzisko",
        "pizda": "konstantynopolitańczykiewiczówna",
        "kurwa": "pani pani"
}

function addWordToDictionary() {
    const badWord = document.getElementById('badWord');
    const niceWord = document.getElementById('niceWord');

    addEventListener('submit', () => {
        event.preventDefault();
        dictionary[badWord.value] = niceWord.value;
    });
}

function changeWords() {  
    for(let element of elements) {
        for(let node of element.childNodes) {
            if (node.nodeType === 3) {
                const text = node.nodeValue.toLowerCase();

                Object.keys(dictionary).forEach(word => {
                    const replacedText = text.replace(word, match => dictionary[match]);
                    if (replacedText !== text) {
                        element.replaceChild(document.createTextNode(replacedText), node);
                    }
                });
            }
        }
    }
}


function changeOneInputWord() {
    const badWord = document.getElementById('badWord');
    const niceWord = document.getElementById('niceWord');


    
    for(let element of elements) {
        for(let node of element.childNodes) {
            if (node.nodeType === 3) {
                const text = node.nodeValue;
                const replacedText = text.replace(badWord, () => niceWord);
                if (replacedText !== text) {
                    element.replaceChild(document.createTextNode(replacedText), node);
                }
            }
        }
    }
}


// chrome.runtime.sendMessage({
//     changed_words: changedWords // or whatever you want to send
//   });

// chrome.runtime.onMessage.removeListener(changeWords);  //optional