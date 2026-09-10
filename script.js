const accordions = document.getElementsByClassName("accordion");
for (const acc of accordions) {
    let cell = document.createElement("div");
    cell.classList.add("cell");
    cell.innerHTML = `<svg class="chevron" width="1em" height="1em" viewBox="2 2 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 9L12 15L18 9" fill="none" stroke="var(--dark)" stroke-width="2" stroke-linecap="square" transform="rotate(-90 12 12)"/>
    </svg>`;
    acc.appendChild(cell);

    acc.addEventListener("click", function() {
        this.classList.toggle("active");

        for (const otherAcc of accordions) {
            if (otherAcc === this) continue;
            otherAcc.classList.remove("active");
        }
    });
}

const panelLinks = document.getElementsByClassName("panel-link");
for (const link of panelLinks) {
    link.innerHTML += ` <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link-icon lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>`
}

const langButton = document.getElementsByClassName("lang-button")[0];
function swapLanguages() {
    var langEn = document.getElementsByClassName("lang-en");
    var langZh = document.getElementsByClassName("lang-zh");

    langButton.classList.toggle("active");

    const langMode = langButton.classList.contains("active") ? "zh" : "en";
    console.log(langMode);
    
    for (const enEl of langEn) {
        enEl.hidden = (langMode !== "en");
    }

    for (const zhEl of langZh) {
        zhEl.hidden = (langMode !== "zh");
    }
}