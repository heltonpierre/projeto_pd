/* funcao_4.js
 * Gerando o payload de log para ser enviado como resposta no telegram.
 * Outubro 2020
 */

msg.payload = {
    chatId: msg.payload.chatId,
    type: "message",
    content: getSender(msg.payload.content)
};

return msg

function getSender(log) {
    switch (log) {
        case 'ar_on':
            return 'Telegram_iot: O ar condicionado foi ligado.'
        case 'ar_off':
            return 'Telegram_iot: O ar condicionado foi desligado.'
        case 'luz_on_qtr':
            return 'Telegram_iot: A lâmpada do quarto foi acesa.'
        case 'luz_off_qtr':
            return 'Telegram_iot: A lâmpada do quarto foi apagada.'
        case 'luz_on_sala':
            return 'Telegram_iot: A lâmpada da sala foi acesa.'
        case 'luz_off_sala':
            return 'Telegram_iot: A lâmpada da sala foi apagada.'
        case 'luz_on_czn':
            return 'Telegram_iot: A lâmpada da cozinha foi acesa.'
        case 'luz_off_czn':
            return 'Telegram_iot: A lâmpada da cozinha foi apagada.'
    }
    return "Telegram_iot: Comando inválido!"
}