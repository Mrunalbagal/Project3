
function PageHeadSize() {
    function sizing(x) {
        let pageLogoColumn = document.getElementById("pageLogoColumn");
        let pageHeadColumn = document.getElementById("pageHeadColumn");
        let pageHeadText = document.getElementById("pageHeadText");
        if (x.matches) {
            pageLogoColumn.setAttribute("class", "col-3");
            pageHeadColumn.setAttribute("class", "col-9");
            pageHeadText.innerHTML = "HSS";
        } else {
            pageLogoColumn.setAttribute("class", "col-2");
            pageHeadColumn.setAttribute("class", "col-10");
            pageHeadText.innerHTML = "Hot Sports Soccer";
        }
    }
    let x = window.matchMedia("(max-width: 1050px)");
    sizing(x)                    
    x.addListener(sizing) 
}
PageHeadSize()

function closeNavOnSmallmedia() {
    function sizing(x) {
        let nav = document.getElementById("navbarNav");
        if (x.matches) {
            nav.setAttribute("class", " navbar-collapse collapse");
        } else {
            nav.setAttribute("class", "show navbar-collapse");
        }
    }
    let x = window.matchMedia("(max-width: 768px)");
    sizing(x)                    
    x.addListener(sizing) 
}
closeNavOnSmallmedia()

function show(shown, hidden1, hidden2, hidden3, hidden4, hidden5) {
    document.getElementById(shown).style.display = 'block';
    document.getElementById(hidden1).style.display = 'none';
    document.getElementById(hidden2).style.display = 'none';
    document.getElementById(hidden3).style.display = 'none';
    document.getElementById(hidden4).style.display = 'none';
    document.getElementById(hidden5).style.display = 'none';
    return false;
}


function showHome() {

    function createContent() {
        let homeContent = document.getElementById("home");
        let card = document.createElement("div");
        card.setAttribute("class", "card card w-100 border-0");
        homeContent.append(card);
        let cardBody = document.createElement("div");
        cardBody.setAttribute("class", "card-body");
        card.append(cardBody);
        let cardImage = document.createElement("img");
        cardImage.setAttribute("class", "card-img-top img-fluid rounded align-self-center homeLogo");
        cardImage.setAttribute("src", "home_logo.jpg");
        cardBody.append(cardImage);
        let cardText = document.createElement("div");
        cardText.setAttribute("class", "card-text");
        cardBody.append(cardText);
        let homeH1 = document.createElement("h1");
        homeH1.setAttribute("class", "homeH1");
        homeH1.innerHtml = "Welcome to Hot Sports Soccer!"
        cardText.append(homeH1);
        let homePara1 = document.createElement("p");
        homePara1.innerHTML = "With our interactive Web App you have all important information of the Bundesliga handy. You can easily:<br><br>"
        cardText.append(homePara1);
        let homePara2ul = document.createElement("ul");
        homePara1.append(homePara2ul);
        let homePara2li1 = document.createElement("li");
        homePara2li1.innerHTML = "check out all information of all teams of the league";
        homePara2ul.append(homePara2li1);
        let homePara2li2 = document.createElement("li");
        homePara2li2.innerHTML = "access the current standings of the league";
        homePara2ul.append(homePara2li2);
        let homePara2li3 = document.createElement("li");
        homePara2li3.innerHTML = "view all upcoming matches of the current season";
        homePara2ul.append(homePara2li3);
        let homePara2li4 = document.createElement("li");
        homePara2li4.innerHTML = "chat with other Hot Sports Soccer Fans!";
        homePara2ul.append(homePara2li4);
        let homePara3 = document.createElement("p");
        homePara3.innerHTML = "We hope you like our App. Feel free to send us recommendation or ask questions. <br> <br> <strong>Your Hot Sports Soccer Team!<strong>";
        homePara1.append(homePara3);
    }
    createContent()
}
showHome()

