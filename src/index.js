import users, { getNonPremUsers, getPremUsers } from "./data";
import { addTitle, email, styleBody } from "./dom";

console.log("Premium Users: ", getPremUsers(users));
console.log(getNonPremUsers(users));