var countSystem = (function () {

    count = {};
    
    ///////////////// Private properties /////////////////

    var isGameStarted = false,
        tSeconds = 60, //maximum time in seconds 
        points = 0, //start amount of points 
        addStep = 10, //amount of point that will be added to total 
        substractStep = 5, //amount of points that will be substracted
        maxPoints = 100, //maximum amount of points you can get
        minPoints = 0; //minimum ammount of points 


    let topContenData = {
        userName: "default",
        icon: "https://tweakers.net/i/0ZtYE7HPH-OwZ22MYi-SPJDnxYo=/x/filters:strip_exif()/u/472635/crop609f88d1700be_cropped.png?f=community",
        karma: 100,
        contentType: "review", 
        title: "dit is een title", 
        content: "dit is een review die ik ooit geschreven heb, het staat nu in de lijst met beste content woohoo!"
        
    }
    ///////////////// Public Properties /////////////////

    //Runtime in seconds
    count.tSeconds = function (value) {
        if (typeof value !== "undefined") {
            tSeconds = value;
        } else {
            return tSeconds;
        }
    };

    //Total amount of points 
    count.points = function (value) {
        if (typeof value !== "undefined") {
            points = value;
        } else {
            return points;
        }
    };
    //Amount of points to add to total 
    count.addStep = function (value) {
        if (typeof value !== "undefined") {
            addStep = value;
        } else {
            return addStep;
        }
    };
    //Amount of points to substract
    count.substractStep = function (value) {
        if (typeof value !== "undefined") {
            substractStep = value;
        } else {
            return substractStep;
        }
    };
    //Max points 
    count.maxPoints = function (value) {
        if (typeof value !== "undefined") {
            maxPoints = value;
        } else {
            return maxPoints;
        }
    };

    //Max points 
    count.minPoints = function (value) {
        if (typeof value !== "undefined") {
            minPoints = value;
        } else {
            return minPoints;
        }
    };
    
    //Max points 
    count.cssPreset = function (value) {
        if (typeof value !== "undefined") {
            cssPreset = value;
        } else {
            return cssPreset;
        }
    };

    ///////////////// Private functions /////////////////

    //Calculates time left and display in div
    function startTimer(seconds) {
        console.log('Timer started.');
        var timeLeft = seconds;

        $('#seconds').html(seconds % 60);
        $('#minutes').html(parseInt(seconds / 60));

        var timer = setInterval(function () {

            seconds--;
            $('#seconds').html(seconds % 60);
            $('#minutes').html(parseInt(seconds / 60));

            if (seconds === 0) {
                clearInterval(timer);
                console.log('timer stopped');
            }
        }, 1000);
    };

    //Generates the html


    //Calculates the total points when user is receiving points
    function changeTotalPoints(number, operator) {
        
        if ((operator === "+") && (count.points() < count.maxPoints())) {
            var point = count.points() + number;
            count.points(point);
        } else if ((operator === "-") && (count.points() > count.minPoints())) {
            var point = count.points() - number;
            count.points(point);
        } else {
            console.log("Point cap reached!");
        }
        $('#points').html(count.points());
    };

    ///////////////// Public functions /////////////////

    //set 1,2 or 3 columns as width
    count.columns = function () {
        //code
    }

    //set the height of topContent
    count.height = function () {

    }

    //change theme to light or dark.
    count.theme = function () {
        //code
    }

    //Starts the timer
    count.startTimer = function () {
        if (isGameStarted === true) {
            startTimer(count.tSeconds());
        } else {
            console.log("Start the game.");
        }

    };

    // Returns the amount of time left for the player 
    count.timeLeft = function () {

    };

    // Adds the amount of addStep to points  
    count.changePoints = function (operator) {
        if (isGameStarted === true) {
            changeTotalPoints(count.addStep(), operator);
        } else {
            console.log("Start the game.");
        }

    };

    // Starts the game 
    count.start = function () {
        isGameStarted = true;
        console.log("Countsystem is running.");
    };

    // Stops the timer and freeze the points 
    count.stop = function () {
        isGameStarted = false;
        console.log("Countsystem stopped.");
    };

    count.setCssPreset = function (cssPreset) {
        console.log(cssPreset);
        switch (cssPreset) {
            case 0:
                $('#points').html(count.points());
                $('.count-system').css({"padding": "20px", "background-color": "grey", "width": "150px","height": "auto", "text-align": "center", "color": "white"});
                $('.count-system > p').css("margin-top", "5px");
                $('#minutes, #seconds, #points').css("font-size", "24px");
                break;
            case 1:
                $('#points').html(count.points());
                $('.count-system').css({"padding": "20px", "background-color": "lightblue", "width": "150px","height": "auto", "text-align": "center", "color": "white"});
                $('.count-system > p').css("margin-top", "5px");
                $('#minutes, #seconds, #points').css("font-size", "24px");
                break;
            default:
                // code block
        }
    };
    return count;
}());



