# Dofus API Wrapper

A powerful Node.js module to interact with the [Dofus](https://dofus.com) API in TypeScript. It provides methods to fetch data like items, monsters, sets, and spells from the Dofus database, with robust error handling and logging.

## Features

- Fetch data about items, monsters, sets, and spells.
- Support for multiple languages (e.g., English, French).
- Robust error handling with detailed logging.
- Extendable design for integration with other applications like Discord bots.
- TypeScript support for better type safety and maintainability.
---
## Installation

To install the module, use `npm`.

```bash
npm install dofus-api-wrapper
```
---
## Configuration

Create a `.env` file to configure the base URL of the API.

```bash
API_BASE_URL=https://api.dofusdb.fr
```
---

## Usage
#### Setup
To start using the wrapper, import the `DofusService` class and instantiate it:

```ts
import { DofusService } from 'dofus-api-wrapper';

const dofusService = new DofusService(); // Defaults to the API_BASE_URL from the .env file
```
#### Fetching items

```ts
const items = await dofusService.fetchItems('en'); // Fetches items in English
console.log(items.slice(0, 5)); // Prints the first 5 items
```
#### Fetching monsters

```ts
const monsters = await dofusService.fetchMonsters('fr'); // Fetches monsters in French
console.log(monsters.slice(0, 5)); // Prints the first 5 monsters
```

#### Fetching sets

```ts
const sets = await dofusService.fetchSets('en'); // Fetches sets in English
console.log(sets.slice(0, 5)); // Prints the first 5 sets
```

#### Fetching spells

```ts
const spells = await dofusService.fetchSpells('fr'); // Fetches spells in French
console.log(spells.slice(0, 5)); // Prints the first 5 spells
```

Javascript integration
```js
const { DofusService } = require('dofus-api-wrapper');

const dofusService = new DofusService();

async function main() {
  try {
    console.log('Fetching items...');
    const items = await dofusService.fetchItems('fr');
    console.log('First 5 items:', items.slice(0, 5));

    console.log('\nFetching monsters...');
    const monsters = await dofusService.fetchMonsters('fr');
    console.log('First 5 monsters:', monsters.slice(0, 5));

    console.log('\nFetching sets...');
    const sets = await dofusService.fetchSets('fr');
    console.log('First 5 sets:', sets.slice(0, 5));

    console.log('\nFetching spells...');
    const spells = await dofusService.fetchSpells('fr');
    console.log('First 5 spells:', spells.slice(0, 5));
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

main();
```

#### Error logging

In case of errors, detailed logs will be saved to a file named `dofusdb.log` in the logs directory. You can inspect this file for debugging purposes.

---

## Discord Bot Integration

The wrapper can be easily integrated into a Discord bot. Below is a sample implementation using [discord.js](https://discord.js.org/).

#### Bot Setup

Install the necessary packages:
```bash
npm install discord.js dotenv dofusdb-ts-wrapper
```

Create a .env file for your Discord bot token and the Dofus API base URL:
```dotenv
DISCORD_TOKEN=your-discord-bot-token
API_BASE_URL=https://api.dofusdb.fr
```

Implement the bot
```ts
import { Client, GatewayIntentBits } from 'discord.js';
import { DofusService } from 'dofus-api-wrapper';
import dotenv from 'dotenv';

dotenv.config();

const dofusService = new DofusService();
const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
});

client.on('ready', () => {
  console.log(`Bot logged in as ${client.user?.tag}`);
});

client.on('messageCreate', async (message) => {
  if (message.author.bot) return;

  if (message.content.startsWith('!items')) {
    const items = await dofusService.fetchItems('en');
    if (items.length > 0) {
      const itemNames = items.slice(0, 5).map((item) => item.name?.en || 'Unknown').join('\n');
      message.channel.send(`Here are the first 5 items:\n${itemNames}`);
    } else {
      message.channel.send('Could not fetch items. Please try again later.');
    }
  }

  if (message.content.startsWith('!monsters')) {
    const monsters = await dofusService.fetchMonsters('en');
    if (monsters.length > 0) {
      const monsterNames = monsters.slice(0, 5).map((monster) => monster.name?.en || 'Unknown').join('\n');
      message.channel.send(`Here are the first 5 monsters:\n${monsterNames}`);
    } else {
      message.channel.send('Could not fetch monsters. Please try again later.');
    }
  }

  if (message.content.startsWith('!sets')) {
    const sets = await dofusService.fetchSets('en');
    if (sets.length > 0) {
      const setNames = sets.slice(0, 5).map((set) => set.name?.en || 'Unknown').join('\n');
      message.channel.send(`Here are the first 5 sets:\n${setNames}`);
    } else {
      message.channel.send('Could not fetch sets. Please try again later.');
    }
  }

  if (message.content.startsWith('!spells')) {
    const spells = await dofusService.fetchSpells('en');
    if (spells.length > 0) {
      const spellNames = spells.slice(0, 5).map((spell) => spell.name?.en || 'Unknown').join('\n');
      message.channel.send(`Here are the first 5 spells:\n${spellNames}`);
    } else {
      message.channel.send('Could not fetch spells. Please try again later.');
    }
  }
});

client.login(process.env.DISCORD_TOKEN);
```

Compile and run the bot
```bash
tsc
node dist/bot.js
```

## Roadmap

- Roadmap
- Add search functionality for specific items, monsters, sets, or spells.
- Improve logging with configurable log levels (INFO, WARN, ERROR).
- Extend Discord bot commands to allow dynamic queries (e.g., !item <name>).
- Add unit and integration tests for robustness.
