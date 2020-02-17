// import mongoose,{ Schema } from "mongoose";
// var User = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     lastName: {
//         type: String,
//         required: true
//     },
//     email: {
//         type: String,
//         required: true
//     },
//     phoneNumber: {
//         type: Number,
//         required: true
//     },
//     countryCode: {
//         type: String,
//         required: true
//     },
//     passWord: {
//         type: String,
//         required: true
//     }
// })

export const Models = [
    {
        modelName: 'User',
        schema: {
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
            passWord: {
                type: String,
                required: true
            }
        }
    },
    {
        modelName: 'Inventory',
        schema: {
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
            passWord: {
                type: String,
                required: true
            }
        }
    }

]

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

