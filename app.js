const {Nuxt, Builder} = require('nuxt');
const express = require('express');
const app = express();

async function start() {
    let config = require('./nuxt.config.js');

    const nuxt = new Nuxt(config);
    const builder = new Builder(nuxt);

    await builder.build().catch((error) => {
        console.error(error);
        process.exit(1);
    })

    app.use(nuxt.render);
    app.listen(3000);
}

start();