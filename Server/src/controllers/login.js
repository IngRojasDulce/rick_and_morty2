const users = require ('../utils/users')

const login = (req, res)=>{
    const {email, password} = req.query;
    const userfound = users.find((users)=>users.email === email && users.password === password)

    userfound
    ?res.status(200).json({access: true})
    :res.status(404).json({access:false})// condicional para lanzar error
};
module.exports= {login};