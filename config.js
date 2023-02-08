require('dotenv').config()


const configs = {
    api: {
        nodeEnv: process.env.NODE_ENV,
        port: process.env.PORT,
        host: process.env.PORT
    },
    db: {
        development: {
            dialect: 'postgres',
            host: 'localhost',
            port: 5433,
            username: 'postgres',
            password: 'root',
            database: 'posts2',
            define: {
                timestamp: true,
                underscored: true,  
                underscoredAll: true
            }

        }
    }
}


module.exports = configs
