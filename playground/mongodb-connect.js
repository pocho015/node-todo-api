const MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB Server')
  }
  console.log('Connected to MongoDB Server')

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if(err) {
  //     return console.log('Unable to inster todo', err)
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2))
  // })


  db.collection('Users').insertOne({
    name: 'Pocho',
    age: 25,
    locarion: 'Bogota'
  }, (err, result) => {
    if(err) {
      return console.log('Unable to inster user', err)
    }
    console.log(JSON.stringify(result.ops, undefined, 2))
  })

  db.close()
})
