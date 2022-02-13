import app from './app'
require('dotenv').config();

const PORT:number = Number(process.env.PORT) || 3000


require('./service/seqConn')

app.listen(PORT ,()=>{
try {
    console.log('Connected to ' , PORT)
} catch (error) {
    console.log('Connection to server failed')
}
})