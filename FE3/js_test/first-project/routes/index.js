var express = require("express");
var router = express.Router();

/* GET home page. */
router.post("/main", (req, res) => {
    const data = req.body.data;
    res.send("문자열이 응답");
});

module.exports = router;
