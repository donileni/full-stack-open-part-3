require('dotenv').config()
const Person = require('./models/person')
const express = require('express')
const morgan = require('morgan')
const app = express()

app.use(express.json())

morgan.token("tokenData", (req, res) => {
  return JSON.stringify(req.body);
});

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  } 

  next(error)
}

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :tokenData'))

const cors = require('cors')

app.use(cors())
app.use(express.static('dist'))

app.get('/api/persons', (request, response) => {
  Person.find({}).then(persons => {
    response.json(persons)
  })
})

app.get('/info', (request, response) => {
    const entriesText = `Phonebook has info for ${persons.length} people`
    const now = new Date().toString()
    const combinedText = `<p>${entriesText}</p><p>${now}</p>`

    response.send(combinedText)
})

app.get('/api/persons/:id', (request, response, next) => {
    Person.find({ id: request.params.id }).then(person => {
      if (person.length === 0) {
        response.status(404).end()
      }
      else {
        response.json(person)
      }
    })
    .catch(error => next(error))
})

app.delete('/api/persons/:id', (request, response) => {
    Person.findOneAndDelete({id: request.params.id}).then(result => {
      response.status(204).end()
    })
    .catch(error => next(error))
})

const generateId = () => {
  return Math.floor(Math.random() * 1000)
}

app.post('/api/persons/', (request, response) => {
  const body = request.body

  if (!body.name || !body.number) {
    return response.status(400).json({
      error: "name or number missing"
    })
  }

  const id = generateId()

  const person = new Person({
    "id": id,
    "name": body.name,
    "number": body.number,
  }) 
    
  person.save().then(savedPerson => {
    response.json(savedPerson)
  })
})

app.use(errorHandler)

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})