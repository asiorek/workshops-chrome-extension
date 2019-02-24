const elements = document.getElementsByTagName('*');

const dictrionary = {
    "chuj": "gwóźdź",
    "dupa": "siedzisko",
    "kurwa": "konstantynopolitańczykiewiczówna"
}

for(let element of elements) {
    for(let node in element.childNodes[element]) {
        if (node.nodeType === 3) {
            var text = node.nodeValue;
            console.log(text);

            var replacedText = text.replace(/chuj|dupa|kurwa/gi, function replacer(match){return dictionary[match];});

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
        else {
            console.log("blad")
        }
    }
}