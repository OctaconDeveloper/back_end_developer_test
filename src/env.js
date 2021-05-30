require("dotenv").config();

const config = () => {
    return{
        APP_NAME:process.env.APP_NAME || "Back End Coding Test",
        APP_ENV:process.env.APP_ENV || "Development",
        PORT:process.env.PORT || 9090,
        API_VERSION: process.env.API_VERSION || "v1"
    }
    
}

module.exports = config
