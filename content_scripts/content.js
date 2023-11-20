// content.js
// To Check if the content.js loaded successfully in target site, if not, it can not get any message
// sent by the background.js 
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  console.log('request', request, sender)
  var template = `
    <p>Problem Analysis: 功能缺陷</p>
    <p>Solved Solution: 修复功能缺陷</p>
    <p>Impact Analysis:no impact to other components for the function is internal used</p>
    <p>Solved Version:</p>
    <p>Test Instruction:</p>
    <p>redo the test</p>
    <p>Unit Test Case No./Name:</p>
    <p>ChangeSet:</p>
  `;
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
