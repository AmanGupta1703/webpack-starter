console.log(`--------- DOM ---------`);

const body = document.querySelector("body");

// exporting functions
const styleBody = (bgColor = white) => {
	body.style.background = bgColor;
};

const addTitle = (text) => {
	const title = document.createElement("h1");
	title.textContent = text;
	body.insertAdjacentElement("afterbegin", title);
};

// exporting string
const email = "mario@code.in";

export {
    styleBody,
    addTitle,
    email
};