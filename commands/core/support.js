// Copyright (©) 2020 Azura Apple. All rights reserved. MIT License.

const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const { SUPPORT_CHANNEL } = process.env;

module.exports = class SupportCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'support',
            aliases: ['bug', 'bother', 'contact', 'suggest'],
            group: 'core',
            memberName: 'support',
            guildOnly: true,
            description: 'Sends a support message to Anibot\'s main server!',
            examples: ['~support [bugs, issues, etc]'],
            details: 'Anibot might reply back in the channel you asked for support in!',
            throttling: {
                usages: 1,
                duration: 30
            },
            args: [{
                key: 'support',
                prompt: 'Please provide me a message to send to the backend!',
                type: 'string',
                default: 'N////A'
            }]
        });
    }

    async run(message, args) {
        var { support } = args;
        console.log(support)
        var channel = this.client.channels.get(SUPPORT_CHANNEL);

        if (support == 'N////A') {
            message.react("💢");
            return message.channel.send(`Please add an issue to your message!`);
        } else {

            try {
                const embed = new MessageEmbed()
                    .setAuthor(`${message.member.user.tag}`, message.member.user.displayAvatarURL({ format: 'png' }))
                    .setColor('#48886')
                    .setTimestamp()
                    .setFooter(`Channel ID: ${message.channel.id}`)
                    .addField(message.guild.name + ', ' + message.channel.name, support);
                channel.send({ embed });

                await message.react("🇸").catch(console.error);
                await message.react("🇪").catch(console.error);
                await message.react("🇳").catch(console.error);
                await message.react("🇹").catch(console.error);

                return null;

            } catch (err) {
                return message.channel.send(`❎ | **An error occurred while running this command!** \`${err.name}: ${err.message}\``);
            }
        }
    }
}