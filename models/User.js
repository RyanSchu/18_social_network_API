const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    username:{
        type:String,
        required: true, 
        unique:true, 
        trim: true
    },
    email:{
        type:String, 
        required: true,
        unique:true, 
        validate:/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
    },
    thoughts:[
      {
        type: Schema.Types.ObjectId,
        ref: 'thoughts',
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'users',
      },
    ]
},
{
  toJSON: {
    virtuals: true,
  },
  id: false,
});

const User = model('User', userSchema);

module.exports = User;
