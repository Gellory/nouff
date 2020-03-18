const Discord = require('discord.js')
const ytdl = require("ytdl-core");
const { Client, Util } = require('discord.js');
const getYoutubeID = require('get-youtube-id');
const fetchVideoInfo = require('youtube-info');
const YouTube = require('simple-youtube-api');
const moment = require("moment");  
const dateFormat = require('dateformat');
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const queue = new Map();
const client = new Discord.Client();
const prefix = 'L'




    client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setStatus("dnd");
    client.user.setActivity("SILENT ",{type: 'WATCHING'});
    
});
client.on('message', async message => { 
   const adminprefixs = "+"   
 if (!message.content.startsWith(adminprefixs)) return; 
 if(message.content.startsWith(adminprefixs + 'bc')) {
 if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
      let guilsk = client.users.get('471555985262116864', '582723225834881024')
      if(!guilsk) return message.channel.send(' ** ♔ |  lost angel powers only ** ');

     const args = message.content.split(" ").slice(1).join(" ")


let filter = m => m.author.id === message.author.id;
     
     let recembed = new Discord.RichEmbed()
     .setTitle(`${client.user.username}`)
     .setDescription(`
     -=-=-=-=-=-=-=-=-=-= **
     ➊ لأرسال برودكاست الى رول معين بدون امبيد
     
     ➋ لأرسال برودكاست الى رول معين مع امبيد
     
     ➌ لأرسال برودكاست لجميع الاعضاء مع امبيد
     
     ➍ لأرسال برودكاست لجميع الاعضاء بدون امبيد
     
     ➎ لأرسال برودكاست للمتواجدين اونلاين بدون امبيد
     
     ➏ لأرسال برودكاست للمتواجدين اونلاين مع امبيد
     
     ❌ لألغاء العملية بالكامل **
     -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
     `)
     
     message.channel.sendEmbed(recembed).then(msg => {
         msg.react('➊')
         .then(() => msg.react('➋'))
         .then(() => msg.react('➌'))
         .then(() =>  msg.react('➍'))
         .then(() => msg.react('➎'))
         .then(() => msg.react('➏'))
         .then(() => msg.react('❌'))
     
     
                 let embedmsgFilter = (reaction, user) => reaction.emoji.name === '📭' && user.id === message.author.id;
     
                 let normalmsgFilter = (reaction, user) => reaction.emoji.name === '📧' && user.id === message.author.id;
     
                 let cancelFilter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
     
                 let onlyroleFilter = (reaction, user) => reaction.emoji.name === '🎖' && user.id === message.author.id;8
     
                 let onlineonlyFilter = (reaction, user) => reaction.emoji.name === '🔵' && user.id === message.author.id;8
     
                 let embedonlineonlyFilter = (reaction, user) => reaction.emoji.name === '🔷' && user.id === message.author.id;8
     
                 let embedonlyroleFilter = (reaction, user) => reaction.emoji.name === '🏅' && user.id === message.author.id;8
     
                 let embedmsg = msg.createReactionCollector(embedmsgFilter, { time: 0 });
     
                 let normalmsg = msg.createReactionCollector(normalmsgFilter, { time: 0 });
         
                 let onlyrole = msg.createReactionCollector(onlyroleFilter, { time: 0 });
     
                 let embedonlyrole = msg.createReactionCollector(embedonlyroleFilter, { time: 0 });
     
                 let onlineonly = msg.createReactionCollector(onlineonlyFilter, { time: 0 });
                     
                 let embedonlineonly = msg.createReactionCollector(embedonlineonlyFilter, { time: 0 });
     
                 let cancel = msg.createReactionCollector(cancelFilter, { time: 0 });
     
     embedonlineonly.on('collect', r => {
     
        let msge;
        message.channel.send(':pencil: **| الرجاء كتابة الرسالة المراد ارسالها الأن :pencil2: **').then(msg => {
       
               message.channel.awaitMessages(filter, {
                 max: 1,
                 time: 90000,
                 errors: ['time']
               })
               .then(collected => {
                   collected.first().delete();
                   msge = collected.first().content;
                   msg.edit('✅ **| هل تريد ارسال منشن مع هذه الرسالة  ? نعم او لا **').then(msg => {
                     message.channel.awaitMessages(filter, {
                       max: 1,
                       time: 90000,
                       errors: ['time']
                     })
                     .then(collected => {
                       if(collected.first().content === 'نعم') {
       message.channel.send(`**:white_check_mark: جاري ارسال البرودكاست الان :loudspeaker:**`);
       
       
       message.guild.members.filter(m => m.presence.status === 'online').forEach(m => {
        var bc = new Discord.RichEmbed()
               .setColor('RANDOM')
               .setTitle(`:mega: New Broadcast`)
               .addField('🔰Server🔰', message.guild.name)
               .addField('🚩Sender🚩', message.author.username)
               .addField('📜Message📜', `${msge}`)
               .setThumbnail('https://a.top4top.net/p_1008gqyyd1.png')
               .setFooter(client.user.username, client.user.avatarURL);
               m.send(bc)
               m.send(`${m}`)
               
           })
       }})
       if(collected.first().content === 'لا') {
       message.channel.send(`**:white_check_mark: جاري ارسال البرودكاست للاعضاء :loudspeaker:**`);
       message.guild.members.filter(m => m.presence.status === 'online').forEach(m => {
        var bc = new Discord.RichEmbed()
               .setColor('RANDOM')
               .setTitle(`:mega: New Broadcast`)
               .addField('🔰Server🔰', message.guild.name)
               .addField('🚩Sender🚩', message.author.username)
               .addField('📜Message📜', `${msge}`)
               .setThumbnail('https://a.top4top.net/p_1008gqyyd1.png')
               .setFooter(client.user.username, client.user.avatarURL);
               m.send(bc)
               
           })
       }
                     
       })
                   })
               })
           })
     
           
     onlineonly.on('collect', r => {
        let msge;
        message.channel.send(':pencil: **| الرجاء كتابة الرسالة المراد ارسالها الأن :pencil2: **').then(msg => {
     
            message.channel.awaitMessages(filter, {
              max: 1,
              time: 90000,
              errors: ['time']
            })
            .then(collected => {
                collected.first().delete();
                msge = collected.first().content;
                msg.edit('✅ **| هل تريد ارسال منشن مع هذه الرسالة  ? نعم او لا **').then(msg => {
                  message.channel.awaitMessages(filter, {
                    max: 1,
                    time: 90000,
                    errors: ['time']
                  })
                  .then(collected => {
     
                    if(collected.first().content === 'نعم') {
    message.channel.send(`**:white_check_mark: The Message Has Been Sent The Members :loudspeaker:**`);
                   
     
    message.guild.members.filter(m => m.presence.status === 'online').forEach(m => {
        m.send(`${msge}`)
    m.send(`${m}`)      
           
        })
    }
    if(collected.first().content === 'لا') {
    message.channel.send(`**:white_check_mark: The Message Has Been Sent The Members :loudspeaker:**`);
    message.guild.members.filter(m => m.presence.status === 'online').forEach(m => {
        m.send(`${msge}`)
                   
        })}
    })
    })
            })
        })
    })
     
     embedmsg.on('collect', r => {
         let msge;
      message.channel.send(':pencil: **| الرجاء كتابة الرسالة المراد ارسالها الأن :pencil2: **').then(msg => {
     
             message.channel.awaitMessages(filter, {
               max: 1,
               time: 90000,
               errors: ['time']
             })
             .then(collected => {
                 collected.first().delete();
                 msge = collected.first().content;
                 msg.edit('✅ **| هل تريد ارسال منشن مع هذه الرسالة  ? نعم او لا **').then(msg => {
                   message.channel.awaitMessages(filter, {
                     max: 1,
                     time: 90000,
                     errors: ['time']
                   })
                   .then(collected => {
                     if(collected.first().content === 'نعم') {
     message.channel.send(`**:white_check_mark: The Message Has Been Sent The Members :loudspeaker:**`);
     
     
         message.guild.members.forEach(m => {
             var bc = new Discord.RichEmbed()
             .setColor('RANDOM')
             .setTitle(`:mega: New Broadcast`)
             .addField('🔰Server🔰', message.guild.name)
             .addField('🚩Sender🚩', message.author.username)
             .addField('📜Message📜', `${msge}`)
             .setThumbnail('https://a.top4top.net/p_1008gqyyd1.png')
             .setFooter(client.user.username, client.user.avatarURL);
             m.send(bc)
             m.send(`${m}`)
             
         })
     }})
     if(collected.first().content === 'لا') {
     message.channel.send(`**:white_check_mark: The Message Has Been Sent The Members :loudspeaker:**`);
         message.guild.members.forEach(m => {
             var bc = new Discord.RichEmbed()
             .setColor('RANDOM')
             .setTitle(`:mega: New Broadcast`)
             .addField('🔰Server🔰', message.guild.name)
             .addField('🚩Sender🚩', message.author.username)
             .addField('📜Message📜', `${msge}`)
             .setThumbnail('https://a.top4top.net/p_1008gqyyd1.png')
             .setFooter(client.user.username, client.user.avatarURL);
             m.send(bc)
             
         })
     }
                   
     })
                 })
             })
         })
     
     
       
     
     
     
     normalmsg.on('collect', r => {
         let msge;
         message.channel.send(':pencil: **| الرجاء كتابة الرسالة المراد ارسالها الأن :pencil2: **').then(msg => {
     
             message.channel.awaitMessages(filter, {
               max: 1,
               time: 90000,
               errors: ['time']
             })
             .then(collected => {
                 collected.first().delete();
                 msge = collected.first().content;
                 msg.edit('✅ **| هل تريد ارسال منشن مع الرسالة ؟ نعم او لا **').then(msg => {
                   message.channel.awaitMessages(filter, {
                     max: 1,
                     time: 90000,
                     errors: ['time']
                   })
                   .then(collected => {
     
                     if(collected.first().content === 'نعم') {
     message.channel.send(`**:white_check_mark: The Message Has Been Sent The Members :loudspeaker:**`);
                     
     
         message.guild.members.forEach(m => {
     m.send(`${msge}`)
     m.send(`${m}`)      
             
         })
     }
     if(collected.first().content === 'لا') {
     message.channel.send(`**:white_check_mark: The Message Has Been Sent The Members :loudspeaker:**`);
         message.guild.members.forEach(m => {
             m.send(`${msge}`)
                     
         })}
     })
     })
             })
         })
     })
     
     onlyrole.on('collect', r => {
         let msge;
         let role;
         message.channel.send(':pencil: **| الرجاء كتابة الرسالة المراد ارسالها الأن :pencil2: **').then(msg => {
     
             message.channel.awaitMessages(filter, {
               max: 1,
               time: 90000,
               errors: ['time']
             })
     
             .then(collected => {
                 collected.first().delete();
                 msge = collected.first().content;
                     msg.edit('✅ **| الأن الرجاء كتابة اسم الرول المراد ارسال الرسالة اليه**').then(msg => {
                     message.channel.awaitMessages(filter, {
                         max: 1,
                         time: 90000,
                         errors: ['time']
                       })
             
             .then(collected => {
                 collected.first().delete();
                 role = collected.first().content;
                     let rolecheak = message.guild.roles.find('name', `${role}`)
                 msg.edit('✅ **| هل تريد ارسال منشن مع هذه الرسالة  ? نعم او لا  **').then(msg => {
                   message.channel.awaitMessages(filter, {
                     max: 1,
                     time: 90000,
                     errors: ['time']
                   })
                   .then(collected => {
     
                     if(collected.first().content === 'نعم') {
     message.channel.send(`**:white_check_mark: The Message Has Been Sent The Members :loudspeaker:**`);
                     
     
                 message.guild.members.filter(m => m.roles.get(rolecheak.id)).forEach(m => {
     
     m.send(`${msge}`)
     m.send(`${m}`)      
             
         })
     }
     if(collected.first().content === 'لا') {
     message.channel.send(`**:white_check_mark: The Message Has Been Sent The Members :loudspeaker:**`);
             message.guild.members.filter(m => m.roles.get(rolecheak.id)).forEach(m => {
     
             m.send(`${msge}`)
                     
         })}
     })
     })
             })
         })
     })
     })
     });
     
     
     
     embedonlyrole.on('collect', r => {
         let msge;
         let role;
         message.channel.send(':pencil: **| الرجاء كتابة الرسالة المراد ارسالها الأن :pencil2: **').then(msg => {
     
             message.channel.awaitMessages(filter, {
               max: 1,
               time: 90000,
               errors: ['time']
             })
     
             .then(collected => {
                 collected.first().delete();
                 msge = collected.first().content;
                     msg.edit('✅ **| الان الرجاء كتابة اسم الرول المراد ارسال الرسالة اليه**').then(msg => {
                     message.channel.awaitMessages(filter, {
                         max: 1,
                         time: 90000,
                         errors: ['time']
                       })
             
             .then(collected => {
                 collected.first().delete();
                 role = collected.first().content;
                     let rolecheak = message.guild.roles.find('name', `${role}`)
                 msg.edit('✅ **| هل تريد ارسال منشن مع هذه الرسالة  ? نعم او لا **').then(msg => {
                   message.channel.awaitMessages(filter, {
                     max: 1,
                     time: 90000,
                     errors: ['time']
                   })
                   .then(collected => {
     
                     if(collected.first().content === 'نعم') {
     message.channel.send(`**:white_check_mark: The Message Has Been Sent The Members :loudspeaker:**`);
                     
     
                         message.guild.members.filter(m => m.roles.get(rolecheak.id)).forEach(m => {
                             var bc = new Discord.RichEmbed()
             .setColor('RANDOM')
             .setTitle(`:mega: New Broadcast`)
             .addField('🔰Server🔰', message.guild.name)
             .addField('🚩Sender🚩', message.author.username)
             .addField('📜Message📜', `${msge}`)
             .setThumbnail('https://a.top4top.net/p_1008gqyyd1.png')
             .setFooter(client.user.username, client.user.avatarURL);
             m.send(bc)
     m.send(`${m}`)      
             
         })
     }
     if(collected.first().content === 'لا') {
     message.channel.send(`**:white_check_mark: The Message Has Been Sent The Members :loudspeaker:**`);
     message.guild.members.filter(m => m.roles.get(rolecheak.id)).forEach(m => {
             var bc = new Discord.RichEmbed()
             .setColor('RANDOM')
             .setTitle(`:mega: New Broadcast`)
             .addField('🔰Server🔰', message.guild.name)
             .addField('🚩Sender🚩', message.author.username)
             .addField('📜Message📜', `${msge}`)
             .setThumbnail('https://a.top4top.net/p_1008gqyyd1.png')
             .setFooter(client.user.username, client.user.avatarURL);
             m.send(bc)
             
                     
         })}
     })
     })
             })
         })
     })
     })
     })
         cancel.on('collect', r => {
             let cancelembed = new Discord.RichEmbed()
             .setTitle('تم الغاء العملية :x:')
          message.channel.sendEmbed(cancelembed)
             embedmsg.stop();
             normalmsg.stop();
             onlyrole.stop();
             embedonlyrole.stop();
             embedonlineonly.stop()
             onlineonly.stop()
             cancel.stop();
         })
        })
      }
    });



	    

client.login(process.env.BOT_TOKEN);
