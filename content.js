const elements = document.getElementsByTagName('*');

const dictionary = {
    "gira": "gwóźdź",
    "dupa": "siedzisko",
    "pizda": "konstantynopolitańczykiewiczówna"
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