
exports.shorthands = undefined;
var path = require("path");
var constant = require(path.join(__dirname, "../dist/util/constant.js"))
exports.up = pgm => {
    pgm.sql(`UPDATE users SET role = '${constant.default.USER_ROLE_ADMIN}' WHERE username = 'admin';`);
};

exports.down = pgm => {};
