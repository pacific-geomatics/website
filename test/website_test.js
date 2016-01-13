import request from 'supertest';
import app from '../app'


describe('GET /', () => {
  it('serves the root route', (done) => {
    request(app)
    .get('/')
    .expect(/Geographic data for better decisions/)
    .end(done);
  })
});

describe('GET /nmso', () => {
  it('serves the NMSO page with the NMSO number', (done) => {
    request(app)
    .get('/nmso')
    .expect(200, /E60SQ-12001/)
    .end(done);
  })
});

describe('GET /contact', () => {
  it('serves the contact page with a phone number', (done) => {
    request(app)
    .get('/contact')
    .expect(200, /604-372-3300/)
    .end(done);
  })
});

describe('GET /simulation', () => {
  it('serves the simulation page', (done) => {
    request(app)
    .get('/simulation')
    .expect(200, /Simulation/)
    .end(done);
  })
});

describe('GET /foo', () => {
  it('returns a 404 for unknown routes', (done) => {
    request(app)
    .get('/foo')
    .expect(404, /Not Found/)
    .end(done);
  })
});