function showAbout() {
    
    function createContent() {
        let homeContent = document.getElementById("about");
        let card = document.createElement("div");
        card.setAttribute("class", "card card w-100 border-0");
        homeContent.append(card);
        let cardBody = document.createElement("div");
        cardBody.setAttribute("class", "card-body");
        card.append(cardBody);
        let cardImage = document.createElement("img");
        cardImage.setAttribute("class", "card-img-top img-fluid rounded align-self-center AboutUsLogo");
        cardImage.setAttribute("src", "About_Us_Logo.Png");
        cardBody.append(cardImage);
        let cardText = document.createElement("div");
        cardText.setAttribute("class", "card-text");
        cardBody.append(cardText);
        let homeH1 = document.createElement("h1");
        homeH1.setAttribute("class", "homeH1");
        homeH1.innerHtml = "Welcome to Hot Sports Soccer!"
        cardText.append(homeH1);
        let homePara1 = document.createElement("p");
        homePara1.innerHTML = "With our interactive Web App you have all important information of the Bundesliga handy. You can easily:<br><br>"
        cardText.append(homePara1);
        let homePara2ul = document.createElement("ul");
        homePara1.append(homePara2ul);
        let homePara2li1 = document.createElement("li");
        homePara2li1.innerHTML = "check out all information of all teams of the league";
        homePara2ul.append(homePara2li1);
        let homePara2li2 = document.createElement("li");
        homePara2li2.innerHTML = "access the current standings of the league";
        homePara2ul.append(homePara2li2);
        let homePara2li3 = document.createElement("li");
        homePara2li3.innerHTML = "view all upcoming matches of the current season";
        homePara2ul.append(homePara2li3);
        let homePara2li4 = document.createElement("li");
        homePara2li4.innerHTML = "chat with other Hot Sports Soccer Fans!";
        homePara2ul.append(homePara2li4);
        let homePara3 = document.createElement("p");
        homePara3.innerHTML = "We hope you like our App. Feel free to send us recommendation or ask questions. <br> <br>Your Hot sports Soccer Team";
        homePara1.append(homePara3);

        let cardContent = document.createElement("p")
        cardText.append(cardContent);
        let Btn1 = document.createElement("button"); 
        Btn1.setAttribute("class", "btn btn-secondary btn-block AboutUsLogo");
        Btn1.setAttribute("type", "button");
        Btn1.setAttribute("data-toggle", "collapse");
        Btn1.setAttribute("data-target", "#collapseDataPrivacy");
        Btn1.setAttribute("aria-expanded", "false");
        Btn1.setAttribute("aria-controls", "collapseDataPrivacy");
        Btn1.innerHTML = "Data Privacy Information";
        cardContent.append(Btn1);
        let DPInfo = document.createElement("div");
        DPInfo.setAttribute("class", "collapse");
        DPInfo.setAttribute("id", "collapseDataPrivacy");
        cardText.append(DPInfo);
        let DPInfoCard = document.createElement("div");
        DPInfoCard.setAttribute("class", "card card-body");
        DPInfoCard.innerHTML = " We value your privacy and are compliant with the EU GDPR.<br> We do not process any of your data except data, that you enter into our chat. Chat data is saved on a data base and visible to other chat participants. <br>Personal data are all information which relate to an identified or identifiable natural person. A natural person is one who can be identified, directly or indirectly, in particular by reference to an identifier such as a name, an identification number, location data, an online identifier or to one or more factors specific to the physical, physiological, genetic, mental, economic, cultural or social identity of that natural person. This includes, for example, the name, personalized email addresses, the residential address, the telephone number or the date of birth.<br> <br>Please contact us if you have questions with regards to the processing of personal data or your rights as a data subject under GDPR. <br> <br> Your HSS data protection Team!";
        DPInfo.append(DPInfoCard);
    }
    createContent()

}
showAbout()



