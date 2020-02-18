// import mongoose ,{Schema} from 'mongoose';
// import { requireTree } from "require-tree";
// // import { User } from "./model/User";

// const reqs = requireTree('./model', {
//     each: (e) => {
//         let Models = e.Models
//         // console.log(Models)
//         for (let data in Models) {
//             // console.log("this>>>>>>: data", Models[data])
//             const mod = new mongoose.Schema(Models[data].schema);
//             // console.log("this>>>>>>: mod", mod)

//             console.log("this>>>>>>: mongoose.model(Models[data].modelName, mod)", mongoose.model(Models[data].modelName, mod))
//             return module.exports = mongoose.model(Models[data].modelName, mod);
//         }
//     }
// })


const User = require("./model/UserModel");
// console.log("this>>>>>>: user", User)

export const models = {
    User
}