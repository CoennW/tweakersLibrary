(function () {

    topContent = {};

    ///////////////// Private properties /////////////////

    let settings = {
        columns: 2,
        height: 'auto',
        title: 'Default titel',
        titleIcon: ''
    };

    let topContentData = { 
        0 : {
            user:{
                name: "default",
                userLink: "#",
                userIcon: "https://tweakers.net/identicon/1007011"
            }, 
            content: {
                title: "Default title",
                contentText: "default",
                contentType: "review",
                karma: "456"
            }           
        }
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

    //set Top Content Data
    topContent.setTopContentData = function (value) {
        if (typeof value !== "undefined") {
            topContentData = value;
        } else {
            return topContentData;
        }
    };

    //set Title
    topContent.setTitle = function (value) {
        if (typeof value !== "undefined") {
            settings.title = value;
        } else {
            return settings.title;
        }
    };

    ///////////////// Private functions /////////////////

    //Generates the TopContent HTML and returns it 
    function generateHTML() {

        let flexContainer = document.createElement('section');
           
        Object.entries(topContentData).forEach((item, index) => {

            let data = item[1];
            console.log(index);
            //create all elements ;(

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

            //set attributes ;\
            icon.setAttribute('src', data.user.userIcon);
            badge.setAttribute('src', './badge' + (index == 0 ? '1' : '2') + '.png');
            contentTitleA.setAttribute('src', '#');

            //create and append text nodes ;|
            
            usernameText = document.createTextNode(data.user.name);
            karmapuntenText = document.createTextNode(data.content.karma + ' karma');
            contentTitleANode = document.createTextNode(data.content.title);
            contentTextPNode = document.createTextNode(data.content.contentText);
            
            username.appendChild(usernameText);
            karmapunten.appendChild(karmapuntenText);
            contentTitleA.appendChild(contentTitleANode);
            contentTextP.appendChild(contentTextPNode);

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
            
            //append everything :)
            flexBetween.appendChild(username);
            flexBetween.appendChild(karmapunten);

            user.appendChild(icon);
            user.appendChild(flexBetween);
            user.appendChild(badge);

            contentTitle.appendChild(contentTitleA);
            contentText.appendChild(contentTextP);
            content.appendChild(contentTitle);
            content.appendChild(contentText);
            
            dataContainer.appendChild(user);
            dataContainer.appendChild(content);

            flexItems.appendChild(dataContainer);
            
            flexContainer.appendChild(flexItems.cloneNode(true));
        
        })
        
        //let html = '<section class="FlexContainer"><div class="FlexItems"><div class="data-container"><div class="user"><img class="icon" src="https://tweakers.net/i/Qs_SKQljf3KmYZLAddYYHn_Yqi4=/x/filters:strip_exif()/u/486125/napster_logo.png?f=community"><div class="flex-between"><p class="username">Username</p><p class="karmapunten">2345 karma</p></div><img class="badge" src="./badge.png"></div><div class="content"><div class="content-title"><a href="#">Dit is een title</a></div><div class="content-text"><p>"In tijden van corona presteer ik het om me mildly te infuriaten over wat er bij een muisfabrikant mis is gegaan. Deze muis doet een hoop goed, maar er is één keuze gemaakt die hem voor mij toch wel redelijk de mond snoert."</p></div></div></div></div></section>';
        return flexContainer;
    };

    function generateTitle (title) {
        let titleContainer = document.createElement('div');
        titleContainer.setAttribute('id', 'titleContainer');

        let iconIMG = document.createElement('img');
        iconIMG.setAttribute('src', './icon.png')


        let header = document.createElement('h2');
        let titleText = document.createTextNode(title);
        header.appendChild(titleText);
        
        titleContainer.appendChild(iconIMG);
        titleContainer.appendChild(header);
        return titleContainer;
    }
    //set width (based on number of columns)
    function setWidth(id) {
       let changeElement = document.getElementById(id);
       changeElement.style.width = (305 * settings.columns) + "px";
    };

    //set height of container
    function setHeight(id) {
        let changeElement = document.getElementById(id);
        changeElement.style.height = (305 * settings.columns) + "px";
    };

    ///////////////// Public functions /////////////////

    //get the element to show the generated topContent HTML 
    topContent.show = function (elementID) {
          
        let topContentElement = document.getElementById(elementID);

        topContentElement.appendChild(generateTitle(settings.title));
        topContentElement.appendChild(generateHTML());

        setWidth(elementID);
    }

    return topContent;
}());





///save html
{/* <section class='FlexContainer'>
            <div class="FlexItems">
                <div class="data-container">
                    <div class="user">
                        <img class="icon" src="https://tweakers.net/i/Qs_SKQljf3KmYZLAddYYHn_Yqi4=/x/filters:strip_exif()/u/486125/napster_logo.png?f=community">
                        <div class="flex-between">
                            <p class="username">Username</p>
                            <p class="karmapunten">2345 karma</p>
                        </div> 
                        <img class="badge" src="./badge.png"> 
                    </div>
                    <div class="content">
                        <div class="content-title">
                            <a href="#">Dit is een title</a>    
                        </div>
                        <div class="content-text">
                            <p>"In tijden van corona presteer ik het om me mildly te infuriaten over wat er bij een muisfabrikant mis is gegaan. Deze muis doet een hoop goed, maar er is één keuze gemaakt die hem voor mij toch wel redelijk de mond 'snoert'."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section> */}