function showTable() {
    

    
    fetch("https://www.thesportsdb.com/api/v1/json/1/lookuptable.php?l=4331&s=1920", {
            method: "GET",
        })
        .then(function (response) {
            console.log(response);
            return response.json();
        })
        .then(function (json) {
            table = json.table;
            showStandings(table);

        })

        .catch(function (error) {
            console.log(error);
        });


    function createTableHead() { 
        let standings = document.getElementById("table");
        let container1 = document.createElement("div");
        container1.setAttribute("class", "container-fluid");
        standings.append(container1);
        let row1 = document.createElement("div");
        row1.setAttribute("class", "row");
        container1.append(row1);
        let column1 = document.createElement("div");
        column1.className = "col";
        row1.append(column1);
        let stangingsTable = document.createElement("table");
        stangingsTable.setAttribute("class", "table ");
        stangingsTable.setAttribute("id", "standingsTable");
        column1.append(stangingsTable);
        let tableHead1 = document.createElement("thead");
        tableHead1.setAttribute("class", "thead-dark");
        stangingsTable.append(tableHead1);
        let tableRow1 = document.createElement("tr");
        tableHead1.append(tableRow1);
        let th1 = document.createElement("th");
        th1.setAttribute("scope", "col");
        tableRow1.append(th1);
        th1.innerHTML = "Rnk";
        let th2 = document.createElement("th");
        th2.setAttribute("scope", "col");
        tableRow1.append(th2);
        th2.innerHTML = "Team";
        let th3 = document.createElement("th");
        th3.setAttribute("scope", "col");
        tableRow1.append(th3);
        th3.innerHTML = "Pld";
        let th4 = document.createElement("th");
        th4.setAttribute("Points", "col");
        tableRow1.append(th4);
        th4.innerHTML = "Pts";
        let th5 = document.createElement("th");
        th5.setAttribute("scope", "col");
        th5.setAttribute("class", "hide-xs");//when media is small then hide this.
        tableRow1.append(th5);
        th5.innerHTML = "W";
        let th6 = document.createElement("th");
        th6.setAttribute("scope", "col");
        th6.setAttribute("class", "hide-xs")
        tableRow1.append(th6);
        th6.innerHTML = "D";
        let th7 = document.createElement("th");
        th7.setAttribute("scope", "col");
        th7.setAttribute("class", "hide-xs")
        tableRow1.append(th7);
        th7.innerHTML = "L";
        let th8 = document.createElement("th");
        th8.setAttribute("scope", "col");
        tableRow1.append(th8);
        th8.innerHTML = "Dif";
    }
    createTableHead()

    function showStandings(data) { 
        let events = document.getElementById("standingsTable");
        for (var i = 0; i < data.length; i++) {
            let tableBody = document.createElement("tbody");
            events.append(tableBody);
            let tableRow2 = document.createElement("tr");
            tableBody.append(tableRow2);
            let tableHead2 = document.createElement("th");
            tableHead2.setAttribute("scope", "row");
            tableRow2.append(tableHead2);
            let td1 = document.createElement("td");
            td1.innerHTML = [i+1];
            tableHead2.append(td1);
            let td2 = document.createElement("td");
            td2.innerHTML = data[i].name;
            tableRow2.append(td2);
            let td3 = document.createElement("td");
            td3.innerHTML = data[i].played;
            tableRow2.append(td3);
            let td4 = document.createElement("td");
            td4.innerHTML = data[i].total;
            tableRow2.append(td4);
            let td5 = document.createElement("td");
            td5.setAttribute("class", "hide-xs")
            td5.innerHTML = data[i].win;
            tableRow2.append(td5);
            let td6 = document.createElement("td");
            td6.setAttribute("class", "hide-xs")
            td6.innerHTML = data[i].draw;
            tableRow2.append(td6);
            let td7 = document.createElement("td");
            td7.setAttribute("class", "hide-xs")
            td7.innerHTML = data[i].loss;
            tableRow2.append(td7);
            let td8 = document.createElement("td");
            td8.innerHTML = data[i].goalsdifference;
            tableRow2.append(td8);
        }
    }
}
showTable()


