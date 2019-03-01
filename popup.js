const dictionary = {
    "gira": "gwóźdź",
    "dupa": "siedzisko",
    "pizda": "konstantynopolitańczykiewiczówna",
    "kurwa": "pani"
}

document.getElementById("addButton").addEventListener("click", addToDictionary);
document.getElementById("runButton").addEventListener("click", runDictionary);

function addToDictionary() {
    const negativeWord = document.getElementById("negativeWord");
    if (!negativeWord.value) {
        document.getElementById("message").innerText = "Uzupełnij negatywny wyraz";
        document.getElementById("message").style = "color: red;"
        return;
    }
    const positiveWord = document.getElementById("positiveWord");

    let dictionaryFromLocalStorage = JSON.parse(localStorage.getItem("dictionary"));

    if (!dictionaryFromLocalStorage) {
        dictionary[negativeWord.value] = positiveWord.value;
        localStorage.setItem("dictionary", JSON.stringify(dictionary));
    } else {
        dictionaryFromLocalStorage[negativeWord.value] = positiveWord.value;
        localStorage.setItem("dictionary", JSON.stringify(dictionaryFromLocalStorage));
    }
    document.getElementById("message").innerText = "Dodano słowa do słownika";
    document.getElementById("message").style = "color: green;"
}

function runDictionary() {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.executeScript(tabs[0].id, { file: "content.js" }, () => {
            let dictionaryToSend;
            dictionaryToSend = JSON.parse(localStorage.getItem("dictionary"));
            if (!dictionaryToSend) {
                dictionaryToSend = dictionary;
            }
            chrome.tabs.sendMessage(tabs[0].id, dictionaryToSend)
        });
    });
}