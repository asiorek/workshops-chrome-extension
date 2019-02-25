// działa
// pętla for(let i of y) iteruje po elementach tablicy lub stringu a nie po liczniku (iteratorze)

let elements;
if(!elements){
    elements = document.getElementsByTagName('*');
} 

let dictionary;
if(!dictionary){
    dictionary = {
    "gira": "gwóźdź",
    "dupa": "siedzisko",
    "pizda": "konstantynopolitańczykiewiczówna"
    };
}

function changeWords(message){
    if (message) {
        dictionary.push({
            key: message.negative,
            value: message.positive
        })
    }   
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

changeWords()

elements = null; 
delete elemets;
dictionary = null; 
delete dictionary;

// chrome.runtime.sendMessage({
//     changed_words: changedWords // or whatever you want to send
//   });

// chrome.runtime.onMessage.removeListener(changeWords);  //optional