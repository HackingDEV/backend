// controllers/letterController.js

const { generateMessage } = require('../services/chatGptService');
const generateLetter = async (req, res) => {
    const { name, falecido, parentesco, tipomorte, tempomorte } = req.body;

    console.log('Recebendo dados do formulário:');
    console.log(`Nome do Destinatário: ${name}`);
    console.log(`Nome do Falecido: ${falecido}`);
    console.log(`O que ele é seu: ${parentesco}`);
    console.log(`Causa da morte: ${tipomorte}`);
    console.log(`A quanto tempo: ${tempomorte}`);

    try {
        console.log('Gerando mensagem...');
        const message = await generateMessage( name, falecido, parentesco, tipomorte, tempomorte );
        console.log('Mensagem gerada com sucesso!');
        res.json( {message} );
    } catch (error) {
        console.error('Erro ao gerar a carta:', error);
        res.status(500).json({ error: 'Erro ao gerar a carta' });
    }
};


module.exports = { generateLetter };

