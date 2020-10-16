
/* funcao_1.js
 * Gerando o payload para o Speech to Text
 * Outubro 2020
 */

msg.chatId = msg.payload.chatId;
msg.model = "pt-BR_BroadbandModel";
msg.payload = msg.payload.weblink;
return msg;