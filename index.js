'use strict';

require('@instana/collector')();

const pino = require('pino');

let logger;

if (process.env.MODE === 'transport') {
    const transport = pino.transport({ target: 'pino-pretty' });
    logger = pino(transport);
} else {
    const pretty = require('pino-pretty');
    logger = pino(pretty());
}

setInterval(() => {
    logger.info('some message' +  process.title);
    logger.info('some other message' + process.title);
}, 500);