module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'docker',
  database: 'gobarber',
  define: {
    timestamp: true,
    underscored: true,
    underscoredAll: true,
  },
};
