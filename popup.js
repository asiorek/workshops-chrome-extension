const dictionary = {
    "gira": "gwóźdź",
    "dupa": "siedzisko",
    "pizda": "konstantynopolitańczykiewiczówna",
    "kurwa" : "pani"
}

document.getElementById("addButton").addEventListener("click", addToDictionary);

function addToDictionary() {
    const negativeWord = document.getElementById("negativeWord");
    const positiveWord = document.getElementById("positiveWord");

    dictionary[negativeWord.value] = positiveWord.value;

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.executeScript(tabs[0].id, { file: "content.js" }, () => {
            chrome.tabs.sendMessage(tabs[0].id, dictionary)
        });
    });
}