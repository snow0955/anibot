// Copyright (©) 2020 Azura Apple. All rights reserved. MIT License.

const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const moment = require('moment')

module.exports = class GarfieldCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'garfield',
            guildOnly: true,
            aliases: ['gar', 'comic'],
            group: 'fun',
            memberName: 'garfield',
            description: 'garfield',
            examples: ['garfield'],
            throttling: {
                usages: 1,
                duration: 3
            }
        });
    }

    run(message) {
        let year = random(1990, 2016);
        let day = random(0, 366);
        let date = moment().year(year).dayOfYear(day);
        let dateFormat = date.format('YYYY-MM-DD');
        let dateYear = date.year();

        const embed = new MessageEmbed()
            .setColor('#E16935')
            .setFooter(`Published in ${dateYear}`)
            .setDescription(`[Image URL](https://d1ejxu6vysztl5.cloudfront.net/comics/garfield/${dateYear}/${dateFormat}.gif)`)
            .setImage(`https://d1ejxu6vysztl5.cloudfront.net/comics/garfield/${dateYear}/${dateFormat}.gif`)
        message.channel.send({ embed })

    }
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}