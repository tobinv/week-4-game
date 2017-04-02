$('.cry1').click(function() {
    score = score + cry1;
    $("#totScore").html(score);
    console.log(score);
    checkTotal();

});

$('.cry2').click(function() {
    score = score + cry2;
    $("#totScore").html(score);
    console.log(score);
    checkTotal();

});

$('.cry3').click(function() {
    score = score + cry3;
    $("#totScore").html(score);
    console.log(score);
    checkTotal();

});

$('.cry4').click(function() {
    score = score + cry4;
    $("#totScore").html(score);
    console.log(score);
    checkTotal();

});





var score = 0;
var winning = 0;
var losing = 0;
var theRand = 0;
var picRand = 0;
var cry1;
var cry2;
var cry3;
var cry4;
var simple = 0;
var larger = 0;







function picRandom(x) {

    var pickSmall = Math.floor(Math.random() * 13 - 1) + 1;
    //console.log(pickSmall);
    simple = pickSmall;
    //console.log(simple);
    x = simple;
    return (x);

}


function startGame() {

    score = 0;
    simple = 0;
    larger = 0;
    theRand = 0;
    picRand = 0;
    var pickBig = Math.floor(Math.random() * 120 - 19) + 19;
    //console.log(pickBig);
    larger = pickBig;
    $("#randG").html(pickBig);
    $("#totScore").html(score);


    theRand = pickBig;
    //console.log(pickBig);

    cry1 = picRandom();
    // console.log(cry1);
    cry2 = picRandom();
    // console.log(cry2);
    cry3 = picRandom();
    // console.log(cry3);
    cry4 = picRandom();
    // console.log(cry4);

}


function checkTotal() {

    if (score === larger) {
        alert("You Win!");

        winning++;
        $("#wins").html(winning);
        startGame();
    }
    if (score > larger) {
        alert("You Lose!");
        losing++;
        $("#losses").html(losing);
        startGame();
    }

}



startGame();
