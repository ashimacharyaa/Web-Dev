function initApp() {
    function update() {
        const now = new Date();

        // 1. Local Clock
        const localElem = document.getElementById('local-time');
        if(localElem) localElem.textContent = now.toLocaleTimeString();

        // 2. Nepal Clock (UTC +5:45)
        const nepalOffset = 5.75 * 60 * 60 * 1000;
        const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
        const nepalTime = new Date(utc + nepalOffset);
        
        const nepalElem = document.getElementById('nepal-time');
        if(nepalElem) nepalElem.textContent = nepalTime.toLocaleTimeString();

        // 3. Auto Dark Mode (6pm to 6am)
        const hour = now.getHours();
        if (hour >= 6 && hour < 18) {
            document.body.classList.remove('dark-mode');
        } else {
            document.body.classList.add('dark-mode');
        }
    }

    setInterval(update, 1000);
    update();

  
    const cvBtn = document.getElementById('view-cv-btn');
    const resumeSection = document.getElementById('resume-container');

    if (cvBtn && resumeSection) {
        cvBtn.addEventListener('click', function() {
            if (resumeSection.style.display === "none" || resumeSection.style.display === "") {
                resumeSection.style.display = "block";
                cvBtn.textContent = "HIDE CV";
            } else {
                resumeSection.style.display = "none";
                cvBtn.textContent = "CLICK HERE FOR CV";
            }
        });
    }
}


window.onload = initApp;