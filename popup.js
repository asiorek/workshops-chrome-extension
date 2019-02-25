const changeWords = document.getElementById("changeWords");

changeWords.onclick = function() {
    let negative = document.getElementById('negative').value;
    let positive = document.getElementById('positive').value;
  
    console.log(negative)
    console.log(positive)

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(
            tabs[0].id, {
            file: "contentES6.js"
            }, function(){
                chrome.tabs.sendMessage(tabs[0].id,{
                    negative: negative,
                    positive: positive
                });
            });
    });
};