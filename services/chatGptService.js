// services/chatGptService.js

const axios = require('axios');
const { generateLetterPrompt, promptMessage } = require('./prompts');

const generateMessage = async (name, falecido, parentesco, tipomorte, tempomorte) => {
    // Gera o prompt para a API usando os dados fornecidos
    const prompt = generateLetterPrompt(name, falecido, parentesco, tipomorte, tempomorte);
    const message = promptMessage();

    console.log('Enviando prompt para a API do ChatGPT...');

    try {
        const response = await axios.post('https://api.openai.com/v1/chat/completions', {
            model: 'gpt-4o-mini', // Certifique-se de que o modelo está correto
            
            messages: [
                { role: "system", content: message },
                { role: 'user', content: prompt }],
        }, {
            headers: {
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`, // Verifique se a chave API está correta
                'Content-Type': 'application/json',
            },
        });

        console.log('Resposta recebida da API do ChatGPT.');
        let generatedMessage = response.data.choices[0].message.content;
        console.log('Mensagem gerada com sucesso!');
        return generatedMessage.trim();
    } catch (error) {
        console.error('Erro ao se comunicar com a API do ChatGPT:', error);
        throw error; // Propaga o erro para o controlador lidar com ele
    }
};

module.exports = { generateMessage };
