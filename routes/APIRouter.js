const express = require("express");
const router = express.Router();
const APIController = require("../controllers/APIcontroller");


router.get("/properties", APIController.all);