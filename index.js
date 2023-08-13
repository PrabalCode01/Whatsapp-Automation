const { Client,LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');





const client = new Client({authStrategy:new LocalAuth()});

client.on('qr', (qr) => {
    //console.log('QR RECEIVED', qr);
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
    client.getChats().then((chats)=>{
        const myGroup= chats.find((chat)=> chat.name === 'Shivam Varshney Manit');
         
      for(var i=0; i<250; i++){  
        setTimeout(() => {
            
        client.sendMessage(myGroup.id._serialized,"okay bhai ")
        },0);
    }
    })
    // client.on('message', message => {
    //     if(message.body === 'kya kar rha') {
    //         message.reply('codding');
    //     }
    // });
     
});

// client.on('message',(message)=>{
//     if(message.body.includes('cat')){
//         return message.getChat().then(chat => chat.sendMessage('hello'))
//     }
// })

 

client.initialize();