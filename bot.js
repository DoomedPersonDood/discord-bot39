const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', function() { 
    console.log('I am ready!');

    client.user.setGame("JavaScript..ing?");
});

client.on('message', message => {
    let messagecontent = message.content.toLowerCase();
    
    if (messagecontent === '!platform-commands') {
    	message.reply("Type '!PC-Player+' if your a PC player, '!XBox-Player+' if your a XBox player, '!PS4-Player+' if your a PS4 player, and '!Switch-Player+' if your a switch player. To remove your role type '!*platform*_Player-'");
    }
    
    if (messagecontent === '!pc-player+') {
            
             
        let Role = message.guild.roles.find("name", "PC");
        
        message.reply('hey this is newer');  
        if (!message.author.roles.find(Role)) {
            message.reply('there');
            message.author.addRole(Role);
        }

        


    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
