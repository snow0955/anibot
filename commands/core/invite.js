// Copyright (©) 2020 Azura Apple. All rights reserved. MIT License.

const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const { BOT_INVITE } = process.env;

module.exports = class InviteCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'invite',
            guildOnly: true,
            aliases: ['oauth', 'get', 'link', 'invlink'],
            group: 'core',
            memberName: 'invite',
            description: 'Gives you the invite link!',
            examples: ['~invite'],
            throttling: {
                usages: 1,
                duration: 3
            }
        });
    }

    run(message) {
        var phrases = [
            'Add me to your server with this link!',
            'I-It\'s not like I want to be invited to your server...',
            'Invite me Onee-chan!',
            'Hello... Please take me...',
            'I\'d love to be in your server!',
            'B-Baka! u///u I-I\'s not like I wanted to be in your server...',
            'Kyaaa~~ A server? Of course!',
            'P-Please invite me.. to your server...'
        ]

        var phrase = phrases[Math.round(Math.random() * (phrases.length - 1))];

        const embed = new MessageEmbed()
            .setColor('#727293')
            .setDescription(`[${phrase}](${BOT_INVITE})`);
        return message.channel.send({ embed });
    }
}