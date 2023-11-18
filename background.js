chrome.runtime.onInstalled.addListener(function () {
  chrome.contextMenus.create({
    id: 'bug_report',
    title: 'BUG Template',
    type: 'normal',
    contexts: ['editable']
  })
})

// chrome.runtime.sendMessage()

chrome.contextMenus.onClicked.addListener(function(info, tab){
  console.log('tab', tab)
  // chrome.tabs.sendMessage(tab.id, { action: "insertTemplate" }, function () {
  //   console.log('sendMessage callback')
  // });
  sendMessageToActiveTab('22222222')
})

async function sendMessageToActiveTab(message) {
  const [tab] = await chrome.tabs.query({ active: true, lastFocusedWindow: true });
  const response = await chrome.tabs.sendMessage(tab.id, message);
  // TODO: Do something with the response.
}