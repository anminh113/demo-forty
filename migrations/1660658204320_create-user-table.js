exports.shorthands = undefined;

exports.up = pgm => {pgm.createTable('users', {
    id: 'id',
    username: { type: 'varchar(1000)',  unique:true, notNull: true },
    password: { type: 'varchar(1000)', notNull: true },
    createdAt: {
      type: 'timestamp',
      notNull: true,
      default: pgm.func('current_timestamp'),
    },
    updatedAt: {
      type: 'timestamp',
      notNull: true,
      default: pgm.func('current_timestamp'),
    },
  })};

exports.down = pgm => {};
