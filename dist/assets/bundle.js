(()=>{"use strict";const e=[{name:"mario",premium:!0},{name:"luigi",premium:!1},{name:"yoshi",premium:!0},{name:"toad",premium:!0},{name:"peach",premium:!1}];console.log("--------- DOM ---------"),document.querySelector("body"),console.log("Premium Users: ",e.filter((e=>e.premium))),console.log((e=>e.filter((e=>!e.premium)))(e))})();