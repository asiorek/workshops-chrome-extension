chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse){
       localStorage["changed_words"] = request.changed_words;
       for(let el in localStorage["changed_words"] ){
           console.log(el);
       }
    }
);