const url = "https://upadhayay.github.io/db.json";

const papersContainer = document.querySelector("#papers-container");

async function loadPapers() {

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Unable to fetch papers");
        }

        const data = await response.json();

        const papers = data.books;

        papersContainer.innerHTML = "";

        papers.forEach((paper) => {

            const card = document.createElement("article");
            card.className = "paper-card";

            const icon = document.createElement("div");
            icon.className = "paper-icon";
            icon.textContent = "📄";

            const title = document.createElement("h3");
            title.textContent = paper.title;

            const year = document.createElement("p");
            year.textContent = "Year: " + paper.year;

            const status = document.createElement("p");

            if (paper.published === true) {
                status.textContent = "Published";
            } else {
                status.textContent = "Not Published";
            }

            card.appendChild(icon);
            card.appendChild(title);
            card.appendChild(year);
            card.appendChild(status);

            papersContainer.appendChild(card);
        });

    } catch (error) {
        papersContainer.textContent = "Unable to load papers.";
        console.log(error);
    }
}

loadPapers();

//this is hamburger navi
const menuBtn = document.querySelector("#menu-btn");
const navLinks = document.querySelector("#nav-links");

console.log(menuBtn);
console.log(navLinks);

menuBtn.addEventListener("click", () => {
    console.log("Hamburger clicked!");
    navLinks.classList.toggle("show");
});