const mongoose=require('mongoose');

const Schema=mongoose.Schema;
const userSchema=new Schema({
    
    url:{
        type:String,
       
        
    },name:{
        type:String,
        default:"anis"
    }
  
     
     
    

       
         
    
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

const Info=mongoose.model('Info',userSchema);
module.exports=Info; 