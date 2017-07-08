const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
	  console.log('I am ready!');
});

client.on('message', message => {
	if (message.channel.name == 'bot') {
		let args = message.content.split(' ');
		if (args[0] == 'sell') {
			let n = args[1];
			if (n) {
				let calc = (tx) => {
					let o = (n * tx);
					o += o * 0.0025;
					o += n * 0.0025;
					return 'SELL ' + o.toFixed(8) + "\n";
				}
				let s = "\n";
				s += "Sells orders avec un achat à " + n + ":\n";
				s += '+5% : ' + calc(1.05, n);
				s += '+3% : ' + calc(1.03, n);
				s += '+0% : ' + calc(1, n);
				s += '-1.5% : ' + calc(0.985, n);
				s += '-3% :' + calc(0.97, n);
				s += '(Commissions bittrex de 0.25% incluses)';
				message.reply(s);
			}
		}
	}
});

client.login('MzMyMjM0MTUyNTMzNTU3MjQ5.DEKrvw.EsS0TpNYM7akaaELhLfhlA_U0BI');
