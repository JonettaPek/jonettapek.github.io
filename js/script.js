import socials from "./data/socials.js"
import SocialsList from "./components/SocialsList.js";

document.querySelector(".header__blog-name").innerHTML = "One T for Thoughts <br> with J { one } tta";

document.querySelector(".footer").innerHTML = SocialsList(socials);

console.log(SocialsList(socials));
