let skillList = [{
        skillName: "HTML",
        uniqueNo: 1,
    },
    {
        skillName: "CSS",
        uniqueNo: 2,
    },
    {
        skillName: "JavaScript",
        uniqueNo: 3,
    }
];

let unorderListItems = document.getElementById("unorderListItems");

function addListItems(item) {
    let createLiElement = document.createElement("li");
    createLiElement.classList.add("list-style");
    unorderListItems.appendChild(createLiElement);


    let createInputCheckbox = document.createElement("input");
    createInputCheckbox.type = "checkbox";
    createInputCheckbox.id = "checkbox" + item.uniqueNo;
    createLiElement.appendChild(createInputCheckbox);

    let createLabelElement = document.createElement("label");
    createLabelElement.setAttribute("for", createInputCheckbox.id);
    createLabelElement.id = "label" + item.uniqueNo;
    createLabelElement.textContent = item.skillName;
    createLiElement.appendChild(createLabelElement);

    createInputCheckbox.onclick = function() {
        createLabelElement.classList.toggle("color-change-style");
    };
}

for (let item of skillList) {
    addListItems(item);
}
