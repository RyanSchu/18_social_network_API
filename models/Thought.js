const {Schema, model} = require('mongoose');

const thoughtSchema = new Schema({
  thoughtText:{type:String,required:true,minLength:1,maxLength:280},
  createdAt:{type:Date,default:Date.now},
  username:{type:String,require:true},
  reactions:{}
});

const Thought = model('Thought', thoughtSchema);

const handleError = (err) => console.error(err);

// Will add data only if collection is empty to prevent duplicates
// Note that two documents can have the same name value
Thought.find({}).exec((err, collection) => {
  if (err) {
    return handleError(err);
  }
  if (collection.length === 0) {
    return Thought.insertMany(
      [

      ],
      (insertError) =>
        insertError ? handleError(insertError) : console.log('Inserted')
    );
  }
  return console.log('Already populated');
});

module.exports = Thought;
