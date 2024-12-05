export default() => ({
    port: parseInt(process.env.API_PORT || '4000', 10),
    usersDatabase: {
        host: process.env.USERS_DB_HOST,
        user: process.env.USERS_DB_USER,
        password: process.env.USERS_DB_PASSWORD,
        databaseName: process.env.USERS_DB_NAME,
        port: process.env.USERS_DB_PORT
    }
})