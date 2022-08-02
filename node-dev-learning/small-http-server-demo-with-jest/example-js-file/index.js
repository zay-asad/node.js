const englishCode = "en-US";
const italianCode = "it-IT";
function getAboutUsPage(language) {
    switch (language.toLowerCase()) {
        case englishCode.toLowerCase():
            return '/about-us';
        case italianCode.toLowerCase():
            return '/chi-siamo';
    }
    return '';
}
module.exports = getAboutUsPage;