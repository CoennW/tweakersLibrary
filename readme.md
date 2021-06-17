# A library for a gamification wall on Tweakers.net :point_down:
This library makes it easy to implement the 'Karmamuur' on Tweakers.net. 

## Install :cd:

The library has no dependencies.

Download or clone the repository to you project folder. Include the following line before the last `</body>` tag. 

```
<script src="topcontent.js"></script>
</body>
```

Last step and you're ready to go! Add a element to your HTML code and give it an ID. This is where the library will output its generated HTML.  

```
<div id="topContent">
        
</div>
```
    
## Usage :game_die:

There are several option available to customize topcontent.js to your likings.  

```
topContent.setTitle();              //Set the titel of the library                   Default = 'Default titel'
    
topContent.setColumns();            //Range from 1 to 3 in column with               Default = 2
  
topContent.setTopContentData();     //The data object that you want to use           Default = A (dummy)Default data object;

topContent.show();                  //Show the HTML output in target element         Default = 'topContent'

```

Set the options like below. If you don't set them, they will use default values.  
```
topContent.setTitle('New Title'); 
topContent.setColumns(1); 
topContent.setTopContentData(newDataObject); 
```
After this just call the following lines to activate the library and show the content.
```

topContent.show('myID');  //make sure the ID excists in your HTML file 

```