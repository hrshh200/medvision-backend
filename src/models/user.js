const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema({
  name: {
     type: String,
     require: true,
     unique: true,
  },
  email: {
     type: String,
     require: true,
     unique: true,
  },
  hash_password: {
     type: String,
     require: true,
  },
},{ timestamps: true });
//For get fullName from when we get data from database

// userSchema.virtual("fullName").get(function () {
//   return `${this.firstName} ${this.lastName}`;
// });

userSchema.method({
  async authenticate(password) {
     return bcrypt.compare(password, this.password);
  },
});
module.exports = mongoose.model("User", userSchema);