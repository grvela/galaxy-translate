const axios = require('axios').default;

// TODO RATELIMIT ERROR 429

const translateToGalaxy = async(data, language) => {
    const {translatedText} = data;

    const response = await axios
    .post('https://api.funtranslations.com/translate/' + language, {
        text: translatedText
    });

    return response.data;
    
}

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

const translate = async(data, language) => {
    const messageEnglish = await translateToEnglish(data);
    const messageGalaxy = await translateToGalaxy(messageEnglish, language);
    console.log(messageGalaxy);
}

// translate();


// const translateToPortuguese = async(data) => {
    //     const {translated} = data;
        
    //     const response = await axios
    //     .post('https://libretranslate.com/translate', {
    //         q: q,
    //         source: "en",
    //         target: "pt"
    //     });
    
    //     return response.data;
    
    // }
    