import UserModel from "../models/user.model.js";

export default class UserController{
    getHome(req,res){
        res.render("landing"); 
    }
    getLogin(req,res){
        res.render("login");
    }
}