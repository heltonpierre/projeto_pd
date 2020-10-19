/* funcao_3.js
 * Transcritor de texto em comandos
 * Outubro 2020
 */

msg.payload = {
   chatId : msg.payload.chatId,
   type : "message",
   content : getComando(msg.payload.content)
};

return msg

function getComando(mensagem) {
   mensagem = mensagem.toLowerCase()
   let re_on = /ligar|ativar|acender/
   let re_off = /desligar|desativar|apagar/
   if (mensagem.match(re_off)) {
      console.log('comando desligar')
      return getDispositivo(mensagem, 'off')
   } else if (mensagem.match(re_on)) {
      console.log('comando ligar')
      return getDispositivo(mensagem, 'on')
   } else {
      return 'Comando não encontrado!';
   }

}

function getDispositivo(comando, status) {
   let re_ilumicao = /luz|lâmpada|lampada|iluminação|iluminacao/
   let re_ar = /condicionado|condicionador|condicionamento|split/
   console.log('função dispositivos')
   if (comando.match(re_ilumicao)) {
      console.log('comando iluminação')
      //return 'luz_' + status
      return getLocal(comando, status)
   } else if (comando.match(re_ar)) {
      console.log('comando ar condicionado')
      return 'ar_' + status
   } else {
      console.log('Dispositivo inválido!')
      return 'Dispositivo inválido!'
   }
}

function getLocal(comando_2, status_2) {
   //let re_local = /quarto|sala|cozinha|banheiro/
   if (comando_2.includes('quarto')) {
      console.log('local quarto')
      return 'luz_' + status_2 + '_qtr'
   } else if (comando_2.includes('sala')) {
      console.log('local sala')
      return 'luz_' + status_2 + '_sala'
   } else if (comando_2.includes('cozinha')) {
      console.log('local cozinha')
      return 'luz_' + status_2 + '_czn'   
   } else {
      console.log('Local inválido!')
      return 'Dispositivo inválido!'
   }
}

console.log(getComando('ativar o ar condicionado'))
console.log(getComando('desligar o split'))
console.log(getComando('ligar a lâmpada'))
console.log(getComando('apagar a luz'))
console.log(getComando('ligar para luz do quarto'))
console.log(getComando('apagar para lâmpada da cozinha'))

