import express from 'express'
import graphqlHTTP from 'express-graphql'
import schema from './schema'

const app = express()

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

app.get('/',(req,res) => {
  res.send('<h1>hello,yyh123!!</h1>')
})

app.listen(3000,() => {
  console.log('app is running no 3000 port');
})
