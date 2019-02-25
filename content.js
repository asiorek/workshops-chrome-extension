var elements = document.getElementsByTagName('*');

var dictionary = {
  "chuj": "gwóźdź",
  "dupa": "siedzisko",
  "kurwa": "konstantynopolitańczykiewiczówna"
};

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            
            var replacedText = text.replace(replaceWords(dictionary),function replacer(match){return dictionary[match];});
            // var replacedText = text.replace(/chuj|dupa|kurwa/gi, function replacer(match){return dictionary[match];});

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}

function replaceWords(dictionary){
    let regularExpresion = "/";
    let keys = Object.keys(dictionary);
    keys.forEach(key => {
        regularExpresion += key;
        regularExpresion += "|";
    });
    regularExpresion = regularExpresion.slice(0, -1) + "/gi";
    return regularExpresion;
}

 