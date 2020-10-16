/* funcao_2.js
 * Gerando o payload a partir da saída do Speech to Text
 * Outubro 2020
 */

msg.payload = {
    chatId : msg.chatId,
    type : "message",
    content : msg.transcription
};
return msg;