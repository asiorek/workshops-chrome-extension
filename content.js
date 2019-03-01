chrome.runtime.onMessage.addListener(function (dictionary, sender, sendResponse) {
    changeWords(dictionary)
});

function changeWords(dictionary) {
    const elements = document.getElementsByTagName('*');

    for (let element of elements) {
        if (element.tagName != "SCRIPT" && element.tagName != "STYLE" && element.tagName != "NOSCRIPT") {
            for (let node of element.childNodes) {
                if (node.nodeType === 3) {
                    const text = node.nodeValue.toLowerCase();
                    Object.keys(dictionary).forEach(word => {
                        const replacedText = text.replace(word, match => dictionary[match]);

                        if (replacedText !== text) {
                            console.log(element);
                            element.replaceChild(document.createTextNode(replacedText), node);
                        }
                    });
                }
            }
        }
    }
}