const axios = require('axios').default;

// TODO RATELIMIT ERROR 429

const translateToEnglish = async(data) => {
    const {q} = data;

    const response = await axios
    .post('https://libretranslate.com/translate', {
        q: q,
        source: "pt",
        target: "en"
    });

    return response.data;
}


const translateToGalaxy = async(data, language) => {
    const {translatedText} = data;

    const response = await axios
    .post('https://api.funtranslations.com/translate/' + language, {
        text: translatedText
    });

    return response.data;
    
}
// TODO CHECK IF LANGUAGE NEED TRANSLATE TO PORTUGUESE

// const translateToPortuguese = async(data) => {
//         const {translated} = data;
        
//         const q = translated;

//         const response = await axios
//         .post('https://libretranslate.com/translate', {
//             q: q,
//             source: "en",
//             target: "pt"
//         });
    
//         return response.data;
// }

const translate = async(data, language) => {
    const messageEnglish = await translateToEnglish(data);
    const messageGalaxy = await translateToGalaxy(messageEnglish, language);
    const messagePortuguese = await translateToPortuguese(messageGalaxy);
    return messagePortuguese;
}


module.exports.translate = translate;
    