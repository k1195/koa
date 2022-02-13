import * as Koa from 'koa'
import * as Router from 'koa-router'
import Customer from '../model/model'

const routerOpts: Router.IRouterOptions = {
    prefix: '/customer'
}

const router: Router = new Router(routerOpts)

router.get('/get' , async (ctx:Koa.Context)=>{
    
    try {
        const data = await Customer.findAll()
        ctx.response.body = {data}
        ctx.status = 200
    } 
    catch (error) {
        ctx.status = 500
        ctx.response.body = {error}
    }
    
})

router.post('/add' , async (ctx:Koa.Context)=>{
    
    try {
        const data = await Customer.create({
            firstName: ctx.request.body.firstName,
            lastName : ctx.request.body.lastName,
            Email    : ctx.request.body.email,
        })
        ctx.status = 200
      ctx.response.body = {data}
    } 
    catch (error) {
        ctx.status = 500
        ctx.response.body = {error}
    }
    
})


export default router;