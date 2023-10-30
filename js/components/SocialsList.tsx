import SocialIcon from "./SocialIcon";

const SocialsList = function (data) {
    return `
        <ul class="footer__list">
            ${
                data.map(
                    (social) => {SocialIcon(social)}
                    )
            }
        </ul>
    `
}

export default SocialsList;