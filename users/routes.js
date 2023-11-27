// import * as dao from "./dao.js";

// let currentUser = null;
// function UserRoutes(app){
//     const createUser = async (req,res) => {};
//     const deleteUser = async (req,res) => {};
//     const findAllUsers = async (req,res) => {
//         const users = await dao.findAllUsers();
//         res.json(users)
//     };
//     const findUserById = async (req,res) => {};
//     const updateUser = async (req,res) => {};
//     const signup = async (req,res) => {};
//     const signin = async (req,res) => {
//         const {username, password} = req.body;
//         currentUser = await dao.findUserByCredentials(username, password);
//         res.json(currentUser)
//     };
//     const signout =  (req,res) => {};
//     const account = async (req,res) => {};
//     app.post("/api/users", createUser);
//     app.get("/api/users", findAllUsers);
//     app.get("/api/users/:userId", findUserById);
//     app.get("/api/users/:userId", updateUser);
//     app.delete("/api/users/:userId", deleteUser);
//     app.post("/api/users/signup", signup);
//     app.post("/api/users/signin", signin);
//     app.post("/api/users/signout", signout);
//     app.post("/api/users/account", account);
// }

// export default UserRoutes;

import * as dao from "./dao.js";
let currentUser = null;
function UserRoutes(app) {
  const createUser = async (req, res) => { };
  const deleteUser = async (req, res) => { };
  const findAllUsers = async (req, res) => {
    // const {role} = role.query;
    // if(role){
    //     const users = await dao.findUsersByRole(role);
    //     res.json(users);
    //     return;
    // }
    const users = await dao.findAllUsers();
    res.json(users);
    return;
   };

  const findUserById = async (req, res) => { };
  const updateUser = async (req, res) => { };
  const signup = async (req, res) => { };
  const signin = async (req, res) => {
    const {username, password} = req.body;
    currentUser = await dao.findUserByCredentials(username,password);
    res.json(currentUser)


    // const {username, password} = req.body;
    // const user = await dao.findUserByCredentials(username,password);
    // if(user){
    //   const currentUser = user;
    //   req.session["currentUser"] = currentUser;
    //   res.json(user);
    // };
  }
    // try {
     
    //   }else{
    //     res.sendStatus(403);
    //   }

    //   currentUser = await dao.findUserByCredentials(username,password);
    //   res.json(currentUser)
      
    // } catch (error) {
    //   console.error("Signin Error from node.js", error)
    // }

  const signout = (req, res) => { };
  const account = async (req, res) => {
    res.json(currentUser)
   };
  app.post("/api/users", createUser);
  app.get("/api/users", findAllUsers);
  app.get("/api/users/:userId", findUserById);
  app.put("/api/users/:userId", updateUser);
  app.delete("/api/users/:userId", deleteUser);
  app.post("/api/users/signup", signup);
  app.post("/api/users/signin", signin);
  app.post("/api/users/signout", signout);
  app.post("/api/users/account", account);
}
export default UserRoutes;