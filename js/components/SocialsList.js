import SocialIcon from "./SocialIcon.js";

const SocialsList = function (data) {
    return `
        <ul class="footer__list">
            ${
                data.map(
                    (social) => {
                        return SocialIcon(social);
                    })
                    .join("")
            }
        </ul>
    `;
}

export default SocialsList;