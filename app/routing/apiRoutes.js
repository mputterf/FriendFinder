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

        // Initial placeholder values
        var smallestDifference = 100;
        var chosenFriendName = "";
        var chosenFriendPhoto = "";

        // Loop through the friends array of objects
        for (var i = 0; i < friendData.length; i++) {
            // For each friend we are going to test against the user, store their scores in a temp array for comparison
            var friendDataScores = friendData[i].scores;
            var totalDifference = 0;

            // Compare the friend's scores against the user by going through each array and taking the difference of each element.
            // Store the total difference of all the scores to later compare against whoever has the lest difference in total score
            friendDataScores.forEach((e1) => newFriend.scores.forEach((e2) =>
                totalDifference += Math.abs(parseInt(e1) - parseInt(e2))
            ));

            // If a friend has smaller difference comapred to whoever had the smallest, we'll make them the new chosen one
            if (totalDifference < smallestDifference) {
                chosenFriendName = friendData[i].name;
                chosenFriendPhoto = friendData[i].photo;
                smallestDifference = totalDifference;
            }
        }


        // Save the user who is the best match to send to back to the html
        var closestFriend = {
            name: chosenFriendName,
            photo: chosenFriendPhoto
        }

        // Add our user to the array of friends for the next user
        friendData.push(newFriend);

        console.log(closestFriend);
        res.json(closestFriend);
    });
};