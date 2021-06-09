let countSystem = (function () {

    count = {};
    
    ///////////////// Private properties /////////////////

    let topContentData = {
        userName: "default",
        icon: "https://tweakers.net/i/0ZtYE7HPH-OwZ22MYi-SPJDnxYo=/x/filters:strip_exif()/u/472635/crop609f88d1700be_cropped.png?f=community",
        karma: 100,
        contentType: "review", 
        title: "dit is een title", 
        content: "dit is een review die ik ooit geschreven heb, het staat nu in de lijst met beste content woohoo!" 
    },
    columns = 1,
    height = '800px',
    theme = 'light',
    elementID = '#topContent';
    
    ///////////////// Public Properties /////////////////

    //Data object for html
    count.topContentData = function (value) {
        if (typeof value !== "undefined") {
            topContentData = value;
        } else {
            return topContentData;
        }
    };

    //
    count.columns = function (value) {
        if (typeof value !== "undefined") {
            columns = value;
        } else {
            return columns;
        }
    };

    //Runtime in seconds
    count.height = function (value) {
        if (typeof value !== "undefined") {
            height = value;
        } else {
            return height;
        }
    };

    //Runtime in seconds
    count.theme = function (value) {
        if (typeof value !== "undefined") {
            theme = value;
        } else {
            return theme;
        }
    };

    

    ///////////////// Private functions /////////////////

    //Generates the TopContent HTML
    function generateHTML(topContentData) {

    };

    //gets the topContent HTML element to display content
    function getTopContentElement(elementID) {

    };



    ///////////////// Public functions /////////////////

    //get the element to show the generated topContent HTML 
    count.show = function (id) {
        //code
    }

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



