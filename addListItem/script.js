const listItems = [
    "HTML and Semantics",
    "Starting with CSS",
    "Working Template",
    "Mobile responsive webpages",
    "Getting Started with JavaScript",
    "Advance JavaScript",
    "Working with DOM",
    "Making Projects using HTML, CSS and JavaScript",
    "Understanding Fundamental of Computer Science",
    "Getting Started with Database"
    ,"Understanding the Database"
    ,"Starting with NodeJS and Express"
    ,"Understanding React and its Fundamentals"
    ,"Understanding Hooks and Routers"
    ,"Starting and Completing Full Fledge Projects"
];

let currentIndex = 0;
const list = document.getElementById("list");
const addButton = document.getElementById("addButton");

addButton.addEventListener("click", function () {
    if (currentIndex < listItems.length) {
        const listItem = document.createElement("li");
        listItem.innerText = listItems[currentIndex];
        list.appendChild(listItem);
        
        currentIndex++;
    } else {
        alert("All items have been added.");
    }
});
