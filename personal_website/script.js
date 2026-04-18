var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    
    event.currentTarget.classList.add("active-link");
    
    document.getElementById(tabname).classList.add("active-tab");
}

    function update() {
        const now = new Date();

        const localElem = document.getElementById('local-time');
        if(localElem) localElem.textContent = now.toLocaleTimeString();

        const nepalOffset = 5.75 * 60 * 60 * 1000;
        const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
        const nepalTime = new Date(utc + nepalOffset);
        
        const nepalElem = document.getElementById('nepal-time');
        if(nepalElem) nepalElem.textContent = nepalTime.toLocaleTimeString();

        const hour = now.getHours();
        if (hour >= 6 && hour < 18) {
            document.body.classList.remove('dark-mode');
        } else {
            document.body.classList.add('dark-mode');
        }
    }
    setInterval(update, 1000);
    update();
