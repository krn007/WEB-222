window.onchange = function()
{
  document.getElementById("firstname").addEventListener("change", nameValidate);
  document.getElementById("password").addEventListener("change", passValidate);
  document.getElementById("phonenumber").addEventListener("change", phoneValidate);
 }
 
function nameValidate()
{
	var fName = document.getElementById("firstname").value;
  fName = fName.trim();
  //lName = lName.trim();
  retVal = false;
  var count = 0;
  for(var i = 0; i < fName.length; i++)
  {
    if((fName.charCodeAt(i) > 64 && fName.charCodeAt(i) < 91) || (fName.charCodeAt(i) > 96 && fName.charCodeAt(i)< 123) || fName.charCodeAt(i) == 39 || fName.charCodeAt(i) == 45)
      {
        count++;
      }
    if(count == fName.length){retVal = true;}
  }
  if(retVal == false)
    {
      alert('Only alphabets, hyphen and apostrophe characters are allowed.');
    }
  return retVal;
}

function passValidate()
{
	var pass = document.getElementById("password").value;
  pass = pass.trim();
  var lowerCase = 0;
  var upperCase = 0;
  var number = 0;
  retVal = false;
  if(pass.length >= 8)
    {
    for(var i = 0; i < pass.length; i++)
     {
       if(pass.charCodeAt(i) > 64 && pass.charCodeAt(i) < 91)
         {
           upperCase++;
         }
       else if(pass.charCodeAt(i) > 96 && pass.charCodeAt(i) < 123)
         {
           lowerCase++;
         }
       else if(pass.charCodeAt(i) > 47 && pass.charCodeAt(i) < 58)
         {
           number++;
         }
     }
     if(lowerCase > 0 && upperCase > 0 && number > 0)
     {
       retVal = true;
     }
    }
  if(retVal == false)
    {
      alert('For password field, only alphabets and numbers are allowed. Password must contain atleast an uppercase and lowercase letter.');
    }
  return retVal;
}

function phoneValidate(phone)
{
	phone = document.getElementById("phonenumber").value;
  if (parseInt(phone) != phone)
  {
    alert('Please enter a phone number. Numbers only, country code and area code cannot be all zeroes');
    document.form1.phone.focus();
    return false;
  }
  else if(phone[0] == 0 && phone[1] == 0 && phone[2] == 0)
    {
      return false;
    }
  else if(parseInt(phone) == 0)
    {
      return false;
    }
  else
    {
     return true;
    }
}


