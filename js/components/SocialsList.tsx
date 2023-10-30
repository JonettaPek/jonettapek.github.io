import SocialIcon from "./SocialIcon";

const SocialsList = function (data) {
    return `
        <footer class="footer">
            <ul class="footer__list">
                ${
                    data.map(
                        (social) => {SocialIcon(social)}
                        )
                }
            </ul>
        </footer>
    `
}

export default SocialsList;