function showMatches() {
    
    


    fetch("https://www.thesportsdb.com/api/v1/json/1/eventsseason.php?id=4331&s=1920", {
            method: "GET",
        })
        .then(function (response) {
            console.log(response);
            return response.json();
        })
        .then(function (json) {
            events = json.events;
            showEvents(events);

        })

        .catch(function (error) {
            console.log(error);
        });


    function createTableHead() {
        let events = document.getElementById("matches");
        let tableCard = document.createElement("div");
        tableCard.setAttribute("class", "card border-0");
        events.append(tableCard);
        let cardBody = document.createElement("div");
        cardBody.setAttribute("class", "card-body");
        tableCard.append(cardBody);
        let eventTable = document.createElement("table");
        eventTable.setAttribute("class", "table");
        eventTable.setAttribute("id", "matchTable");
        cardBody.append(eventTable);
        let tableHead1 = document.createElement("thead");
        tableHead1.setAttribute("class", "thead-dark");
        eventTable.append(tableHead1);
        let tableRow1 = document.createElement("tr");
        tableHead1.append(tableRow1);
        let th1 = document.createElement("th");
        th1.setAttribute("scope", "col");
        tableRow1.append(th1);
        th1.innerHTML = "Matchday";
        let th2 = document.createElement("th");
        th2.setAttribute("scope", "col");
        tableRow1.append(th2);
        th2.innerHTML = "Home vs Guest";
        let th3 = document.createElement("th");
        th3.setAttribute("scope", "col");
        tableRow1.append(th3);
        th3.innerHTML = "Date";
    }
    createTableHead()

    function showEvents(data) {
        let events1 = document.getElementById("matchTable");
        for (var i = 0; i < data.length; i++) {
            let tableBody = document.createElement("tbody");
            events1.append(tableBody);
            let tableRow2 = document.createElement("tr");
            tableBody.append(tableRow2);
            let tableHead2 = document.createElement("th");
            tableHead2.setAttribute("scope", "row");
            tableRow2.append(tableHead2);
            let td1 = document.createElement("td");
            td1.innerHTML = data[i].intRound;
            tableHead2.append(td1);
            let td2 = document.createElement("td");
            td2.innerHTML = data[i].strEvent;
            tableRow2.append(td2);
            let td3 = document.createElement("td");
            td3.innerHTML = data[i].dateEvent;
            tableRow2.append(td3);
        }
    }



}
showMatches()


function showTeams() {
    



    fetch("https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=German%20Bundesliga", {
            method: "GET",
        })
        .then(function (response) {
            console.log(response);
            return response.json();
        })
        .then(function (json) {
            teams = json.teams;
            createTableContent(teams);

        })

        .catch(function (error) {
            console.log(error);
        });


    function createTableContent(data) {
        let teams = document.getElementById("teams");
        let teamPageCard = document.createElement("div");
        teamPageCard.setAttribute("class", "card text-center border-0");
        teams.append(teamPageCard);
        let cardDeck = document.createElement("div");
        cardDeck.setAttribute("class", "card-columns");
        teamPageCard.append(cardDeck);
        for (var i = 0; i < data.length; i++) {
            let card = document.createElement("div");
            card.setAttribute("class", "card text-center");
            cardDeck.append(card);
            let cardHeader = document.createElement("div");
            cardHeader.setAttribute("class", "card-header  font-weight-bold");
            cardHeader.innerHTML = data[i].strTeam;
            card.append(cardHeader);
            let cardImage = document.createElement("img");
            cardImage.setAttribute("class", "card-img-top align-self-center teamLogo");
            cardImage.setAttribute("src", data[i].strTeamBadge);
            card.append(cardImage);
            let cardBody = document.createElement("div");
            cardBody.setAttribute("class", "card-body");
            card.append(cardBody);
            let cardText = document.createElement("div");
            cardText.setAttribute("class", "card-text");
            cardText.innerHTML = "Learn more about club and stadium";
            cardBody.append(cardText);
            let cardContent = document.createElement("p")
            cardText.append(cardContent);
            let Btn2 = document.createElement("button"); 
            Btn2.setAttribute("class", "btn btn-secondary btn-block");
            Btn2.setAttribute("type", "button");
            Btn2.setAttribute("data-toggle", "collapse");
            Btn2.setAttribute("data-target", "#collapseTwo" + data[i].idTeam);
            Btn2.setAttribute("aria-expanded", "false");
            Btn2.setAttribute("aria-controls", "collapseOne");
            Btn2.innerHTML = "Team Info";
            cardContent.append(Btn2);
            let TeamInfo = document.createElement("div"); 
            TeamInfo.setAttribute("class", "collapse");
            TeamInfo.setAttribute("id", "collapseTwo" + data[i].idTeam); 
            cardText.append(TeamInfo);
            let TeamInfoCard = document.createElement("div");
            TeamInfoCard.setAttribute("class", "card card-body");
            TeamInfoCard.innerHTML = data[i].strDescriptionEN;
            TeamInfo.append(TeamInfoCard);
            let Btn1 = document.createElement("button"); 
            Btn1.setAttribute("class", "btn btn-secondary btn-block");
            Btn1.setAttribute("type", "button");
            Btn1.setAttribute("data-toggle", "collapse");
            Btn1.setAttribute("data-target", "#collapseOne" + data[i].idTeam);
            Btn1.setAttribute("aria-expanded", "false");
            Btn1.setAttribute("aria-controls", "collapseOne");
            Btn1.innerHTML = "Stadium: " + data[i].strStadium;
            cardContent.append(Btn1);
            let StdnInfo = document.createElement("div"); 
            StdnInfo.setAttribute("class", "collapse");
            StdnInfo.setAttribute("id", "collapseOne" + data[i].idTeam);  cardText.append(StdnInfo);
            let StdnInfoCard = document.createElement("div");
            StdnInfoCard.setAttribute("class", "card card-body");
            StdnInfoCard.innerHTML = data[i].strStadiumDescription + "<br> <br>";
            StdnInfo.append(StdnInfoCard);
            let StdnImg = document.createElement("img");
            StdnImg.setAttribute("src", data[i].strStadiumThumb);
            StdnImg.setAttribute("class", "stadiumImg img-fluid rounded");
            StdnImg.setAttribute("alt", "Photo of the clubs stadium");
            StdnInfoCard.append(StdnImg);
            let iframe = document.createElement("iframe");  iframe.setAttribute("class", "iframe img-fluid rounded");
            iframe.setAttribute("src", "https://www.google.com/maps/embed/v1/place?key=AIzaSyDR2GPLQYU7Jr02XMmhLeGN3Hm1FjYrzRQ&q=" + data[i].strStadium);
            StdnInfoCard.append(iframe);

            let cardFooter = document.createElement("div");
            cardFooter.setAttribute("class", "card-footer");
            card.append(cardFooter);
            let URL = document.createElement("a");
            URL.setAttribute("href", "https://" + data[i].strWebsite);
            URL.innerHTML = data[i].strWebsite
            cardFooter.append(URL);

        }
    }
}
showTeams()


