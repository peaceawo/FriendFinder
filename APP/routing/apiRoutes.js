var friendsData = require("../data/friends");

module.exports = function(app) {
  // Displays all characters
  app.get("/api/friends", function(req, res) {
    return res.json(friendsData);
  });

  app.post("/api/friends", function(req, res) {
    var surveyResults = req.body;

    // convertStringToInt(surveyResults.scores);

    var newFriendScores = surveyResults.scores;
    var friendMatch = "";
    var frendMatchImg = "";

    var totalDelta = 1000;
    var delta = 0;

    //Loooping friendsArray:
    for (var i = 0; i < friendsData.length; i++) {
      //Looping scores:
      for (var j = 0; j < friendsData[i].scores; j++) {
        delta += Math.abs(friendsData[i].scores[j] - newFriendScores);
      }
      if (delta <= totalDelta) {
        //There is a problem here. NewFriendName herein defined is not in anyway connected to delta<=totalDelta above...
        newFriendName = friendsData[i].name;
        newFriendpic = friendsData[i].photo;
      }
    }

    friendsData.push(surveyResults);
    res.json({
      status: true,
      friendMatch: newFriendName,
      friendMatchImg: newFriendpic
    });
  });

  // // // Create New Friends - takes in JSON input
  // app.post("/api/friends", function(req, res) {
  //   var surveyResults = req.body;
  //   var totalDelta = 0;
  //   var delta = 100;
  //   var bestFriendIndex = 0;

  //   for (var i = 0; i < surveyResults.scores.length; i++) {
  //     surveyResults.scores[i] = parseInt(surveyResults.scores[i]);
  //   }

  //   for (var i = 0; i < friendsData.length; i++) {
  //     for (var j = 0; j < friendsData[i].scores.length; j++) {
  //       totalDelta += Math.abs(
  //         surveyResults.scores[j] - friendsData[i].scores[j]
  //       );
  //     }
  //     if (totalDelta <= delta) {
  //       bestFriendIndex = i;
  //       delta = totalDelta;
  //     }
  //   }
  //   friendsData.push(surveyResults);
  //   res.json(friendsData[bestFriendIndex]);
  // });

  // ---------------------------------------------------------------------------
  // clear out the table while working with the functionality.

  app.post("/api/clear", function(req, res) {
    // Empty out the arrays of data
    friendData.length = 0;

    res.json({ ok: true });
  });
};
