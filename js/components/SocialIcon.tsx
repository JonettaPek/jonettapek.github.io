const SocialIcon = function ({url, alt, logoSource}) {
    return `
    <li class="footer__item">
        <a href="${url}" target="_blank">
            <img src="${logoSource}" alt="${alt}'>
        </a>
    </li>
    `;
};

export default SocialIcon;