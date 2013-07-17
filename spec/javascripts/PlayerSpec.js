describe("Player",function(){ 

	beforeEach(function(){
		player = new Player("male");
	});


it("should start of with no points by default", function() {
	expect (player.score).toEqual(0);
});

it("should have one point when it wins a point",function(){
	player.addScore();
	expect(player.score).toEqual(1);
});


it("should start off with no games by default", function() {
	expect(player.games).toEqual(0);

});

it("should have one game when it wins a game", function() {
	player.addGame();
	expect(player.games).toEqual(1);
})


it("should start off with no sets by default", function() {
	expect(player.sets).toEqual(0);

});

it("should have one set when it wins a set", function() {
	player.addSet();
	expect(player.sets).toEqual(1);
})

it("should take a gender", function(){
	expect(player.gender).toEqual("male");
})

it("should start off with no matches by default", function(){
	expect(player.match).toEqual(0);

})

it("should have one match when it wins a match", function() {
	player.addMatch();
	expect(player.match).toEqual(1);
})

it("should have tiebreak set to 0", function(){
	expect(player.tiebreak).toEqual(0);

})

it("should have one tiebreak if it wins a point", function(){
	player.addTiebreak();
	expect(player.tiebreak).toEqual(1);

})



}) 



