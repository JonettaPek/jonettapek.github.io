import socials from "./data/socials.js"

document.querySelector(".header__blog-name").innerHTML = "One T for Thoughts <br> with J { one } tta";

socials.forEach(social => {
    let li = document.createElement("li");
    li.setAttribute("class", "footer__item");
    let a = document.createElement("a");
    a.setAttribute("href", social.url);
    a.setAttribute("target", "_blank");
    let img = document.createElement("img");
    img.setAttribute("src", social.logoSource);
    img.setAttribute("alt", social.alt);
    a.append(img);
    li.append(a);
    document.querySelector("body footer ul").append(li);
});
