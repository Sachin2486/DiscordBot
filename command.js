const {Rest , Routes} = require("discord.js");

const commands = [
    {
        name: "create",
        description: "Creates a new short URL",
    },
];

const rest = new Rest({version:"10"}).setToken(TOKEN);

(async () => {
    try {
        console.log("Started Refreshing application (/) commmands.");

        await rest.put(Routes.applicationCommands(CLIENT_ID), {body: commands})

        console.log("Successfully reloaded application (/) commands.");
    } catch (error) {
        console.error(error);
    }
}) ();