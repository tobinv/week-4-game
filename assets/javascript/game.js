



$('.cry1').click(function() {
              game.score = game.score + game.cry1;
              $("#totScore").html(game.score);
              console.log(game.score);

          });






var game = {
    score: 0,
    winning: 0,
    losing: 0,
    theRand: 1,
    picRand: 1,
    cry1: 1,
    cry2: 1,
    cry3: 1,
    cry4: 1,
    simple: 0,

    picRandom: function(x) {

        var pickSmall = Math.floor(Math.random() * 13 - 0) + 0;
        //console.log(pickSmall);
        simple = pickSmall;
        //console.log(simple);
        this.x = simple;
        return (this.x);

    },


    startGame: function() {
        var pickBig = Math.floor(Math.random() * 120 - 19) + 19;
        //console.log(pickBig);
        $("#randG").html(pickBig);
        $("#totScore").html(this.score);


        this.theRand = pickBig;
        //console.log(pickBig);

        cry1 = this.picRandom();
        console.log(cry1);


        cry2 = this.picRandom();
        console.log(cry2);
        cry3 = this.picRandom();
        console.log(cry3);
        cry4 = this.picRandom();
        console.log(cry4);




    },



};

game.startGame();
