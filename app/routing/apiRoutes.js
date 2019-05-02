var friendData = require("../data/friends");

module.exports = function (app) {

    // API GET Route
    app.get("/api/friends", function (req, res) {
        res.json(friendData);
    });

    // API POST Route
    app.post("/api/friends", function (req, res) {
        var newFriend = req.body;
        console.log(newFriend);
    });
};