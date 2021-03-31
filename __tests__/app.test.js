const request = require('supertest');
const app = require('../lib/app');

describe('app routes', () => {
  it('should return hi as plain text', async() => {
    const data = await request(app)
      .get('/');
    expect(data.text).toEqual('hi');
  });
  it('should return the request body as plain text', async() => {
    const response = await request(app)
      .post('/echo')
      .send('this text will echo back as a response from the server');
    expect(response.text).toEqual('this text will echo back as a response from the server');
  });
  it('should return HTML with h1 of red', async() => {
    const response = await request(app)
      .get('/red');

    expect(response.text).toEqual('<html><body><h1 style="color: red">/red</h1></body></html>');
  });
  it('should return HTML with h1 of red', async() => {
    const response = await request(app)
      .get('/green');

    expect(response.text).toEqual('<html><body><h1 style="color: green">/green</h1></body></html>');
  });
  it('should return HTML with h1 of red', async() => {
    const response = await request(app)
      .get('/blue');
    expect(response.text).toEqual('<html><body><h1 style="color: blue">/blue</h1></body></html>');
  });
});
