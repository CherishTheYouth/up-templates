const sendMessageId = document.getElementById("sendmessageid");
if (sendMessageId) {
    sendMessageId.onclick = function() {
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
          console.log('tabs', tabs, chrome.runtime.getURL("images/stars.jpeg"))
            chrome.tabs.sendMessage(
                tabs[0].id,
                {
                  url: chrome.runtime.getURL("images/stars.jpeg"),
                  imageDivId: `${guidGenerator()}`,
                  tabId: tabs[0].id
                },
                function(response) {
                  alert(response, chrome.runtime.getURL("images/stars.jpeg"))
                  window.close();
                }
            );
            function guidGenerator() {
                const S4 = function () {
                    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
                };
                return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
            }
        });
    };
}