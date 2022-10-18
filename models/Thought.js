const mongoose = require('mongoose');

const thoughtSchema = new mongoose.Schema({
  name: { type: String, required: true },
  lastAccessed: { type: Date, default: Date.now },
});

const Thought = mongoose.model('Thought', thoughtSchema);

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
