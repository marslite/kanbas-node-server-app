// console.log("Hello World!");

// app.get('/hello', (req,res) => {res.send('Life is good!')});
// app.get('/helen', (req,res) => {res.send('You owe me 50$!')});
// app.get('/', (req,res) => {res.send('Welcome to FullStack Development!')});

const Hello = (app) => {
    app.get('/hello', (req,res) => {
        res.send('Life is good!');
    })



    app.get('/helen', (req,res) => {
        res.send("You owe me 50$");
    })

    app.get('/', (req,res) => {
        res.send("Welcome to Full Stack Develepoment!")
    })


}

export default Hello;