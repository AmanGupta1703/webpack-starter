const users = [
	{ name: "mario", premium: true },
	{ name: "luigi", premium: false },
	{ name: "yoshi", premium: true },
	{ name: "toad", premium: true },
	{ name: "peach", premium: false },
];

const getPremUsers = users => users.filter(user => user.premium);

const getNonPremUsers = users => users.filter(user => !user.premium);

export default users;

export {
    getPremUsers,
	getNonPremUsers
};

// export {
//     getPremUsers,
//     users as default
// };