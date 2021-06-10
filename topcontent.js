(function () {

    topContent = {};

    ///////////////// Private properties /////////////////

    let settings = {
        columns: 2,
        height: 'auto'
    };

    ///////////////// set/change Properties /////////////////

    //change columns
    topContent.setColumns = function (value) {
        if (typeof value !== "undefined") {
            settings.columns = value;
        } else {
            return 2;
        }
    };
    
    ///////////////// Private functions /////////////////

    //Generates the TopContent HTML and returns it 
    function generateHTML() {
        let html = '<section class="FlexContainer"><div class="FlexItems"><div class="data-container"><div class="user"><img class="icon" src="https://tweakers.net/i/Qs_SKQljf3KmYZLAddYYHn_Yqi4=/x/filters:strip_exif()/u/486125/napster_logo.png?f=community"><div class="flex-between"><p class="username">Username</p><p class="karmapunten">2345 karma</p></div><img class="badge" src="./badge.png"></div><div class="content"><div class="content-title"><a href="#">Dit is een title</a></div><div class="content-text"><p>"In tijden van corona presteer ik het om me mildly te infuriaten over wat er bij een muisfabrikant mis is gegaan. Deze muis doet een hoop goed, maar er is één keuze gemaakt die hem voor mij toch wel redelijk de mond snoert."</p></div></div></div></div></section>';
        return html;
    };

    function setWidth(id) {
       let changeElement = document.getElementById(id);
       changeElement.style.width = (305 * settings.columns) + "px";
    };

    ///////////////// Public functions /////////////////

    //get the element to show the generated topContent HTML 
    topContent.show = function (elementID) {
          
        let topContentElement = document.getElementById(elementID);
        topContentElement.innerHTML = generateHTML();
        setWidth(elementID);
    }

    return topContent;
}());



