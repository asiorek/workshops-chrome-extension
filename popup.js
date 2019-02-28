const dictionary = {
    "gira": "gwóźdź",
    "dupa": "siedzisko",
    "pizda": "konstantynopolitańczykiewiczówna"
}

document.getElementById("addButton").addEventListener("click", addToDictionary);

function addToDictionary(){
    const negativeWord = document.getElementById("negativeWord");
    const positiveWord = document.getElementById("positiveWord");

    dictionary[negativeWord.value] = positiveWord.value;

    console.log(dictionary);
}