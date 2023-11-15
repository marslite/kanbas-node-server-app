const Lab5 = (app) => {


    const assignment = {
        id:1,
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10",
        score: 0,
        completed: false,
    }

    const todos = [
        {id: 1, title: "Task 1", completed: true, description: "description 1"},
        {id: 2, title: "Task 2", completed: false, description: "description 2"},
        {id: 3, title: "Task 3", completed: false, description: "description 3"},
        {id: 4, title: "Task 4", completed: true, description: "description 4"},
    ];
    
    // app.get("/a5/todos/:id")

    
    app.get("/a5/todos/", (req,res) => {
        const {completed} = req.query;
        if (completed !== undefined){
            const completedTodos = todos.filter(
                (t) => t.completed === completed
                );
                res.json(completedTodos);
                return;
            }
            res.json(todos)
        });
        
        app.post("/a5/todos", (req,res) => {
            const newTodo = {
                ...req.body, id: new Date().getTime(),
            };
            todos.push(newTodo);
            res.json(newTodo);
        })

    app.get("/a5/todos/create", (req,res) =>{
        const newTodo = {
            id: new Date().getTime,
            title: "New Task",            
        };
        todos.push(newTodo);
        res.json(todos);
    })

    app.get("/a5/todos/:id", (req,res) => {
        const {id} = req.params;
        const todo = todos.find((t) => t.id === parseInt(id));
        res.json(todo);
    })

    app.put("/a5/todos/:id", (req,res) => {
        const {id} = req.params;
        const todo = todos.find((t) => t.id === parseInt(id) );
        todo.title = req.body.title;
        todo.description = req.body.description;
        todo.due = req.body.due;
        todo.completed = req.body.completed;
        res.sendStatus(200);
    })

    app.get("/a5/todos/:id/title/:title", (req,res) =>{
        const {id, title} = req.params;
        const todo = todos.find((t) => t.id === parseInt(id));
        todo.title = title;
        res.json(todos);
    })

    //Extra credit "completed"
    app.get("/a5/todos/:id/completed/:completed", (req,res) => {
        // const {id, newComplete = new type(arguments);} = req.params;
        // const {newComplete} = req.query;
        const {id} = req.params;
        // const newCompleted = req.params.completed
        //Seems to be problems capturing req.paramas.completed inside a variable
        const todo = todos.find((t) => t.id === parseInt(id));
        if(todo){
            todo.completed = req.params.completed === 'true';
            console.log("check here", req.params.completed)
            console.log("then here", todo.completed)
        }else{
            res.status(404).send("This Todo does not exist yet")
        }

        res.json(todos)
    })

    app.get("/a5/todos/:id/description", (req,res) => {
        const {id} = req.params;
        const todo = todos.find( (t) => t.id === parseInt(id));
        res.json(todo);
    })

    //Extra credit "description"
    app.get("/a5/todos/:id/description/:description", (req,res) =>{
        const {id, newDescription} = req.params;
        // const {newDescription} = req.body;
        const todo = todos.find((t) => t.id === parseInt(id));
        todo.description = req.params.description;
        console.log("here now", req.params.description)
        res.json(todos);
    })

    app.delete("/a5/todos/:id", (req,res) => {
        const {id} = req.params;
        const todo = todos.find((t) => t.id === parseInt(id));
        if(!todo){
            res.status(404).json({message: `Unablde to delete with ID ${id}`})
            return;
        }
        todos.splice(todos.indexOf(todo), 1)
        res.sendStatus(200);
    })


    app.get("/a5/todos/:id/delete", (req,res) =>{
        const {id} = req.params;
        const todo = todos.find((t)=> t.id === parseInt(id));
        todos.splice(todos.indexOf(todo),1);
        res.json(todos)
    })




    app.get("/a5/assignment", (req,res) => {
            res.json(assignment)
        })

     app.get("/a5/assignment/title", (req,res) => {
            res.json(assignment.title)
        })
    //Added for test purposes
     app.get("/a5/assignment/description", (req,res) => {
            res.json(assignment.description);
        })

    app.get("/a5/assignment/score", (req,res) => {
        res.json(assignment.score);
    })

    app.get("/a5/assignment/completed", (req,res) => {
        res.json(assignment.completed);
    })

    
    app.get("/a5/assignment/title/:newTitle", (req,res) => {
        const {newTitle} = req.params;
        assignment.title = newTitle;
        res.json(assignment)
    })

    app.get("/a5/assignment/score/:newScore", (req,res) => {
        const {newScore} = req.params;
        assignment.score = newScore;
        res.json(assignment)
    })

    app.get("/a5/assignment/completed/:newCompleted", (req,res) =>{
        const {newCompleted} = req.params;
        assignment.completed = true;
        res.json(assignment)
    })



    app.get("/a5/welcome", (req,res) => {
        res.send("Welcome to Assignment 5");
    })

    // app.get("/a5/wlc", (req,res) => {
    //     res.send("Assignment4");
    // })

    app.get("/a5/add/:a/:b", (req,res) =>{
        const {a,b} = req.params;
        const sum = parseInt(a) + parseInt(b);
        res.send(sum.toString());
    })

    app.get("/a5/subtract/:a/:b", (req,res) =>{
        const {a,b} = req.params;
        const sum = parseInt(a) - parseInt(b);
        res.send(sum.toString());
    })

    app.get("/a5/calculator", (req,res) =>{
        const {a,b, operation} = req.query;
        let result = 0;
        switch(operation){
            case "add":
                result = parseInt(a) + parseInt(b);
                break;
            case "subtract":
                result = parseInt(a) - parseInt(b);
                break;
            default:
                result = "Invalid operation";
        }
        res.send(result.toString());
    });
}

export default Lab5;