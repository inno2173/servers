var express = require('express');
const User = require('../models/userModel');
var router = express.Router();


router.post('/login', function (req, res,next) {
  var userFound = false;
  var type ="";
  var username = req.body.username;
  var password = req.body.password;
  User.find((err, data) => {
    if (err) throw err;
    Object.keys(data).forEach((key) => {
      var row = data[key];
      if ((row.username == username) && (row.password == password)) {
        console.log("A user is connected");
        userFound = true;
        type = row.type;
       
      }
    });
    if(userFound)
    {
      res.json({ "isLoggedIn": true, "type": type });
    }
    else{
      res.json({ "isLoggedIn": false });
    }
  });
});
router.put('/:id', function (req, res) {
  User.findById(req.params.id, (err, data) => {
    if (err) throw err;
    if (!data)
      return res.status(404).send("User not found with the given ID");
    User.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
      if (err) throw err;
      res.status(200).send("updated successfully");
    });
  });
});

router.delete('/:id', function (req, res) {
  User.findByIdAndRemove(req.params.id, (err) => {
    if (err) throw err;
    res.status(200).send("Deleted successfully");
  });
});

router.post('/', (req, res, next) => {
  User.create(req.body, (err, data) => {
    if (err) throw err;
    res.status(201).send(data);
  });
});
module.exports = router;
