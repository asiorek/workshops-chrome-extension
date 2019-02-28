chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse){
       localStorage["changed_words"] = request.changed_words;
       for(let el in localStorage["changed_words"] ){
           console.log(el);
       }
    }
);


function doStuffWithDom(domContent) {
    console.log('I received the following DOM content:\n' + domContent);
}

// When the browser-action button is clicked...
chrome.browserAction.onClicked.addListener(function (tab) {
    console.log("browser action")
    // ...check the URL of the active tab against our pattern and...
    if (urlRegex.test(tab.url)) {
        // ...if it matches, send a message specifying a callback too
        chrome.tabs.sendMessage(tab.id, {text: 'report_back'}, doStuffWithDom);
    }
});