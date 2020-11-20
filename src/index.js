import express from 'express';
import server from './server'


const app = express()

const PORT =8080

server.applyMiddleware({ app });

app.listen({ port: PORT }, () =>
  console.log(`🚀 Server ready at http://localhost:8080${server.graphqlPath}`)
)