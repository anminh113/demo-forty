exports.shorthands = undefined;
var bcrypt = require('bcryptjs');
var fs = require('fs');

var salt = bcrypt.genSaltSync(10);
var rawdata = fs.readFileSync( __dirname+'/../golden-data/users.json');
var users = JSON.parse(rawdata);

exports.up = pgm => {
    users.forEach(element => {
        let hash = bcrypt.hashSync(element.password, salt);
        pgm.sql(`INSERT INTO users (username, password) VALUES ('${element.username}', '${hash}');`);
    });
    
};

exports.down = pgm => {};