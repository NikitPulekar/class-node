export const Inventory = {
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
}
