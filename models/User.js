const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const userSchema = new Schema({
    username: {
        type: String,
        required: [true, 'Please enter an username'],
    },
    site: {
        type: String,
    },
    email: {
        type: String,
        required: [true, 'Please enter an email'],

        lowercase: true,

    },
    password: {
        type: String,

        required: [true, 'please enter a password'],

    },







})

// userSchema.pre('save', async function(next){
//   const salt=await bcrypt.genSalt();
//   this.password=await bcrypt.hash(this.password,salt);
//   next();
// })

// userSchema.statics.login= async function(email,password){
//        const user=  await this.findOne({email});

//         if(user){
//             const auth=  await bcrypt.compare(password, user.password);
//              if(auth){
//                 return user;

//                 } 
//               throw Error('incorrect password')




//            }
//             throw Error('incorrect email')

// }

const User = mongoose.model('User', userSchema);
module.exports = User; 