
describe ("Game", function() {

	beforeEach(function(){
		player1 = new Player("female");
		player2 = new Player("female");
		player5 = new Player("female");
		player6 = new Player("female");
		game = new Game(player1, player2);
		game2 = new Game(player1, player2, player5, player6);
	});

describe("Points", function(){
it("has a player1 method",function(){
	expect(game.player1).toBe(player1);
});

it("has a player2 method",function(){
	expect(game.player2).toBe(player2);
});

it("should allow player 1 to win a point and have a score of 1", function(){
	game.winPoint(player1);
	expect(player1.score).toEqual(1);
});

it("should print 15-0 when a point has been won by player1", function(){
	expect(game.winPoint(player1)).toEqual("15-0");
});

it("should print 30-0 when two points have been won by player1", function(){
	game.winPoint(player1)
	expect(game.winPoint(player1)).toEqual("30-0");
});

it("should return 15-15 when a point has been one by each player", function(){
	game.winPoint(player1)
	expect(game.winPoint(player2)).toEqual("15-15");
	});

it("should return 0-0 when a player wins 4 points in a row", function() {
	game.winPoint(player1);
	game.winPoint(player1);
	game.winPoint(player1);
	expect(game.winPoint(player1)).toEqual("0-0");
});

it("should go to ADV-40 when both are at 40 and player1 wins a point",function(){
	game.winPoint(player1);
	game.winPoint(player1);
	game.winPoint(player1);
	game.winPoint(player2);
	game.winPoint(player2);
	game.winPoint(player2);
	expect(game.winPoint(player1)).toEqual("ADV-40");
});

it("should go to 40-40 when it is advantage 40 and player2 wins a point", function(){
	game.winPoint(player1); 	//15  - 0
	game.winPoint(player1);		//30  - 0
	game.winPoint(player1); 	//40  - 0
	game.winPoint(player2);		//40  - 15
	game.winPoint(player2);		//40  - 30
	game.winPoint(player2);		//40  - 40 
	game.winPoint(player1);		//ADV - 40
								//ADV+1 - 40 Player 1 wins  OR ADV - ADV = 40 - 40 
	expect(game.winPoint(player2)).toEqual("40-40");
});

it("should go to 40-40 when it is advantage 40 and player2 wins a point", function(){
	game.winPoint(player1); 	//15  - 0
	game.winPoint(player1);		//30  - 0
	game.winPoint(player1); 	//40  - 0
	game.winPoint(player2);		//40  - 15
	game.winPoint(player2);		//40  - 30
	game.winPoint(player2);		//40  - 40 
	game.winPoint(player1);		//ADV - 40
	game.winPoint(player2);	 		//40 - 40 
	game.winPoint(player1);			//ADV - 40   
	game.winPoint(player2);			//40 - 40 
	expect(game.winPoint(player2)).toEqual("40-ADV");
});

it("should go to 40-40 when it is advantage 40 and player2 wins a point", function(){
	game.winPoint(player1); 	//15  - 0
	game.winPoint(player1);		//30  - 0
	game.winPoint(player1); 	//40  - 0
	game.winPoint(player2);		//40  - 15
	game.winPoint(player2);		//40  - 30
	game.winPoint(player2);		//40  - 40 
	game.winPoint(player1);		//ADV - 40
	game.winPoint(player2);	 		//40 - 40 
	game.winPoint(player1);			//ADV - 40   
	game.winPoint(player2);			//40 - 40 
	game.winPoint(player2);			//40 - ADV
	expect(game.winPoint(player2)).toEqual("0-0");
});

})


// games
describe("Games", function(){

it("should return the games each player has won when", function(){
	expect(game.games()).toEqual("0-0");
})

it("should return 1-0 when player1 has won one game", function(){
	game.player1.addGame();
	expect(game.games()).toEqual("1-0");
})

it("should return 1-0 when player1 has won 4 points in a row", function(){
	game.winPoint(player1);
	game.winPoint(player1);
	game.winPoint(player1);
	game.winPoint(player1);
	expect(game.games()).toEqual("1-0");
})

it("should return 1-1 when player1 has won 4 points in a row and then p2 wins 4 points", function(){
	game.winPoint(player1);
	game.winPoint(player1);
	game.winPoint(player1);
	game.winPoint(player1);
	game.winPoint(player2);
	game.winPoint(player2);
	game.winPoint(player2);
	game.winPoint(player2);
	expect(game.games()).toEqual("1-1");
})


}) // end of describe games


//sets
describe("Sets", function(){
it("should return the sets each player has, this should be 0-0", function(){
	expect(game.sets()).toEqual("0-0");
})

it("should return 1-0 when a player has won a set", function(){
	game.player1.addSet();
	expect(game.sets()).toEqual("1-0");
})

//*******
xit("should return 1-0 when a player has won six games in a row and store this in an array", function(){
	game.winPoint(player1);
	game.winPoint(player1);
	game.winPoint(player1);
	game.winPoint(player1);
	game.winPoint(player1);
	game.winPoint(player1);
	game.winPoint(player1);
	game.winPoint(player1);
	game.winPoint(player1);
	game.winPoint(player1);
	game.winPoint(player1);
	game.winPoint(player1);
	game.winPoint(player1);
	game.winPoint(player1);
	game.winPoint(player1);
	game.winPoint(player1);
	game.winPoint(player1);
	game.winPoint(player1);
	game.winPoint(player1);
	game.winPoint(player1);
	game.winPoint(player1);
	game.winPoint(player1);
	game.winPoint(player1);
	game.winPoint(player1);
	expect(game.sets()).toEqual("1-0");
	expect(game.storedSets).toEqual(["6-0"]);
	
})

it("should not return 1-0 for sets, games should be 6-5", function(){
	player1.games = 5;
	player2.games = 5;
	game.winPoint(player1);
	game.winPoint(player1);
	game.winPoint(player1);
	game.winPoint(player1);
	expect(game.sets()).not.toEqual("1-0");
	expect(game.games()).toEqual("6-5"); //6-5
})

it("should allow a 7-5 victory to give a set of 1-0", function()
{	
	player1.games = 6;
	player2.games = 5;
	game.winPoint(player1);
	game.winPoint(player1);
	game.winPoint(player1);
	game.winPoint(player1);
	expect(game.sets()).toEqual("1-0");
})


it("should trigger a tiebreak if it is 6-6 and a player wins a point", function(){
	player1.games = 6;
	player2.games = 6;
	game.winPoint(player1);
	expect(player1.score).toEqual(0);
	expect(game.tiebreak()).toEqual("1-0");
})

it("should add a set when the tiebreak is 7-0, tiebreak should reset to 0", function(){
	player1.games = 6;
	player2.games = 6;
	player1.tiebreak=6;
	game.winPoint(player1);
	expect(game.sets()).toEqual("1-0");
	expect(player1.tiebreak).toEqual(0);

})

it("shouldn't add a set when the tiebreak is 7-6", function(){
	player1.games = 6;
	player2.games = 6;
	player1.tiebreak = 6;
	player2.tiebreak = 6;
	game.winPoint(player1);
	expect(game.sets()).not.toEqual("1-0");
})

it("should add a set when a tiebreak is won 11-9", function(){
	player1.games = 6;
	player2.games = 6;
	player1.tiebreak = 9;
	player2.tiebreak = 9;
	game.winPoint(player1);
	game.winPoint(player1);
	expect(game.sets()).toEqual("1-0");
})

it("should win a match if score is 6-6 and player2 scores 7 points", function(){
	player1.games = 6;
	player2.games = 6;
	game.winPoint(player2);
	game.winPoint(player2);
	game.winPoint(player2);
	game.winPoint(player2);
	game.winPoint(player2);
	game.winPoint(player2);
	game.winPoint(player2);
	expect(game.sets()).toEqual("0-1");
})


}) // end of describe sets

describe("winning a match", function(){

it("should win a match if it wins two sets and the gender is female", function(){
player1.sets=1;
player1.games=5;
game.winPoint(player1);
game.winPoint(player1);
game.winPoint(player1);
game.winPoint(player1);
game.sets();
expect(game.match()).toEqual("1-0");
})

it("should not win a match if it wins two sets and the gender is male", function(){
player3 = new Player("male");
player4 = new Player("male");
game1 = new Game(player3, player4);
player3.sets=2;
player3.games=5;
game.winPoint(player3);
game.winPoint(player3);
game.winPoint(player3);
game.winPoint(player3);
game.sets();
expect(game.match()).toEqual("0-0");
})

it("should win a match if it wins three sets and the gender is male", function(){
player3 = new Player("male");
player4 = new Player("male");
game1 = new Game(player3, player4);
player3.sets=2;
player3.games=5;
game1.winPoint(player3);
game1.winPoint(player3);
game1.winPoint(player3);
game1.winPoint(player3);
game1.sets();
expect(game1.match()).toEqual("1-0");
expect(player3.score).toEqual(0);
})


}) // end of match

describe("special points", function(){

it("should return set point if one game or more up and next point gives you 6", function(){
	player1.games = 5;
	player2.games = 4;
	player1.score = 3;
	expect(game.specialPoints()).toEqual("Set Point");

})

it("should return set point if it goes to a tiebreak and 6-5", function(){
	player1.games = 6;
	player2.games = 6;
	player1.tiebreak =6;
	player2.tiebreak = 5;
	expect(game.specialPoints()).toEqual("Set Point");
	})

it("should not return set point if 11-11 at tiebreak", function(){
	player1.games = 6;
	player2.games = 6;
	player1.tiebreak = 11;
	player2.tiebreak = 11;
	expect(game.specialPoints()).not.toEqual("Set Point");

})

it("should return set point at 6-5 and 40-0", function(){
	player1.games = 6;
	player2.games = 5;
	player1.score = 3;
	expect(game.specialPoints()).toEqual("Set Point");
})

it("should not return set point at 40-40", function(){
	player1.games = 5;
	player2.games = 4;
	player1.score = 3;
	player2.score = 3;
	expect(game.specialPoints()).not.toEqual("Set Point");
})
//match points

it("should return match point if two sets up for female and 5-4 40-0", function(){
	player1.sets = 1;
	player1.games = 5;
	player2.games = 4;
	player1.score = 3;
	expect(game.specialPoints()).toEqual("Match Point");
})

it("should return match point if 1-1 sets, female and 6-5 tie break", function(){
	player1.sets = 1;
	player2.sets = 2;
	player1.games = 6;
	player2.games = 6;
	player1.tiebreak = 6;
	player2.tiebreak = 5;
	expect(game.specialPoints()).toEqual("Match Point");
})

it("should not return return match point if male, one set up for male and 40-0", function(){
	player3 = new Player("male");
	player4 = new Player("male");
	game1 = new Game(player3, player4);
	player3.sets=1;
	player3.games = 5;
	player3.score = 3;
	expect(game1.specialPoints()).toEqual("Set Point");
})

it("should return return match point if male, two set up for male and 40-0", function(){
	player3 = new Player("male");
	player4 = new Player("male");
	game1 = new Game(player3, player4);
	player3.sets=2;
	player3.games = 5;
	player3.score = 3;
	expect(game1.specialPoints()).toEqual("Match Point");
})


}) // end of special points


describe("doubles", function(){

	it("should have a method for player 3", function(){
		expect(game2.player3).toEqual(player5);
	})

	it("should have a method for player 4", function(){
		expect(game2.player3).toEqual(player5);
	})

	it("should add points to player 1 if player 3 wins a point", function(){
		game2.winPoint(game2.player3);
		expect(game2.player3.score).toEqual(0);
		expect(game2.player1.score).toEqual(1);
	})

	it("should add points to player 2 if player 4 wins a point", function(){
		game2.winPoint(game2.player4);
		expect(game2.player4.score).toEqual(0);
		expect(game2.player2.score).toEqual(1);
	})

	it("should have a score of 1-0 if player 3 wins four points in a row", function(){
			game2.winPoint(game2.player3);
			game2.winPoint(game2.player3);
			game2.winPoint(game2.player3);
			game2.winPoint(game2.player3);
			expect(game2.games()).toEqual("1-0");

	})

	it("should have a set point if 5-4 and player 3 wins 3 points", function(){
		player1.games = 5;
		player2.games = 4;
		game2.winPoint(game2.player3);
		game2.winPoint(game2.player3);
		game2.winPoint(game2.player3);
		expect(game2.specialPoints()).toEqual("Set Point");

	})

})

//server
//initial server of 0 denotes p1

describe("serves", function(){

		it("should have a method for specifying the initial server and this should be the current server", function(){
			game.initialServer = 0;		// this is player 1 .. never specified it! Don't need to
			expect(game.server()).toEqual(game.player1);
			game.winPoint(game.player1);
			expect(game.notServer()).toEqual(game.player2);
		})

		it("should change the server to player 2 after a game has been won with p1 as initial", function(){
			game.initialServer = 0;
			game.winPoint(game.player1);
			game.winPoint(game.player1);
			game.winPoint(game.player1);
			game.winPoint(game.player1);
			expect(game.server()).toEqual(game.player2);
		})

		it("should have p2 as server if initial", function(){
			game.initialServer = 1;
			expect(game.server()).toEqual(game.player2);
		})


		it("should change the server to player 2 after a game has been won with p1 as initial", function(){
			game.initialServer = 1;
			game.winPoint(game.player1);
			game.winPoint(game.player1);
			game.winPoint(game.player1);
			game.winPoint(game.player1);
			expect(game.server()).toEqual(game.player1);
			expect(game.notServer()).toEqual(game.player2);
		})

		//need to check not server 

		it("should return break point if not current server and about to win a game", function(){
			game.initialServer = 1;
			game.winPoint(game.player1);
			game.winPoint(game.player1);
			game.winPoint(game.player1);
			expect(game.specialPoints()).toEqual("Break Point");
		})








})

}) //end of overarching describe

