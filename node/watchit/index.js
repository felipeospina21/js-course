#!/usr/bin/env node

const debounce = require('lodash.debounce');
const chokidar = require('chokidar');
const program = require('caporal');
const fs = require('fs');
const { spawn } = require('child_process');

// currDir = process.cwd();

program.version('0.0.1').argument('[filename]', 'Name of the file to execute').action(async ({ filename }) => {
	const name = filename || 'index.js';
	try {
		await fs.promises.acces(name);
	} catch (err) {
		throw new Error(`Could not find the file ${name}`);
	}

	const start = debounce(() => {
		spawn('node', [ name ], { stdio: 'inherit' });
	}, 100);

	chokidar.watch(process.cwd()).on('add', start).on('change', start).on('unlink', start);
});

program.parse(process.argv);
