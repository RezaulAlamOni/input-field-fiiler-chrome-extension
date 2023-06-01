chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'fillFields') {
        var inputFields = document.getElementsByTagName('input');
        for (var i = 0; i < inputFields.length; i++) {
            var input = inputFields[i];
            if (input.type === 'text') {
                input.value = 'Sample Value'; // Change this to the desired value
            }
        }
    }
});