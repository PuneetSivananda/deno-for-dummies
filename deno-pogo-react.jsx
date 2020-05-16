import React from 'https://dev.jspm.io/react';
import pogo from 'https://deno.land/x/pogo/main.ts';
const server = pogo.server({ port : 3000 });
server.router.get('/', () => {
    return <h1>Hello, world!</h1>;
});
server.start();