var movies = [
  {
    image: { src: "https://images-na.ssl-images-amazon.com/images/M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_UX182_CR0,0,182,268_AL_.jpg", alt: "The Shawshank Redemption", width: 120, height: 160 },
    name: "The Shawshank Redemption",
    description: "Chronicles the experiences of a formerly successful banker as a prisoner in the gloomy jailhouse of Shawshank after being found guilty of a crime he did not commit. The film portrays the man's unique way of dealing with his new, torturous life; along the way he befriends a number of fellow prisoners, most notably a wise long-term inmate named Red. Written by J-S-Golden",
    type: "Movies",
    year: "1994",
  }, {
    image: { src: "https://images-na.ssl-images-amazon.com/images/M/MV5BZTRmNjQ1ZDYtNDgzMy00OGE0LWE4N2YtNTkzNWQ5ZDhlNGJmL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY268_CR3,0,182,268_AL_.jpg", alt: "The Godfather", width: 120, height: 160 },
    name: "The Godfather",
    description: "When the aging head of a famous crime family decides to transfer his position to one of his subalterns, a series of unfortunate events start happening to the family, and a war begins between all the well-known families leading to insolence, deportation, murder and revenge, and ends with the favorable successor being finally chosen. Written by J. S. Golden",
   type: "Movies",
   year: "1972",
}, {
    image: { src: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg", alt: "The Dark Knight", width: 120, height: 160 },
    name: "The Dark Knight",
    description: "Set within a year after the events of Batman Begins, Batman, Lieutenant James Gordon, and new district attorney Harvey Dent successfully begin to round up the criminals that plague Gotham City until a mysterious and sadistic criminal mastermind known only as the Joker appears in Gotham, creating a new wave of chaos. Batman's struggle against the Joker becomes deeply personal, forcing him to confront everything he believes and improve his technology to stop him. A love triangle develops between Bruce Wayne, Dent and Rachel Dawes. Written by Leon Lombardi",
    type: "Movies",
    year:"2008",
  }, {
    image: { src: "https://images-na.ssl-images-amazon.com/images/M/MV5BODQwOTc5MDM2N15BMl5BanBnXkFtZTcwODQxNTEzNA@@._V1_UX182_CR0,0,182,268_AL_.jpg", alt: "12 Angry Men", width: 120, height: 160 },
    name: "12 Angry Men",
    description: "The defense and the prosecution have rested and the jury is filing into the jury room to decide if a young man is guilty or innocent of murdering his father. What begins as an open-and-shut case of murder soon becomes a detective story that presents a succession of clues creating doubt, and a mini-drama of each of the jurors' prejudices and preconceptions about the trial, the accused, and each other. Based on the play, all of the action takes place on the stage of the jury room. Written by pjk",
    type: "Movies",
    year:"1957",
  }, {
    image: { src: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTkxMTA5OTAzMl5BMl5BanBnXkFtZTgwNjA5MDc3NjE@._V1_UX182_CR0,0,182,268_AL_.jpg", alt: "Pulp Fiction", width: 120, height: 160 },
    name: "Pulp Fiction",
    description: "ules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents. Written by Soumitra",
    type: "Movies",
    year:"1994", 
}, {
    image: { src: "https://images-na.ssl-images-amazon.com/images/M/MV5BZGY5Y2RjMmItNDg5Yy00NjUwLThjMTEtNDc2OGUzNTBiYmM1XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg", alt: "Fight Club", width: 120, height: 160 },
    name: "Fight Club",
    description: "A nameless first person narrator (Edward Norton) attends support groups in attempt to subdue his emotional state and relieve his insomniac state. When he meets Marla (Helena Bonham Carter), another fake attendee of support groups, his life seems to become a little more bearable. However when he associates himself with Tyler (Brad Pitt) he is dragged into an underground fight club and soap making scheme. Together the two men spiral out of control and engage in competitive rivalry for love and power. When the narrator is exposed to the hidden agenda of Tyler's fight club, he must accept the awful truth that Tyler may not be who he says he is. Written by Rhiannon",
    type: "Movies",
    year:"1999",

 }, {
    image: { src: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg", alt: "Inception", width: 120, height: 160 },
    name: "Inception",
    description: "Dom Cobb is a skilled thief, the absolute best in the dangerous art of extraction, stealing valuable secrets from deep within the subconscious during the dream state, when the mind is at its most vulnerable. Cobb's rare ability has made him a coveted player in this treacherous new world of corporate espionage, but it has also made him an international fugitive and cost him everything he has ever loved. Now Cobb is being offered a chance at redemption. One last job could give him his life back but only if he can accomplish the impossible - inception. Instead of the perfect heist, Cobb and his team of specialists have to pull off the reverse: their task is not to steal an idea but to plant one. If they succeed, it could be the perfect crime. But no amount of careful planning or expertise can prepare the team for the dangerous enemy that seems to predict their every move. An enemy that only Cobb could have seen coming. Written by Warner Bros. Pictures",
    type: "Movies",
    year:"2010",

}, {
    image: { src: "https://images-na.ssl-images-amazon.com/images/M/MV5BNThjMzczMjctZmIwOC00NTQ4LWJhZWItZDdhNTk5ZTdiMWFlXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_UX182_CR0,0,182,268_AL_.jpg", alt: "Goodfellas", width: 120, height: 160 },
    name: "Goodfellas",
    description: "Henry Hill might be a small time gangster, who may have taken part in a robbery with Jimmy Conway and Tommy De Vito, two other gangsters who might have set their sights a bit higher. His two partners could kill off everyone else involved in the robbery, and slowly start to think about climbing up through the hierarchy of the Mob. Henry, however, might be badly affected by his partners' success, but will he consider stooping low enough to bring about the downfall of Jimmy and Tommy? Written by Colin Tinto ",
    type: "Movies",
    year:"1990",

  }, {
    image: { src: "https://images-na.ssl-images-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg", alt: "The Matrix", width: 120, height: 160 },
    name: "The Matrix",
    description: "Thomas A. Anderson is a man living two lives. By day he is an average computer programmer and by night a hacker known as Neo. Neo has always questioned his reality, but the truth is far beyond his imagination. Neo finds himself targeted by the police when he is contacted by Morpheus, a legendary computer hacker branded a terrorist by the government. Morpheus awakens Neo to the real world, a ravaged wasteland where most of humanity have been captured by a race of machines that live off of the humans' body heat and electrochemical energy and who imprison their minds within an artificial reality known as the Matrix. As a rebel against the machines, Neo must return to the Matrix and confront the agents: super-powerful computer programs devoted to snuffing out Neo and the entire human rebellion. Written by redcommander27",
    type: "Movies",
    year:"1999",

 }, {
    image: { src: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc5MDY1MjU5MF5BMl5BanBnXkFtZTgwNDM2OTE4MzE@._V1_UY268_CR4,0,182,268_AL_.jpg", alt: "Seven Samurai", width: 120, height: 160 },
    name: "Seven Samurai",
    description: "A veteran samurai, who has fallen on hard times, answers a village's request for protection from bandits. He gathers 6 other samurai to help him, and they teach the townspeople how to defend themselves, and they supply the samurai with three small meals a day. The film culminates in a giant battle when 40 bandits attack the village. Written by Colin Tinto",
    type: "Movies",
    year:"1954",

}, {
    image: { src: "https://images-na.ssl-images-amazon.com/images/M/MV5BNDJiNTEwMjMtOGQ1ZC00OTczLWFjZjctZWQ0MGJjZmFkMjcwXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg", alt: "City of God", width: 120, height: 160 },
    name: "City of God",
    description: "Brazil, 1960s, City of God. The Tender Trio robs motels and gas trucks. Younger kids watch and learn well...too well. 1970s: Li'l Zé has prospered very well and owns the city. He causes violence and fear as he wipes out rival gangs without mercy. His best friend Bené is the only one to keep him on the good side of sanity. Rocket has watched these two gain power for years, and he wants no part of it. Yet he keeps getting swept up in the madness. All he wants to do is take pictures. 1980s: Things are out of control between the last two remaining gangs...will it ever end? Welcome to the City of God.",
    type: "Movies",
    year:"2002",

  }, {
    image: { src: "https://images-na.ssl-images-amazon.com/images/M/MV5BYmJmM2Q4NmMtYThmNC00ZjRlLWEyZmItZTIwOTBlZDQ3NTQ1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg", alt: "Life Is Beautiful", width: 120, height: 160 },
    name: "Life Is Beautiful",
    description: "In 1930s Italy, a carefree Jewish book keeper named Guido starts a fairy tale life by courting and marrying a lovely woman from a nearby city. Guido and his wife have a son and live happily together until the occupation of Italy by German forces. In an attempt to hold his family together and help his son survive the horrors of a Jewish Concentration Camp, Guido imagines that the Holocaust is a game and that the grand prize for winning is a tank. Written by Anthony Hughes",
    type: "Movies",
    year:"1997",

  }
];

var filterAgeMax = Number.MAX_VALUE; 
var filterAgeMin = 0; 
var filterType = ""
window.onload=function(){
    filterAllPets();
}
function loadTableWithFilters(){
     var element = document.querySelector("#main-table-body");
      element.innerHTML="";
      var i;
      for(i=0;i<movies.length;i++)
      {
              
                var tableRow = document.createElement('tr');
                var tableCell = document.createElement('td');
                var Images = document.createElement('img');
                Images.setAttribute("src", movies[i].image.src);
                Images.setAttribute("width",movies[i].image.width);
                Images.setAttribute("height",movies[i].image.height);
                Images.setAttribute("alt",movies[i].image.alt);
                tableCell.appendChild(Images);
                tableRow.appendChild(tableCell);
                var tdiv1 = document.createElement('td');
                tableRow.appendChild(tdiv1);
                var head = document.createElement('h5');
                tdiv1.appendChild(head);
                var txt = document.createTextNode(""+movies[i].name+"");
                head.appendChild(txt);
                var para = document.createElement('p');
                var san = document.createElement('span');
                para.innerHTML = movies[i].description;
                tdiv1.appendChild(para);
                var txt2 = document.createTextNode("Year: " + movies[i].year);
                san.appendChild(txt2);
                tdiv1.appendChild(san);
              
               
                element.appendChild(tableRow);
              
}
}
function filterAllPets(){
    filterType="";

    loadTableWithFilters();
}

