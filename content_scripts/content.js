// content.js
// To Check if the content.js loaded successfully in target site, if not, it can not get any message
// sent by the background.js 
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  console.log('request', request, sender)
  var template = "<p>This is a custom template.</p>";
    // activeElement.focus();
  document.execCommand("insertHTML", false, template);
});

async function moveToFirstPosition(activeInfo) {
  try {
    await chrome.tabs.move(activeInfo.tabId, {index: 0});
    console.log("Success.");
  } catch (error) {
    if (error == "Error: Tabs cannot be edited right now (user may be dragging a tab).") {
      setTimeout(() => moveToFirstPosition(activeInfo), 50);
    } else {
      console.error(error);
    }
  }
}