const net = require('net');
const parseRequest = require('./utils/parseRequest');
const createResponse = require('./utils/createResponse');

const app = net.createServer(socket => {
  socket.on('data', data => {
    const request = parseRequest(data.toString());

    if(request.path === '/' && request.method === 'GET') {
      socket.end(createResponse({ body: 'hi', status: '200 OK', contentType: 'text/plain' }));
    }
    else if(request.path === '/echo' && request.method === 'POST') {
      socket.end(createResponse({ body: request.body, status: '200 OK', contentType: 'text/plain' }));
    }
    else if(request.path === '/red' || request.path === '/blue' || request.path === '/green' && request.method === 'GET') {
      socket.end(createResponse({ body: `<html><body><h1 style="color: ${request.path.split('/')[1]}">${request.path}</h1></body></html>`, status: '200 OK', contentType: 'text/html' }));
    }
    // else if(request.path === '/blue' && request.method === 'GET') {
    //   socket.end(createResponse({ body: `<html><body><h1 style="color: ${request.path.split('/')[1]}">${request.path}</h1></body></html>`, status: '200 OK', contentType: 'text/html' }));
    // }
    // else if(request.path === '/green' && request.method === 'GET') {
    //   socket.end(createResponse({ body: `<html><body><h1 style="color: ${request.path.split('/')[1]}">${request.path}</h1></body></html>`, status: '200 OK', contentType: 'text/html' }));
    // }
    else {
      socket.end(createResponse({ body: 'Not Found', status: '404 Not Found', contentType: 'text/plain' }));
    }
  });
});

module.exports = app;
