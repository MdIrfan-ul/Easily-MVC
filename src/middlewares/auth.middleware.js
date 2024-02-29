// sets the authentication only logged user can have the access to specific things
export const auth = (req,res,next)=>{
    if(req.session.userEmail){
        next();
    }
    else{
        res.render("not-found");
    }
}