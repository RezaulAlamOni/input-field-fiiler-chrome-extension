// document.addEventListener('DOMContentLoaded', function() {
//     var fillButton = document.getElementById('fillFields');
//     fillButton.addEventListener('click', function() {
//         chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//             chrome.tabs.sendMessage(tabs[0].id, {action: 'fillFields'});
//         });
//     });
// });
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {action: 'fillFields'});
});