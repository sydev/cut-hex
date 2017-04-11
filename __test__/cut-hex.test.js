(() => {
  'use strict';

  const cut_hex = require('../cut-hex');

  describe('cut hex', () => {

    test('#fff => fff', () => {
      return cut_hex('#fff')
        .then(hex => expect(hex).toEqual('fff'))
        .catch(err => expect(err).toBeNull());
    });

    test('#ffffff', () => {
      return cut_hex('#ffffff')
        .then(hex => expect(hex).toEqual('ffffff'))
        .catch(err => expect(err).toBeNull());
    });

    test('fff', () => {
      return cut_hex('fff')
        .then(hex => expect(hex).toEqual('fff'))
        .catch(err => expect(err).toBeNull());
    });

    test('ffffff', () => {
      return cut_hex('ffffff')
        .then(hex => expect(hex).toEqual('ffffff'))
        .catch(err => expect(err).toBeNull());
    });
  
  });

  describe('not a string', () => {

    test('["fff"]', () => {
      return cut_hex(['fff'])
        .catch(err => expect(err).toEqual(new Error('Given color code is not a string.')));
    });

    test('{"hex-code": "fff"}', () => {
      return cut_hex({'hex-code': 'fff'})
        .catch(err => expect(err).toEqual(new Error('Given color code is not a string.')));
    });

    test('100 (number)', () => {
      return cut_hex(100)
        .catch(err => expect(err).toEqual(new Error('Given color code is not a string.')));
    });

    test('null', () => {
      return cut_hex(null)
        .catch(err => expect(err).toEqual(new Error('Given color code is not a string.')));
    });

    test('true', () => {
      return cut_hex(true)
        .catch(err => expect(err).toEqual(new Error('Given color code is not a string.')));
    });

  });

  describe('with callback', () => {

    test('#fff', done => {
      cut_hex('#fff', (err, hex) => {
        expect(err).toBeNull();
        expect(hex).toEqual('fff');
        done();
      });
    });

    test('fff', done => {
      cut_hex('fff', (err, hex) => {
        expect(err).toBeNull();
        expect(hex).toEqual('fff');
        done();
      });
    });

    test('not a string (["ff"])', done => {
      cut_hex(['ff'], (err, hex) => {
        expect(err).toEqual(new Error('Given color code is not a string.'));
        expect(hex).toBeNull();
        done();
      });
    });

  });

})();
