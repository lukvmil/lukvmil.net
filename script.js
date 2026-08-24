projects = {
    "koi-net": {
        "name": "KOI-net",
        "year": 2026,
        "info": [
            {
                "type": "text",
                "content": "Knowledge Organisation Infrastructure (KOI) is an open protocol that allows communities to collaboratively manage knowledge on their own terms while remaining interoperable with others. Developed by BlockScience with contributions from Metagov and the Australian Research Council Centre of Excellence for Automated Decision-Making and Society (ADM+S), KOI is designed for contexts where knowledge needs to be contextual, traceable, and machine-readable without forcing everyone into the same database or governance model. KOI allows different groups to organise, reference, and share knowledge in a modular, consent-based way. It enables interoperability without centralisation, creating a shared architecture for collective intelligence while preserving local control."
            },
            {
                "type": "link",
                "title": "Digital Infrastructure Research & Development: KOI Network Protocol x Project Interlay",
                "url": "https://blog.block.science/koi-network-protocol-project-interlay/"
            },
            {
                "type": "link",
                "title": "A Preview of the KOI-net Protocol",
                "url": "https://blog.block.science/a-preview-of-the-koi-net-protocol/"
            },
            {
                "type": "link",
                "title": "Telescope and KOI in Action: Building Feedback Loops for Organisational Intelligence",
                "url": "https://blog.block.science/building-feedback-loops-telescope-koi"
            }
        ]
    },
    "ask-metagov": {
        "name": "Ask Metagov",
        "year": 2026,
        "info": []
    },
    "telescope": {
        "name": "Telescope",
        "year": 2026,
        "info": []
    },
    "web-of-community": {
        "name": "Web of Community",
        "year": 2023,
        "info": []
    },
    "mod-pol": {
        "name": "ModPol",
        "year": 2021,
        "info": []
    },
    "daostar": {
        "name": "DAOstar",
        "year": 2022,
        "info": []
    },
    "guild-humanitas": {
        "name": "Guild Humanitas",
        "year": 2026,
        "info": []
    },
    "quantum-biology-institute": {
        "name": "Quantum Biology Institute",
        "year": 2025,
        "info": []
    },
    "agreement-engine": {
        "name": "Agreement Engine",
        "year": 2021,
        "info": []
    },
    "boxquest": {
        "name": "BoxQuest",
        "year": 2022,
        "info": []
    },
}


const projectColumn = document.getElementById("project-column");
const infoColumn = document.getElementById("info-column");

function setupProjects() {
    for (const [projId, proj] of Object.entries(projects)) {
        projectCell = document.createElement("div");
        projectCell.id = projId;
        projectCell.classList.add("cell");
        projectCell.innerHTML = proj.name;
        projectCell.onclick = () => {clickProject(projId)};

        projectColumn.appendChild(projectCell);
    }
}

function clickProject(projId) {
    console.log(`clicked ${projId}`);
    const proj = projects[projId]

    infoColumn.innerHTML = "";
    
    for (const infoItem of proj.info) {
        let infoCell = document.createElement("div");
        infoCell.classList.add("cell");
        if (infoItem.type === "text") {
            infoCell.innerHTML = infoItem.content;
        } else if (infoItem.type === "link") {
            let anchor = document.createElement("a")
            anchor.href = infoItem.url;
            anchor.style = "display: block;"
            infoCell.innerHTML = infoItem.title;
            infoCell.innerHTML += ` <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link-icon lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>`
            anchor.appendChild(infoCell);
            infoColumn.appendChild(anchor);
            return
        }
        infoColumn.appendChild(infoCell);
    }
}

setupProjects();