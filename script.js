const projTable = document.getElementById("project-table");

let projects = {};

function setupProjects() {
    for (const [projId, proj] of Object.entries(projects)) {
        let projRow = document.createElement("div")
        projRow.id = projId;
        projRow.classList.add("row");
        projRow.onclick = () => {clickProject(projId)};

        let nameCell = document.createElement("div");
        nameCell.classList.add("cell");
        nameCell.innerHTML = proj.name;
        
        let roleCell = document.createElement("div");
        roleCell.classList.add("cell");
        roleCell.innerHTML = proj.role;
        
        let yearCell = document.createElement("div");
        yearCell.classList.add("cell");
        yearCell.innerHTML = proj.year;
        
        projRow.appendChild(nameCell);
        projRow.appendChild(roleCell);
        projRow.appendChild(yearCell);

        projTable.appendChild(projRow);
    }
}

function clickProject(projId) {
    console.log(`clicked ${projId}`);
    const proj = projects[projId]

    for (const projectCell of projectColumn.children) {
        if (projectCell.id === projId) {
            projectCell.classList.add("selected");
        } else {
            projectCell.classList.remove("selected");
        }
    }

    infoColumn.innerHTML = "";
    
    for (const infoItem of proj.info) {
        let infoCell = document.createElement("div");
        infoCell.classList.add("cell");
        if (infoItem.type === "text") {
            infoCell.innerHTML = infoItem.content;
            infoColumn.appendChild(infoCell);
        } else if (infoItem.type === "link") {
            let a = document.createElement("a")
            a.href = infoItem.url;
            a.style = "display: block; color: inherit; text-decoration: none;"
            infoCell.innerHTML = infoItem.title;
            infoCell.innerHTML += ` <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link-icon lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>`
            a.appendChild(infoCell);
            infoColumn.appendChild(a);
        } else if (infoItem.type === "image") {
            let img = document.createElement("img");
            img.src = infoItem.url;
            img.style = "width: 100%; display: block; object-fit: contain;";
            infoCell.style = "padding: 15px";
            infoCell.appendChild(img);
            infoColumn.appendChild(infoCell);
        }
    }
}

fetch("projects.json")
    .then(resp => resp.json())
    .then(data => {
        projects = data;
        setupProjects();
    });
