! function() {
    "use strict";
    chrome.runtime.onMessage.addListener((function(e, n, t) {
        "COPY_PAGE_TEXT" === e.type && t(document.body.innerText)
    }))
}();
