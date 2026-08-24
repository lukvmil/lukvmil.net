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
            infoCell.innerHTML = infoItem.title;
        }
        infoColumn.appendChild(infoCell);
    }
}

setupProjects();