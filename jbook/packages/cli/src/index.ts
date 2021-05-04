#!/usr/bin/env node
import { program } from 'commander';
import { serveCommand } from './commands/serve';

program.addCommand(serveCommand);

// jbook\packages\cli\dist> node index.js serve
program.parse(process.argv);
