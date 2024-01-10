var childwin;
const childname = "popup";

function openChild() {
    childwin = window.open('Page2.html', childname, 'height=300px, width=500px');
}

function sendMessage() {
    let msg = { pName: "Bob", pAge: "35" };
    // In production, DO NOT use '*', use the target domain
    childwin.postMessage(msg, '*'); // childwin is the targetWindow
    childwin.focus();
}
