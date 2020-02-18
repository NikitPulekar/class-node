import mongoose,{ Schema } from "mongoose";
import bcrypt from "bcrypt";
import { jwt } from "jsonwebtoken";
const { environment } = require('../env');


var UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    countryCode: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})


UserSchema.methods.matchPassword = async function (enterePassword) {
    return await bcrypt.compare(enterePassword, this.password)
}

UserSchema.methods.getJWTToken = function () {
    return jwt.sign({ _id: this._id, firstName: this.firstName, roles: this.roles, expiryTime: new Date(new Date().setFullYear(new Date().getFullYear() + environment.expiryTime)) }, environment.TOKEN_KEY)
}

module.exports = mongoose.model('User', UserSchema);

// export const Models = [
//     {
//         modelName: 'User',
//         schema: {
//             name: {
//                 type: String,
//                 required: true
//             },
//             lastName: {
//                 type: String,
//                 required: true
//             },
//             email: {
//                 type: String,
//                 required: true
//             },
//             phoneNumber: {
//                 type: Number,
//                 required: true
//             },
//             countryCode: {
//                 type: String,
//                 required: true
//             },
//             passWord: {
//                 type: String,
//                 required: true
//             }
//         }
//     },
//     {
//         modelName: 'Inventory',
//         schema: {
//             name: {
//                 type: String,
//                 required: true
//             },
//             lastName: {
//                 type: String,
//                 required: true
//             },
//             email: {
//                 type: String,
//                 required: true
//             },
//             phoneNumber: {
//                 type: Number,
//                 required: true
//             },
//             countryCode: {
//                 type: String,
//                 required: true
//             },
//             passWord: {
//                 type: String,
//                 required: true
//             }
//         }
//     }

// ]

// export const User = {
//     modelName: 'User',
//     schema: {
//         name: {
//             type: String,
//             required: true
//         },
//         lastName: {
//             type: String,
//             required: true
//         },
//         email: {
//             type: String,
//             required: true
//         },
//         phoneNumber: {
//             type: Number,
//             required: true
//         },
//         countryCode: {
//             type: String,
//             required: true
//         },
//         passWord: {
//             type: String,
//             required: true
//         }
//     }
// }

// export const Inventory = {
//     modelName: 'Inventory',
//     schema: {
//         name: {
//             type: String,
//             required: true
//         },
//         lastName: {
//             type: String,
//             required: true
//         },
//         email: {
//             type: String,
//             required: true
//         },
//         phoneNumber: {
//             type: Number,
//             required: true
//         },
//         countryCode: {
//             type: String,
//             required: true
//         },
//         passWord: {
//             type: String,
//             required: true
//         }
//     }
// }

