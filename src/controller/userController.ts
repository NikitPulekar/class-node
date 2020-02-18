let dataBase = require('../Master');
import bcrypt from "bcrypt";
dataBase = dataBase.models
var R: any;

const init = (runtime) => {
    R = runtime
}

let userDetails = async (req: any, res: any) => {
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashed;
    let user = new dataBase.User(req.body)
    user.save();
    return req.body
}

let login = async (req: any, res: any) => {
    try {
        let ifExist = await dataBase.User.findOne({ email: req.body.email });
        console.log("this>>>>>>: login -> ifExist", ifExist)

        if (!ifExist) return { msg: "account does not Exist" }
        // const validPass = 

    } catch (error) {
        throw error;

    }
    return req.body
}

module.exports = {
    init,
    userDetails,
    login
}