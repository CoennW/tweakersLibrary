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
        //create all elements ;(
        let flexContainer = document.createElement('section');
        let flexItems = document.createElement('div');
        let dataContainer = document.createElement('div');
        let user = document.createElement('div');
        let icon = document.createElement('img');
        let flexBetween = document.createElement('div');
        let username = document.createElement('p');
        let karmapunten = document.createElement('p');
        let badge = document.createElement('img');
        let content = document.createElement('div');
        let contentTitle = document.createElement('div');
        let contentTitleA = document.createElement('a');
        let contentText = document.createElement('div');
        let contentTextP = document.createElement('p');
        
        //add all classes :|
        flexContainer.className = 'FlexContainer';
        flexItems.className = 'FlexItems';
        dataContainer.className = 'data-container';
        user.className = 'user';
        icon.className = 'icon';
        flexBetween.className = 'flex-between';
        username.className = 'username';
        karmapunten.className = 'karmapunten'; 
        badge.className = 'badge';
        content.className = 'content';
        contentTitle.className = 'content-title';
        contentText.className = 'content-text';
        
        //append all elements :D 
        flexContainer.className = '';
        flexItems.className = '';
        dataContainer.className = '';
        user.className = '';
        icon.className = '';
        flexBetween.className = '';
        username.className = '';
        karmapunten.className = ''; 
        badge.className = '';
        content.className = '';
        contentTitle.className = '';
        contentTitleA.className = '';
        contentText.className = '';
        contentTextP.className = '';
        
        
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



