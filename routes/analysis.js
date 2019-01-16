const router = require('koa-router')()
const bll = require('./../pub/bll/analysis.js')

router.prefix('/api/anlysis')

router.post('/get', async (ctx, next) => {
    let result = await bll.getAnalysisData(ctx)
    ctx.body = result;
})

module.exports = router