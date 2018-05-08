const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
    client.user.setPresence({ game: { name: 'cookies', type: 0 } });
    console.log('I am ready!');
});
var prefix = '&';
client.on('message', message => {
    var args = message.content.substring(prefix.length).split(" ");
    if(!message.content.startsWith(prefix)) return;
    switch(args[0].toLowerCase()) {
        case "ping":
        message.reply('PONG!');
        break;
        case "bing":
        message.reply('BONG!');
        break;
        case "play":
        var gamestr = args.join(" ").replace("play ", "")
        if(message.author.id=="378998523028307973" || message.author.id=="353271087758573578") {
            client.user.setPresence({ game: { name: gamestr, type: 0 } });
            message.reply("The game was set to " + gamestr);
        }
        else {
            message.reply("Access deniied.");
        }
        break;
        case "how are you":
        message.reply('Nice!');
        break;
        case "cookie":
        message.reply('COOOOOKIESS!!!!');
        break;
        case "8ball":
        var responses = [
        'Agreed!',
        'Of Course!',
        'Disagree.',
        'No',
        'Maybe',
        'Really?',
        'Cannot predict now.',
        'Dont decided on this!'
        ];
        var fetched = responses[Math.floor(Math.random() * responses.length)];
        var embed = new Discord.RichEmbed()
            .setColor(0x00FFFF)
            .setFooter(fetched);
        message.channel.send({embed});
        break;
        case "avatar":
        var embed = new Discord.RichEmbed()
            .setAuthor('CookieYep', client.user.avatarURL)
            .setTitle('The cookie steals avatars')
            .setDescription('[Avatar Link](' + message.author.avatarURL + ')')
            .setImage(message.author.avatarURL)
            .setColor("0x00FFFF");
            message.channel.send({embed});
        break;
        case "help":
            switch(args[1]) {
                case "avatar":
                message.channel.send('Displays your pfp.');
                break;
                default:
                message.channel.send('**All comands**: &cookie, &bing, &ping, &avatar, 8ball');
                break;
            }
            break;
        default:
        break;
    }
});
client.login(process.argv[2]);
