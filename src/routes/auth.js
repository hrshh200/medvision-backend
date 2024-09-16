const express = require("express");
const router = express.Router();
const { signUp, signIn } = require("../controller/auth");
const {  
  isRequestValidated,
  validateSignUpRequest,
  validateSignIpRequest,
} = require("../validators/auth");
const app = express();

app.use(express.json());


router.route("/signin").post(validateSignIpRequest, isRequestValidated, signIn);


router.route("/signup").post(validateSignUpRequest, isRequestValidated, signUp);


module.exports = router;