function showChat() {
    
    function createContent() {
        let chatContent = document.getElementById("chat");
        let container1 =  document.createElement("div");
        container1.setAttribute("class", "container-fluid");
        chatContent.append(container1);
        let chatRow = document.createElement("row");
        container1.append(chatRow);
        let chatCol = document.createElement("div");
        chatCol.setAttribute("class", "col");
        chatRow.append(chatCol);
        let container = document.createElement("div");
        container.setAttribute("class", "container-fluid");
        chatCol.append(container);
        let LoggedIn = document.createElement("div");
        container.append(LoggedIn);
        let chatWindow = document.createElement("div");
        chatWindow.setAttribute("id", "chatWindow");
        LoggedIn.append(chatWindow);
        let postedMsg = document.createElement("div");
        postedMsg.setAttribute("id", "postedMsg");
        chatWindow.append(postedMsg);
        
        let container2 = document.createElement("div");
        container2.setAttribute("class", "container-fluid fixed-bottom");
        container2.setAttribute("id", "Chatcontainer2");
        chatContent.append(container2);        
        let InputRow = document.createElement("div");
        InputRow.setAttribute("class", "row stickyBottom");
        container2.append(InputRow);
        let InputCol = document.createElement("div");
        InputCol.setAttribute("class", "col");
        InputRow.append(InputCol);

        let inputGroup = document.createElement("div");
        inputGroup.setAttribute("class", "input-group mb-3");
        InputCol.append(inputGroup);
        let inputGroup2 = document.createElement("div");
        inputGroup2.setAttribute("class", "input-group-prepend");
        inputGroup.append(inputGroup2);
        let LogInBtn = document.createElement("button");
        LogInBtn.setAttribute("class", "btn btn-outline-secondary");
        LogInBtn.setAttribute("type", "button");
        LogInBtn.setAttribute("id", "login");
        LogInBtn.setAttribute("onclick", "logIn(); scrollDown()");
        LogInBtn.innerHTML = "Login";
        inputGroup2.append(LogInBtn);
        
        let inputGroup2b = document.createElement("div");
        inputGroup2b.setAttribute("class", "input-group-prepend");
        inputGroup.append(inputGroup2b);
        let clearHistoryBtn = document.createElement("button");
        clearHistoryBtn.setAttribute("class", "btn btn-outline-danger");
        clearHistoryBtn.setAttribute("onclick", "clearHistory()");
        clearHistoryBtn.innerHTML = "Clear";
        inputGroup2b.append(clearHistoryBtn);
        
        
        let InputRow2 = document.createElement("div");
        InputRow2.setAttribute("class", "row stickyBottom");
        container2.append(InputRow2);
        let InputCol2 = document.createElement("div");
        InputCol2.setAttribute("class", "col");
        InputRow2.append(InputCol2);
        let inputGroupB = document.createElement("div");
        inputGroupB.setAttribute("class", "input-group mb-3");
        InputCol2.append(inputGroupB);
        let inputGroup2B = document.createElement("div");
        inputGroup2B.setAttribute("class", "input-group-prepend");
        inputGroupB.append(inputGroup2B);
        let sendBtn = document.createElement("Button");
        sendBtn.setAttribute("type", "button)");
        sendBtn.setAttribute("class", "btn btn-outline-primary");
        sendBtn.setAttribute("onclick", "sendMsg(); clearInput(); scrollDownDelayed()");
        sendBtn.innerHTML = "Send";
        inputGroup2B.append(sendBtn);
        let msgInput = document.createElement("input");
        msgInput.setAttribute("class", "form-control");
        msgInput.setAttribute("id", "message");
        msgInput.setAttribute("type", "text");
        inputGroupB.append(msgInput);

    }
    createContent()
}
showChat()


