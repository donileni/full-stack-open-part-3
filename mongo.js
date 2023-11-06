const mongoose = require('mongoose')

if (process.argv.length < 3 || process.argv.length === 4) {
    console.log('add password, name, and number')
    process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://ddon:${password}@cluster0.46wossf.mongodb.net/phonebookApp?retryWrites=true&w=majority`

mongoose.set('strictQuery', false)
mongoose.connect(url)

const personSchema = new mongoose.Schema({
    id: Number,
    name: String,
    number: String
})

const Person = mongoose.model('Person', personSchema)

if (process.argv.length === 3) {
    console.log('phonebook:')
    Person.find({}).then(result => {
        result.forEach(person => {
            console.log(`${person.name} ${person.number}`)
        })
        process.exit(1)
    })
}

if (process.argv.length === 5) {
    const generateId = () => {
        return Math.floor(Math.random() * 1000)
      }
    
    const person = new Person({
        id: generateId(),
        name: process.argv[3],
        number: process.argv[4]
    })
    
    person.save().then(result => {
        console.log(`added ${process.argv[3]} number ${process.argv[4]} to phonebook`)
        mongoose.connection.close()
    })
}
