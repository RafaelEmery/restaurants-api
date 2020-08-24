module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: '1234',
    database: 'restaurants-db',
    define: {
        timestamp: true,
        underscored: true,
    },
}