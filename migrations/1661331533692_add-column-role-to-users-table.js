exports.shorthands = undefined;
var path = require("path");
var constant = require(path.join(__dirname, "../dist/util/constant.js"))
exports.up = (pgm) => {
    pgm.addColumns("users", {
        role: { type: "varchar(1000)", notNull: true, default: constant.default.USER_ROLE_NORMAL },
    }, { ifNotExists: true });

};

exports.down = (pgm) => { };
