exports.shorthands = undefined;
var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);

exports.up = pgm => {
    let hash = bcrypt.hashSync('123', salt);
    pgm.sql(`INSERT INTO users (username, password) VALUES ('user1', '${hash}');`)
};

exports.down = pgm => {};