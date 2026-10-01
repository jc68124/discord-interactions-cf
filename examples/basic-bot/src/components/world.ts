import { SlashCommandComponentBuilder } from '@jc68124/discord-interactions-cf';

const component = new SlashCommandComponentBuilder()
    .setCustomId('world');

component.setExecute(async (interaction, env, data) => {
    await interaction.reply({
        content: `World! ${data ? data.join(', ') : ''}`,
    });
});

export default component;