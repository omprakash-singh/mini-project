const mogoose = require('mongoose');
const app = require('./server')

const DB = "mongodb+srv://mini-project:turh9Iefu1CqDsfR@cluster0.flzb65k.mongodb.net/mini-project-4th-sem";

mogoose.connect(DB, {
     useCreateIndex: true,
     useFindAndModify: true,
     useUnifiedTopology: true,
     useNewUrlParser: true
}).then(() => {
     console.log("Database connect Sucessfully...");
}).catch((err) => {
     console.log("Something is error in database..");
     console.log(err);
})

app.listen(9000, () => {
     console.log('server run at port 9000')
});