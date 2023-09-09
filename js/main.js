//console.log('hello!');

// make the browser remember the current theme
let theme = localStorage.getItem('theme');

if(theme == null){
    setTheme('light');
}
else{
    setTheme(theme);
}

var themeDots = document.getElementsByClassName('theme-dot');

for(var i = 0; themeDots.length; i++){
    themeDots[i].addEventListener('click', function(e){
        // get the custom attribute assigned to the clicked dot
        var mode = this.dataset.mode;
        //alert(mode);

        // change the theme based on the mode
        setTheme(mode);
    });
}

function setTheme(mode){

    if(mode == 'light'){
        var themeStyle = document.getElementById('theme-style');
        // set the href link to apply the correct style
        themeStyle.href = 'css/default.css';
    }

    if(mode == 'purple'){
        var themeStyle = document.getElementById('theme-style');
        // set the href link to apply the correct style
        themeStyle.href = 'css/purple.css';
    }

    if(mode == 'green'){
        var themeStyle = document.getElementById('theme-style');
        // set the href link to apply the correct style
        themeStyle.href = 'css/green.css';
    }

    if(mode == 'blue'){
        var themeStyle = document.getElementById('theme-style');
        // set the href link to apply the correct style
        themeStyle.href = 'css/blue.css';
    }

    // store the mode value in local storage
    localStorage.setItem('theme', mode);
}
