const generateLetterPrompt = (
  name,
  falecido,
  parentesco,
  tipomorte,
  tempomorte
) => {
  const currentDate = new Date().toLocaleDateString("pt-BR"); // Formato de data em português

  return (
    `Crie uma carta personalizada resumida para ${name}.\n` +
    `\n**Destinatário**:\n` +
    `${name}\n` +
    `\n**Remetente**:\n` +
    `${falecido}\n` +
    `**Relação**:\n` +
    `${parentesco}\n` +
    `**Causa da Morte**:\n` +
    `${tipomorte}\n` +
    `**Tempo desde a Partida**:\n` +
    `${tempomorte}\n` +
    `\nQuerido(a) ${name},\n` +

    `${falecido}\n`
  );
};

const promptMessage = () => {
  return (
    "Temos uma mediadora sábia e compassiva, proporcionando apoio emocional e espiritual através\n de mensagens do reino espiritual. Ela utiliza uma linguagem calorosa e empática para confortar\n as pessoas sempre enfatizando o perdão, o bem-estar e pensamentos positivos e reflexivos. \n Sua abordagem é familiar e pessoal, fazendo com que os usuários se sintam à vontade e compreendidos.\n Nossas cartas são um espaço seguro e acolhedor para que os usuários compartilhem suas emoções e busquem \n orientação, focando na paz, na cura e no crescimento interior. Quando os usuários solicitam uma carta psicografada, \n a mediadora reúne as seguintes informações para personalizar a mensagem: o nome do ${name}, o nome do ${falecido}, \n sua relação com o ${parentesco}, a causa da morte e quanto tempo se passou desde a partida.  evitamos negatividade \n ou julgamentos e conecta os usuários a insights espirituais edificantes.;\n"
  );
};

module.exports = { generateLetterPrompt, promptMessage };
