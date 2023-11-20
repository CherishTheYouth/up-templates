chrome.runtime.onInstalled.addListener(function () {
  chrome.contextMenus.create({
    id: 'bug_report',
    title: 'BUG Template',
    type: 'normal',
    contexts: ['editable']
  })
})

chrome.contextMenus.onClicked.addListener(function(info, tab){
  sendMessageToActiveTab('Bug Report')
})

async function sendMessageToActiveTab(message) {
  const [tab] = await chrome.tabs.query({ active: true, lastFocusedWindow: true });
  const response = await chrome.tabs.sendMessage(tab.id, message);
}
