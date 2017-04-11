(() => {
  'use strict';

  /**
   * cut_hex
   * 
   * Removes the trailing '#' from the hex color code.
   * If a callback function is given as second parameter, it will be called. Else a promise is resolved/rejected. 
   * 
   * @param {String} hex_color_code A valid hex color code. (required)
   * @param {Function} cb A callback function. (optional)
   */
  module.exports = (hex_color_code, cb = null) => {
    let err = null;

    if (typeof hex_color_code !== 'string') err = new Error('Given color code is not a string.');

    if (err !== null) {
      if (cb !== null) return cb(err, null);
      return Promise.reject(err);
    }

    hex_color_code = (hex_color_code.charAt(0) === '#') ? hex_color_code.substring(1) : hex_color_code;

    return (cb !== null) ? cb(err, hex_color_code) : Promise.resolve(hex_color_code);
  };


})();
