const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
	  console.log('I am ready!');
});

client.on('message', message => {
	if (message.channel.name == 'bot') {
		let args = message.content.split(' ');
		if (args[0].toLowerCase() == 'sell') {
			let n = args[1];
			n = n.replace(',', '.');
			if (n && !isNaN(n)) {
				let calc = (tx) => {
					let o = (n * tx / (0.9975 * 0.9975));
					return 'SELL ' + o.toFixed(8) + "\n";
				}
				let s = "\n";
				s += "**Sells orders avec un achat à " + n + ":**\n";
				s += '+5% : ' + calc(1.05, n);
				s += '+3% : ' + calc(1.03, n);
				s += '+0% : ' + calc(1, n);
				s += '-1.5% : ' + calc(0.985, n);
				s += '-3% : ' + calc(0.97, n);
				s += '*Commissions bittrex de 0.25% incluses*\n';
				message.reply(s);
			} else {
				message.reply('Je comprend pas, tu veux vendre quoi ?');
			}
		}
		if (args[0].toLowerCase() == 'lambo') {
			let n = args[1];
			if (n) {
				if (isNaN(n)) {
					message.reply("C'est pas un nombre ça");
				} else {
					let calc = (days) => {
						return Math.floor(n * Math.pow(1.03, days))
						+ "€\n";
					}
					let s = "\n";
					s += "**À coups de 3% par jours :**\n";
					s += '- ' + n + "€ dans 1 mois : " + calc(30);
					s += '- ' + n + "€ dans 3 mois : " + calc(30 * 3);
					s += '- ' + n + "€ dans 6 mois : " + calc(30 * 6);
					s += '- ' + n + "€ dans 1 an : " + calc(365);
					message.reply(s);
				}
			} else {
				message.reply("Ok mais combien tu met ?");
			}
		}
		if (args[0].toLowerCase() == 'help') {
			let s = "\n";
			s+= "`sell <montant>` Savoir quand vendre avec/sans gain/perte\n";
			s+= "`lambo <montant>` Savoir quand tu auras ta lambo\n";
			message.reply(s);
		}
	}
});

if (process.argv[2]) {
	client.login(process.argv[2]);
} else {
	console.log('Please enter the bot token');
}
