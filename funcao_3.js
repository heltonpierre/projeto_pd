/* funcao_3.js
 * Transcritor de texto em comandos
 * Outubro 2020
 */

msg.payload = {
   chatId: msg.payload.chatId,
   type: "message",
   content: getComando(msg.payload.content)
};

return msg

function getComando(mensagem) {
   mensagem = mensagem.toLowerCase()
   let re_on = /ligar|ativar|acender/
   let re_off = /desligar|desativar|apagar/
   if (mensagem.match(re_off)) {
      return getDispositivo(mensagem, 'off')
   } else if (mensagem.match(re_on)) {
      return getDispositivo(mensagem, 'on')
   } else {
      return 'Comando não encontrado!';
   }

}

function getDispositivo(comando, status) {
   let re_ilumicao = /luz|lâmpada|lampada|iluminação|iluminacao/
   let re_ar = /condicionado|condicionador|condicionamento|split/
   if (comando.match(re_ilumicao)) {
      return getLocal(comando, status)
   } else if (comando.match(re_ar)) {
      return 'ar_' + status
   } else {
      return 'Dispositivo inválido!'
   }
}

function getLocal(comando_2, status_2) {
   if (comando_2.includes('quarto')) {
      return 'luz_' + status_2 + '_qtr'
   } else if (comando_2.includes('sala')) {
      return 'luz_' + status_2 + '_sala'
   } else if (comando_2.includes('cozinha')) {
      return 'luz_' + status_2 + '_czn'
   } else {
      return 'Dispositivo inválido!'
   }
}