var provider = new firebase.auth.GoogleAuthProvider();
console.log(provider);
let username = "";
let email = "";

var database = firebase.database();

console.log(database);

function logIn() {
    firebase
        .auth()
        .signInWithPopup(provider)
        .then(function (result) {
            
            var token = result.credential.accessToken;
            
            var user = result.user;
            
            console.log(result);
            console.log("user", user);
            username = user.displayName;
            email = user.email;
            getPosts();
        })
        .catch(function (error) {
            
            var errorCode = error.code;
            var errorMessage = error.message;
            
            var email = error.email;
           
            var credential = error.credential;
       
            console.log("error", error);
        });
}

var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;


function sendMsg() {
    let messageContent = document.getElementById("message").value;
    console.log(messageContent);
    
    var postData = {
        author: username,
        body: messageContent,
        timestamp: dateTime, 
    };


    var newPostKey = firebase
        .database()
        .ref()
        .child("postedMsg")
        .push().key;

    
    var updates = {};
    updates["/postedMsg/" + newPostKey] = postData;
    getPosts();
    return firebase
        .database()
        .ref()
        .update(updates);
        
}
function clearInput() {
    document.getElementById("message").value=null;
}

function scrollDown() {
 let scrollingElement = (document.scrollingElement || document.body);
  scrollingElement.scrollTop = scrollingElement.scrollHeight;  
}

function scrollDownDelayed() {
  setTimeout(function() {scrollDown();}, 200);  
}


function getPosts() {
    let allPosts = firebase
        .database()
        .ref("postedMsg/")
        .once("value")
        .then(function (snapshot) {
            let allPosts = snapshot.val();
           
            let chat = document.getElementById("postedMsg");
            let template = "";
            for (key in allPosts) {
                console.log(allPosts[key].author);
                let author = allPosts[key].author || "Anonymous" ;
                let message = allPosts[key].body;
                let timeStamp = allPosts[key].timestamp;

                template += `<div class="chatContainer">
                            <p class="msgAuthor">${author}:</p>
                            <p>${message}</p>
                            <span class="time-right">${timeStamp}</span>
                           
                        </div>`;
            }
            chat.innerHTML = template;
        });
}


function clearHistory() {                  
 var ref = database.ref(); 
 ref.remove();  
}

