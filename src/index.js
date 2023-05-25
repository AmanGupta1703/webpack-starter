import users, { getNonPremUsers, getPremUsers } from "./data";
import { addTitle, email, styleBody } from "./dom";

console.log(getPremUsers(users));
console.log(getNonPremUsers(users));