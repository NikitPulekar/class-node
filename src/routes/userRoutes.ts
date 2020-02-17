var R: any;


module.exports.init = (runtime) => {
    R = runtime
}

module.exports.include = (app) => {

    R.requestSchemas['post']['/apis/joker'] = {
        // body: 
    }

    app.post('/apis/joker', async (req: any, res: any) => {
        return res.json({
            Key: 'hooray'
        })
    })
}