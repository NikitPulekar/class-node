var R: any;

module.exports.init = (runtime) => {
    R = runtime
}

module.exports.include = (app) => {

    R.requestSchemas['post']['/apis/create-account'] = {

    }

    app.post('/apis/joker', async (req: any, res: any) => {
        let data = {
            body: req.body
        }

        try {
            let response = await R.controller.userController.userDetails(data);
            return res.status(200).json(response);
        } catch (error) {
            console.log(error);
            throw error
        }
    })

    R.requestSchemas['post']['/apis/login'] = {

    }

    app.post('/apis/login', async (req: any, res: any) => {
        let data = {
            body: req.body
        }

        try {
            let response = await R.controller.userController.login(data);
            return res.status(200).json(response);
        } catch (error) {
            console.log(error);
            throw error
        }
    })
}