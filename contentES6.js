// działa
// pętla for(let i of y) iteruje po elementach tablicy lub stringu a nie po liczniku (iteratorze)

const elements = document.getElementsByTagName('*');

const dictionary = {
    "chuj": "gwóźdź",
    "dupa": "siedzisko",
    "kurwa": "konstantynopolitańczykiewiczówna"
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