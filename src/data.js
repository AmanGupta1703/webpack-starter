const users = [
	{ name: "mario", premium: true },
	{ name: "luigi", premium: false },
	{ name: "yoshi", premium: true },
	{ name: "toad", premium: true },
	{ name: "peach", premium: false },
];

const getPremUsers = users => users.filter(users => users.premium);

export default users;

export {
    getPremUsers
};

// export {
//     getPremUsers,
//     users as default
// };