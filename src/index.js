#!/usr/bin/env node
require('./storage/db');

// CONSTANTS
const {
  COMMANDS,
  COMMANDS_SHORT,
  COMMAND_NAMES,
  COMMANDS_CONFIG,
} = require('./constants/commands');

// COMMANDS
const { commit, commitOptions } = require('./commands/commit');
const branch = require('./commands/branch');

// OPTIONS
const config = require('./options/config');
const help = require('./options/help');

// ARGUMENTS
const [x, z, command, ...args] = process.argv;
const [ isOptionArg, commandOption, ...commandValue ] = args;

const commandName = COMMAND_NAMES[command];
const commandConfig = COMMANDS_CONFIG[commandName]
const isOption = isOptionArg === '-' && commandConfig.hasOptions === true;

const commandFunctions = {
  [COMMAND_NAMES[COMMANDS.COMMIT]]: commit,
  [COMMAND_NAMES[COMMANDS.BRANCH]]: branch,
  [COMMAND_NAMES[COMMANDS.CONFIG]]: config,
  [COMMAND_NAMES[COMMANDS.HELP]]: help,
};

const commandOptionsFunctions = {
  [COMMAND_NAMES[COMMANDS.COMMIT]]: commitOptions,
};

if (!isOption) {
  const commandFunction = commandFunctions[commandName] || help;
  commandFunction(args);
} else {
  const commandOptionFunctions = commandOptionsFunctions[commandName] || {};
  const commandOptionFunction = commandOptionFunctions[commandOption];
  if (commandOptionFunction) commandOptionFunction(commandValue);
  else help(commandName);
}
