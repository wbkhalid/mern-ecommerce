const bcrypt = require("bcrypt");


module.exports={

    encryptPassword: async (password)=>{
        const salt = await bcrypt.genSalt(10);
        return await bcrypt.hash(password,salt);

    },
    comparePassword: async (password,receivedPassword)=>{
        return await bcrypt.compare(password,receivedPassword);
    }

}