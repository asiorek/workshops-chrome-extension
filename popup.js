
// changeWords.onclick = function() {
//     chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//         chrome.tabs.executeScript(
//             tabs[0].id, {
//             file: "contentES6.js"
//             }, function(){
//                 chrome.tabs.sendMessage(tabs[0].id,{
//                     negative: negative,
//                     positive: positive
//                 });
//             });
//     });
// };


// dictionary = JSON.parse(localStorage.getItem("dictionary"));

dictionary = {
    "gira": "gwóźdź",
    "dupa": "siedzisko",
    "pizda": "konstantynopolitańczykiewiczówna",
    "kurwa": "pani pani",
    "Zamieniacz": "b",
    "Z": "x",
    "słowackim": "czeskim"
}
function injectTheScript() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        // query the active tab, which will be only one tab
        //and inject the script in it
        chrome.tabs.executeScript(tabs[0].id, {file: "contentES6.js"}, ()=> 
        
        console.log(3));


        badWord = document.getElementById('badWord');
        niceWord = document.getElementById('niceWord');
        console.log(badWord.value, niceWord.value);
        console.log(dictionary);

        dictionary[badWord.value] = niceWord.value;
        console.log(dictionary);
        chrome.tabs.sendMessage(tabs[0].id, {
            dictionary: dictionary
        });

        localStorage.setItem("dictionary", JSON.stringify(dictionary));
    });
    badWord = document.getElementById('badWord');
    niceWord = document.getElementById('niceWord');
    dictionary[badWord.value] = niceWord.value;
    localStorage.setItem("dictionary", JSON.stringify(dictionary));
}
badWord = document.getElementById('badWord');
niceWord = document.getElementById('niceWord');
dictionary[badWord.value] = niceWord.value;
localStorage.setItem("dictionary", JSON.stringify(dictionary));

document.getElementById('updateButton').addEventListener('click', injectTheScript);