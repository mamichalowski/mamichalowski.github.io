// Allow window to listen for a postMessage
window.addEventListener("message", (event) => {
    // Normally you would check event.origin
    // To verify the targetOrigin matches
    // this window's domain
    let txt = document.querySelector('#txtMsg');
    // event.data contains the message sent
    txt.value = `Name is ${event.data.pName}, Age is ${event.data.pAge}`;
});

function closeMe() {
    try {
        window.close();
    } catch (e) {
        console.log(e);
    }
    try {
        self.close();
    } catch (e) {
        console.log(e);
    }
}
