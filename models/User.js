const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  lastAccessed: { type: Date, default: Date.now },
});

const User = mongoose.model('User', userSchema);

const handleError = (err) => console.error(err);

// Will add data only if collection is empty to prevent duplicates
// Note that two documents can have the same name value
User.find({}).exec((err, collection) => {
  if (err) {
    return handleError(err);
  }
  if (collection.length === 0) {
    return User.insertMany(
      [

      ],
      (insertError) =>
        insertError ? handleError(insertError) : console.log('Inserted')
    );
  }
  return console.log('Already populated');
});

module.exports = Yser;
