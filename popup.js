const dictionary = {
    "gira": "gwóźdź",
    "dupa": "siedzisko",
    "pizda": "konstantynopolitańczykiewiczówna",
    "kurwa" : "pani"
}

document.getElementById("addButton").addEventListener("click", addToDictionary);

document.getElementById("runButton").addEventListener("click", runDictionary);

function addToDictionary() {
    const negativeWord = document.getElementById("negativeWord");
    const positiveWord = document.getElementById("positiveWord");

    dictionary[negativeWord.value] = positiveWord.value;
}

function runDictionary(){
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.executeScript(tabs[0].id, { file: "content.js" }, () => {
            chrome.tabs.sendMessage(tabs[0].id, dictionary)
        });
    });
}