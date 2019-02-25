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
            var text = node.nodeValue.toLowerCase();
            var replacedText = text.replace(/chuj|dupa|kurwa/gi, function replacer(match){
                console.log(dictionary[match], match); return dictionary[match];});
            // console.log(replacedText);
            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}

 