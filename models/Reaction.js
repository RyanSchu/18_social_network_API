const {Schema, model} = require('mongoose');

const reactionSchema = new Schema({
  name: { type: String, required: true },
  lastAccessed: { type: Date, default: Date.now },
});

const React = model('React', reactionSchema);

const handleError = (err) => console.error(err);

// Will add data only if collection is empty to prevent duplicates
// Note that two documents can have the same name value
React.find({}).exec((err, collection) => {
  if (err) {
    return handleError(err);
  }
  if (collection.length === 0) {
    return React.insertMany(
      [

      ],
      (insertError) =>
        insertError ? handleError(insertError) : console.log('Inserted')
    );
  }
  return console.log('Already populated');
});

module.exports = React;
