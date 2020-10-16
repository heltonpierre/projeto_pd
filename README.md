# projeto_pd
Título: Comandos de Texto e Voz via Mensageiro Telegram para Controle de Dispositivo de IoT

Descrição do Projeto:

Implementar uma modelagem no Node-Red que realize a integração do mensageiro Telegram para controle de dispositivos de IoT. Para os comandos de Voz será implementado um transcritor que receberá os arquivos de áudio enviados via Telegram e utilizando o IBM Watson converterá em comandos que possam ser executados nos dispositivos de IoT, como por exemplo: ligar ou desligar uma lâmpada, acionar uma fechadura ou aparelho doméstico.

Nós que serão implementados: 

Considerando que não existem nós disponíveis no Node-red que permita a integração do Telegram com o IBM Watson será implementado um nó com uma função para adequar a mensagem de voz ao formato compatível com o Speech to Text que realizar a conversão de áudio em texto. Também será desenvolvido um segundo nó para receber a mensagem de texto ou a saída do Speech to Text e converter em comando para ser executado nos dispositivos de IoT.


Requisitos:

node-red-contrib-telegrambot

node-red-node-watson