(function () {

    topContent = {};

    ///////////////// Private properties /////////////////

    let settings = {
        columns: 2,
        height: 'auto'
    };

    let topContentData = { 
        0 : {
            user:{
                name: "Coen",
                userLink: "#",
                userIcon: "https://tweakers.net/i/Qs_SKQljf3KmYZLAddYYHn_Yqi4=/x/filters:strip_exif()/u/486125/napster_logo.png?f=community"
            }, 
            content: {
                title: "Dit is een title",
                contentText: "text text text",
                contentType: "review",
                karma: "456"
            }      
        },
        1: {
            user:{
                name: "Cen",
                userLink: "#",
                userIcon: "iconLink"
            }, 
            content: {
                title: "Dit is een title",
                contentText: "text text text",
                contentType: "review",
                karma: "300"
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



    ///////////////// Private functions /////////////////

    //Generates the TopContent HTML and returns it 
    function generateHTML() {

        let flexContainer = document.createElement('section');
        
        Object.entries(topContentData).forEach((item) => {

            let data = item[1];

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
            icon.setAttribute('src', 'https://tweakers.net/i/Qs_SKQljf3KmYZLAddYYHn_Yqi4=/x/filters:strip_exif()/u/486125/napster_logo.png?f=community');
            badge.setAttribute('src', './badge.png');
            contentTitleA.setAttribute('src', '#');
            
            //create and append text nodes ;|
            
            usernameText = document.createTextNode(data.user.name);
            karmapuntenText = document.createTextNode(data.content.karma + ' karma');
            contentTitleANode = document.createTextNode('Roccat Kone Pure Ultra');
            contentTextPNode = document.createTextNode('"In tijden van corona presteer ik het om me mildly te infuriaten over wat er bij een muisfabrikant mis is gegaan. Deze muis doet een hoop goed, maar er is één keuze gemaakt die hem voor mij toch wel redelijk de mond snoert"');
            
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

    function setWidth(id) {
       let changeElement = document.getElementById(id);
       changeElement.style.width = (305 * settings.columns) + "px";
    };

    ///////////////// Public functions /////////////////

    //get the element to show the generated topContent HTML 
    topContent.show = function (elementID) {
          
        let topContentElement = document.getElementById(elementID);
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