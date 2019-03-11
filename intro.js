console.info("my first js");

var name = "Nicolae";
var employed = true;

console.warn("employed");
console.warn(employed);

console.info("name:");
console.info(name);

name='Matei'
console.info("name:");
console.info(name);


function getWelcomeMsg(){
    return "Welcome to my site!";
}


function getColor(){
    var date = new Date();
    console.log(date.getMinutes());
    if (date.getMinutes() >19){
        return "green"
    }
    return "blue";

}

var welcome = getWelcomeMsg();
console.info(welcome);

var summaryElement = document.getElementById("summary");
console.info("summaryElement",summaryElement);
var color = getColor();
summaryElement.style.color = color ;

//first example 

function hideHomePage(){
    var el = document.getElementById('home-page')
    el.style.display = 'none';
}
function showSkillsPage(){
    document.getElementById('skills-page').style.display ='block';
}

function clickOnSkills(){
   // hideHomePage();
    //showSkillsPage();
    hidePage('home-page');
    hidePage('languages-page');
    hidePage('about-page');
    showPage('skills-page');
}

function clickOnHome(){
    // hideHomePage();
     //showSkillsPage();
     hidePage('skills-page');
     hidePage('languages-page');
     hidePage('about-page');
     showPage('home-page');
 }
 function clickOnLanguages(){
    // hideHomePage();
     //showSkillsPage();
     hidePage('home-page');
     hidePage('skills-page');
     hidePage('about-page');
     showPage('languages-page');
 }
 function clickOnAbout(){
    // hideHomePage();
     //showSkillsPage();
     hidePage('home-page');
     hidePage('languages-page');
     hidePage('skills-page');
     showPage('about-page');
 }

//first example-end


function hidePage(page){
    var el = document.getElementById(page)
    el.style.display = 'none';
}
function showPage(page){
    document.getElementById(page).style.display='block';
}