import { SlashCommandBuilder } from '@jc68124/discord-interactions-cf';

const cmd = new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Replies with Pong!');

cmd.setExecute(async (interaction, env) => {
    await interaction.reply({ content: 'Pong!'});
});


export default cmd;