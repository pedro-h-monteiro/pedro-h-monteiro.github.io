var flag = 0;

function checkWeather()
{
    var apiKey = '4f270ef56e942e50b5bb2c4fb3334886';
    var i = 0;
    var weaInput = document.getElementById('cityInput').value;
    var localWeaInfo = document.getElementById('localWeaInfo');

    //replace list with api list of locations
    var locations = {
        Abrantes: 2272447,
        Coimbra: 2740637,
        Carregueira: 2270070,
        Lisboa: 2267057,
        Faro: 2268339,
        Figueira: 2739590,
        Porto: 2735943,
        Freamunde: 2739285,
        Tomar: 2262644,
        Alentejo: 2734215,
        Entroncamento: 2268575,
        Ereira: 2740005,
    };

    var lenghtLocal = Object.keys(locations).length;

    //console.log(weaInput);
    //console.log(Object.keys(locations));

    for (i = 0; i <= lenghtLocal; i++)
    {
        if (weaInput == Object.keys(locations)[i])
        {
            var userLocal = Object.keys(locations)[i];
            
            //console.log(Object.values(locations)[i]);

            var id = Object.values(locations)[i];
            
            fetch('http://api.openweathermap.org/data/2.5/forecast?id=' + id + '&APPID=4f270ef56e942e50b5bb2c4fb3334886&units=metric')
            .then(res => res.json())
            .then((json) =>
            {
                //console.log('JSON log: ', json);
                /*Local Weather Card*/
                document.getElementById('error').style.display = "none"; 
                document.getElementById('error').text = "";

                document.getElementById('localW').innerHTML = weaInput;
                document.getElementById('weaInput').style.display = "none";

                document.getElementById('localWeaInfo').style.display = "block";

                document.getElementById('shortSumLocal').innerHTML = json.list[0].weather[0].main;

                var bgc = json.list[0].weather[0].description;

                if (bgc.includes("rain"))
                {
                    document.getElementsByClassName("icon-today")[0].style.backgroundImage = "url('images/icons/cloud-rain.svg')";
                    document.getElementsByClassName("material-card-weather")[0].style.backgroundColor = "#8989bb";
                    document.getElementsByClassName("material-card-weather")[0].style.backgroundImage = "linear-gradient(315deg, #8989bb 0%, #a5a4cb 74%)";
                }
                else if (bgc.includes("clouds"))
                {
                    document.getElementsByClassName("icon-today")[0].style.backgroundImage = "url('images/icons/cloud.svg')";
                    document.getElementsByClassName("material-card-weather")[0].style.backgroundColor = "#8989bb";
                    document.getElementsByClassName("material-card-weather")[0].style.backgroundImage = "linear-gradient(315deg, #8989bb 0%, #a5a4cb 74%)";
                }
                else if (bgc.includes("sun"))
                {
                    document.getElementsByClassName("icon-today")[0].style.backgroundImage = "url('images/icons/sun.svg')";
                    document.getElementsByClassName("material-card-weather")[0].style.backgroundColor = "#9eabe4";
                    document.getElementsByClassName("material-card-weather")[0].style.backgroundImage = "linear-gradient(315deg, #9eabe4 0%, #77eed8 74%)";
                }
                else if (bgc.includes("clear"))
                {
                    document.getElementsByClassName("icon-today")[0].style.backgroundImage = "url('images/icons/sun.svg')";
                    document.getElementsByClassName("material-card-weather")[0].style.backgroundColor = "#9eabe4";
                    document.getElementsByClassName("material-card-weather")[0].style.backgroundImage = "linear-gradient(315deg, #9eabe4 0%, #77eed8 74%)";
                }

                document.getElementById('tempLocal').innerHTML = json.list[0].main.temp + "º";
                document.getElementById('maxLocal').innerHTML = json.list[0].main.temp_max + " ºC";
                document.getElementById('minLocal').innerHTML = json.list[0].main.temp_min + " ºC";;
                document.getElementById('windLocal').innerHTML = json.list[0].wind.speed + " Km/h";
                document.getElementById('humLocal').innerHTML = json.list[0].main.humidity + " %";

                if (json.list[0].hasOwnProperty('rain'))
                {
                    document.getElementById('preciLocal').innerHTML = json.list[0].rain["3h"] + " in";
                }
                else
                {
                    document.getElementById('preciLocal').innerHTML = "N/A";
                }
                document.getElementById('pressLocal').innerHTML = json.list[0].main.pressure + " hPa";
                /*END OF END OF END OF*/

                /*Weather Forecast*/
                document.getElementById('localW2').innerHTML = " - " + weaInput;
                document.getElementById('forecB').style.display = "none";

                document.getElementById('localWeaForec').style.display = "block";
                document.getElementById('shortSumLocal2').innerHTML = json.list[0].weather[0].main;

                var bgc2 = json.list[5].weather[0].description;

                if (bgc2.includes("rain"))
                {
                    document.getElementsByClassName("icon-tomorrow")[0].style.backgroundImage = "url('images/icons/cloud-rain.svg')";
                    document.getElementsByClassName("material-card-weather-forec")[0].style.backgroundColor = "#8989bb";
                    document.getElementsByClassName("material-card-weather-forec")[0].style.backgroundImage = "linear-gradient(315deg, #8989bb 0%, #a5a4cb 74%)";
                }
                else if (bgc.includes("clouds"))
                {
                    document.getElementsByClassName("icon-tomorrow")[0].style.backgroundImage = "url('images/icons/cloud.svg')";
                    document.getElementsByClassName("material-card-weather-forec")[0].style.backgroundColor = "#8989bb";
                    document.getElementsByClassName("material-card-weather-forec")[0].style.backgroundImage = "linear-gradient(315deg, #8989bb 0%, #a5a4cb 74%)";
                }
                else if (bgc2.includes("sun"))
                {
                    document.getElementsByClassName("icon-tomorrow")[0].style.backgroundImage = "url('images/icons/sun.svg')";
                    document.getElementsByClassName("material-card-weather-forec")[0].style.backgroundColor = "#9eabe4";
                    document.getElementsByClassName("material-card-weather-forec")[0].style.backgroundImage = "linear-gradient(315deg, #9eabe4 0%, #77eed8 74%)";
                }
                else if (bgc.includes("clear"))
                {
                    document.getElementsByClassName("icon-tomorrow")[0].style.backgroundImage = "url('images/icons/sun.svg')";
                    document.getElementsByClassName("material-card-weather-forec")[0].style.backgroundColor = "#9eabe4";
                    document.getElementsByClassName("material-card-weather-forec")[0].style.backgroundImage = "linear-gradient(315deg, #9eabe4 0%, #77eed8 74%)";
                }

                document.getElementById('tempLocalForec').innerHTML = json.list[5].main.temp + "º";
                document.getElementById('maxLocalForec').innerHTML = json.list[5].main.temp_max + " ºC";
                document.getElementById('minLocalForec').innerHTML = json.list[5].main.temp_min + " ºC";
                document.getElementById('windLocalForec').innerHTML = json.list[5].wind.speed + " Km/h";
                document.getElementById('humLocalForec').innerHTML = json.list[5].main.humidity + " %";

                if (json.list[5].hasOwnProperty('rain'))
                {
                    document.getElementById('preciLocalForec').innerHTML = json.list[5].rain["3h"] + " in";
                }
                else
                {
                    document.getElementById('preciLocalForec').innerHTML = "N/A";
                }
                document.getElementById('pressLocalForec').innerHTML = json.list[5].main.pressure + " hPa";

                /*END OF END OF END OF*/
                /*[4] is the next day at midnight
                  [5] is the next day at 3AM it moves 3 hours at a time*/
            
            }).catch(err => console.error(err));
        }
        else if (weaInput != userLocal)
        {
            document.getElementById('error').style.display = "block";
            document.getElementById('error').innerHTML = "Please input a valid location, try 'Abrantes'";
        }
    }
}

timeUp();

var exacTime;

function timeUp ()
{
    var time = new Date();
    var hour = time.getHours();
    var minutes = time.getMinutes();
    exacTime = hour + 'H:' + minutes + 'M';
}
setInterval(timeUp, 10000);

//const notifications = document.querySelector("div.notifications");

function clrNotif()
{
    document.getElementById("noNoti").innerHTML = "There are no new notifications."
    document.getElementById("noti").innerHTML = "";
    document.getElementById("notiClr").style.display = "none";
}

function clrInputs()
{
    document.querySelector("#response").innerHTML = "";
    document.querySelector('.material-card-settings').style.height = "350px";
    document.querySelector(".clr-btn2").style.display = "none";
    document.querySelector("#text_to_recive").value = "";
}

function fireAlarmEnable()
{
    var notifications = document.querySelector("div.notifications");
    document.getElementById("noNoti").innerHTML = 'There are new notifications!'
    document.getElementById("notiClr").style.display = "block";
    document.getElementById("noti").innerHTML += '<p style="color: #fff; background-color: red;"><img src="images/icons/volume-1.svg">The alarm was enabled at ' + exacTime + '</p>';
    notifications.scrollTop = Math.pow(10, 10); //To scroll notifications as they keep being added
    document.getElementById("buzzerstate").innerHTML = "Enabled";
    document.getElementById("buzzerstate").style.color = "red";
}

function fireAlarmDisable()
{
    var notifications = document.querySelector("div.notifications");
    document.getElementById("noNoti").innerHTML = 'There are new notifications!'
    document.getElementById("notiClr").style.display = "block";
    document.getElementById("noti").innerHTML += '<p style="color: #fff; background-color: green;"><img src="images/icons/volume-x.svg">The alarm was disabled at ' + exacTime + '</p>';
    notifications.scrollTop = Math.pow(10, 10);
    document.getElementById("buzzerstate").innerHTML = "Disabled";
    document.getElementById("buzzerstate").style.color = "green";
}

function frontDoorOpen()
{
    var notifications = document.querySelector("div.notifications");
    document.getElementById("noNoti").innerHTML = 'There are new notifications!'
    document.getElementById("notiClr").style.display = "block";
    document.getElementById("noti").innerHTML += '<p style="color: #fff; background-color: red;"><img src="images/icons/shield-off.svg">The front door was opened at ' + exacTime + '</p>';
    document.getElementById("noti").innerHTML += '<p style="color: #fff; background-color: red;"><img src="images/icons/volume-1.svg">The alarm was enabled at ' + exacTime + '</p>';
    notifications.scrollTop = Math.pow(10, 10);
    document.getElementById("ledFDState").innerHTML = "Open";
    document.getElementById("ledFDState").style.color = "red";
    document.getElementById("buzzerstate").innerHTML = "Enabled";
    document.getElementById("buzzerstate").style.color = "red";
}
function frontDoorClose()
{
    var notifications = document.querySelector("div.notifications");
    document.getElementById("noNoti").innerHTML = 'There are new notifications!'
    document.getElementById("notiClr").style.display = "block";
    document.getElementById("noti").innerHTML += '<p style="color: #fff; background-color: green;"><img src="images/icons/shield.svg">The front door was closed at ' + exacTime + '</p>';
    notifications.scrollTop = Math.pow(10, 10);
    document.getElementById("ledFDState").innerHTML = "Closed";
    document.getElementById("ledFDState").style.color = "green";
}
function garageDoorOpen()
{
    var notifications = document.querySelector("div.notifications");
    document.getElementById("noNoti").innerHTML = 'There are new notifications!'
    document.getElementById("notiClr").style.display = "block";
    document.getElementById("noti").innerHTML += '<p style="color: #fff; background-color: red;"><img src="images/icons/shield-off.svg">The garage door was opened at ' + exacTime + '</p>';
    document.getElementById("noti").innerHTML += '<p style="color: #fff; background-color: red;"><img src="images/icons/volume-1.svg">The alarm was enabled at ' + exacTime + '</p>';
    notifications.scrollTop = Math.pow(10, 10);
    document.getElementById("ledGDState").innerHTML = "Open";
    document.getElementById("ledGDState").style.color = "red";
    document.getElementById("buzzerstate").innerHTML = "Enabled";
    document.getElementById("buzzerstate").style.color = "red";
}
function garageDoorClose()
{
    var notifications = document.querySelector("div.notifications");
    document.getElementById("noNoti").innerHTML = 'There are new notifications!'
    document.getElementById("notiClr").style.display = "block";
    document.getElementById("noti").innerHTML += '<p style="color: #fff; background-color: green;"><img src="images/icons/shield.svg"> The garage door was closed at ' + exacTime + '</p>';
    notifications.scrollTop = Math.pow(10, 10);
    document.getElementById("ledGDState").innerHTML = "Closed";
    document.getElementById("ledGDState").style.color = "green";
}
function lrOn()
{
    var notifications = document.querySelector("div.notifications");
    document.getElementById("noNoti").innerHTML = 'There are new notifications!'
    document.getElementById("notiClr").style.display = "block";
    document.getElementById("noti").innerHTML += '<p style="color: #111; background-color: #ffd95a;"><img src="images/icons/zap.svg">The living room light was turned on at ' + exacTime + '</p>';
    notifications.scrollTop = Math.pow(10, 10);
    document.getElementById("ledLRState").innerHTML = "On";
    document.getElementById("ledLRState").style.color = "#ffd95a";
}
function lrOff()
{
    var notifications = document.querySelector("div.notifications");
    document.getElementById("noNoti").innerHTML = 'There are new notifications!'
    document.getElementById("notiClr").style.display = "block";
    document.getElementById("noti").innerHTML += '<p style="color: #fff; background-color: #999;"><img src="images/icons/zap-off.svg">The living room light was turned off at ' + exacTime + '</p>';
    notifications.scrollTop = Math.pow(10, 10);
    document.getElementById("ledLRState").innerHTML = "Off";
    document.getElementById("ledLRState").style.color = "#999";
}
function brOn()
{
    var notifications = document.querySelector("div.notifications");
    document.getElementById("noNoti").innerHTML = 'There are new notifications!'
    document.getElementById("notiClr").style.display = "block";
    document.getElementById("noti").innerHTML += '<p style="color: #111; background-color: #ffd95a;"><img src="images/icons/zap.svg">The bedroom light was turned on at ' + exacTime + '</p>';
    notifications.scrollTop = Math.pow(10, 10);
    document.getElementById("ledBState").innerHTML = "On";
    document.getElementById("ledBState").style.color = "#ffd95a";
}
function brOff()
{
    var notifications = document.querySelector("div.notifications");
    document.getElementById("noNoti").innerHTML = 'There are new notifications!'
    document.getElementById("notiClr").style.display = "block";
    document.getElementById("noti").innerHTML += '<p style="color: #fff; background-color: #999;"><img src="images/icons/zap-off.svg">The bedroom light was turned off at ' + exacTime + '</p>';
    notifications.scrollTop = Math.pow(10, 10);
    document.getElementById("ledBState").innerHTML = "Off";
    document.getElementById("ledBState").style.color = "#999";
}
function ktOn()
{
    var notifications = document.querySelector("div.notifications");
    document.getElementById("noNoti").innerHTML = 'There are new notifications!'
    document.getElementById("notiClr").style.display = "block";
    document.getElementById("noti").innerHTML += '<p style="color: #111; background-color: #ffd95a;"><img src="images/icons/zap.svg">The kitchen light was turned on at ' + exacTime + '</p>';
    notifications.scrollTop = Math.pow(10, 10);
    document.getElementById("ledKState").innerHTML = "On";
    document.getElementById("ledKState").style.color = "#ffd95a";
}
function ktOff()
{
    var notifications = document.querySelector("div.notifications");
    document.getElementById("noNoti").innerHTML = 'There are new notifications!'
    document.getElementById("notiClr").style.display = "block";
    document.getElementById("noti").innerHTML += '<p style="color: #fff; background-color: #999;"><img src="images/icons/zap-off.svg">The kitchen light was turned off at ' + exacTime + '</p>';
    notifications.scrollTop = Math.pow(10, 10);
    document.getElementById("ledKState").innerHTML = "Off";
    document.getElementById("ledKState").style.color = "#999";
}
function ptOn()
{
    var notifications = document.querySelector("div.notifications");
    document.getElementById("noNoti").innerHTML = 'There are new notifications!'
    document.getElementById("notiClr").style.display = "block";
    document.getElementById("noti").innerHTML += '<p style="color: #111; background-color: #ffd95a;"><img src="images/icons/zap.svg">The patio light was turned on at ' + exacTime + '</p>';
    notifications.scrollTop = Math.pow(10, 10);
    document.getElementById("ledPState").innerHTML = "On";
    document.getElementById("ledPState").style.color = "#ffd95a";
}
function ptOff()
{
    var notifications = document.querySelector("div.notifications");
    document.getElementById("noNoti").innerHTML = 'There are new notifications!'
    document.getElementById("notiClr").style.display = "block";
    document.getElementById("noti").innerHTML += '<p style="color: #fff; background-color: #999;"><img src="images/icons/zap-off.svg">The patio light was turned off at ' + exacTime + '</p>';
    notifications.scrollTop = Math.pow(10, 10);
    document.getElementById("ledPState").innerHTML = "Off";
    document.getElementById("ledPState").style.color = "#999";
}
function fpOn()
{
    var notifications = document.querySelector("div.notifications");
    document.getElementById("noNoti").innerHTML = 'There are new notifications!'
    document.getElementById("notiClr").style.display = "block";
    document.getElementById("noti").innerHTML += '<p style="color: #111; background-color: #ffd95a;"><img src="images/icons/zap.svg">The front porch light was turned on at ' + exacTime + '</p>';
    notifications.scrollTop = Math.pow(10, 10);
    document.getElementById("ledFPState").innerHTML = "On";
    document.getElementById("ledFPState").style.color = "#ffd95a";  
}
function fpOff()
{
    var notifications = document.querySelector("div.notifications");
    document.getElementById("noNoti").innerHTML = 'There are new notifications!'
    document.getElementById("notiClr").style.display = "block";
    document.getElementById("noti").innerHTML += '<p style="color: #fff; background-color: #999;"><img src="images/icons/zap-off.svg">The front porch light was turned off at ' + exacTime + '</p>';
    notifications.scrollTop = Math.pow(10, 10);
    document.getElementById("ledFPState").innerHTML = "Off";
    document.getElementById("ledFPState").style.color = "#999"; 
}

function userSettings()
{
    var userSettings = $("#settingsInput").val();
    var notifications = document.querySelector("div.notifications");
    if (userSettings == "")
    {
        document.getElementById("usersettings").innerHTML = "N/A";
    }
    else
    {
        document.getElementById("usersettings").innerHTML = userSettings + " ºC";
        document.getElementById("noNoti").innerHTML = 'There are new notifications!'
        document.getElementById("notiClr").style.display = "block";
        document.getElementById("noti").innerHTML += '<p style="color: #fff; background-color: lightcoral;"><img src="images/icons/thermometer-light.svg">The maximum temperature is set to ' + userSettings + ' ºC </p>';
    }
    notifications.scrollTop = Math.pow(10, 10);
}

function sendInputData()
{
    var text = $("#text_to_send").val();

    if (text == "alarmon")
    {
        fireAlarmEnable();
    }
    else if (text == "alarmoff")
    {
        fireAlarmDisable();
    }
    else if (text == "openFD")
    {
        frontDoorOpen();
    }
    else if (text == "closeFD")
    {
        frontDoorClose();
    }
    else if (text == "openGD")
    {
        garageDoorOpen();
    }
    else if (text == "closeGD")
    {
        garageDoorClose();
    }
    else if (text == "LRon")
    {
        lrOn();
    }
    else if (text == "LRoff")
    {
        lrOff();
    }
    else if (text == "BRon")
    {
        brOn();
    }
    else if (text == "BRoff")
    {
        brOff();
    }
    else if (text == "Kon")
    {
        ktOn();
    }
    else if (text == "Koff")
    {
        ktOff();
    }
    else if (text == "Pon")
    {
        ptOn();
    }
    else if (text == "Poff")
    {
        ptOff();
    }
    else if (text == "FPon")
    {
        fpOn();
    }
    else if (text == "FPoff")
    {
        fpOff();
    }
}

function sendInputToRecive()
{
    var text = $("#text_to_recive").val();
    var alarm = document.getElementById("buzzerstate").innerHTML;
    var temp = document.getElementById("temp").innerHTML;
    var hum = document.getElementById("hum").innerHTML;
    var potvalue = document.getElementById("potvalue").innerHTML;
    var FDState = document.getElementById("ledFDState").innerHTML;
    var GDState = document.getElementById("ledGDState").innerHTML;
    var LRState = document.getElementById("ledLRState").innerHTML;
    var BRState = document.getElementById("ledBState").innerHTML;
    var KState = document.getElementById("ledKState").innerHTML;
    var PState = document.getElementById("ledPState").innerHTML;
    var FPState = document.getElementById("ledFPState").innerHTML;
    document.querySelector('.material-card-settings').style.height = "525px";
    document.querySelector(".clr-btn2").style.display = "block";

    if (text == "alarm")
    {
        document.getElementById("response").innerHTML = "<strong>The alarm is: </strong>" + alarm.toLowerCase();
    }
    else if (text == "temp")
    {
        document.getElementById("response").innerHTML = "<strong>The room temperature is: </strong>" + temp;
    }
    else if (text == "hum")
    {
        document.getElementById("response").innerHTML = "<strong>The room humidity is at: </strong>" + hum;
    }
    else if (text == "lights")
    {
        document.getElementById("response").innerHTML = "<strong>The light intensity is at: </strong>" + potvalue;
    }
    else if (text == "frontdoor")
    {
        document.getElementById("response").innerHTML = "<strong>The front door is: </strong>" + FDState.toLowerCase();
    }
    else if (text == "garage")
    {
        document.getElementById("response").innerHTML = "<strong>The garage door is: </strong>" + GDState.toLowerCase();
    }
    else if (text == "livingroom")
    {
        document.getElementById("response").innerHTML = "<strong>The living room lights are: </strong>" + LRState.toLowerCase();
    }
    else if (text == "bedroom")
    {
        document.getElementById("response").innerHTML = "<strong>The bedroom lights are: </strong>" + BRState.toLowerCase();
    }
    else if (text == "kitchen")
    {
        document.getElementById("response").innerHTML = "<strong>The kitchen lights are: </strong>" + KState.toLowerCase();
    }
    else if (text == "patio")
    {
        document.getElementById("response").innerHTML = "<strong>The patio lights are: </strong>" + PState.toLowerCase();
    }
    else if (text == "porch")
    {
        document.getElementById("response").innerHTML = "<strong>The front porch lights are: </strong>" + FPState.toLowerCase();
    }
    else
    {
        document.getElementById("response").innerHTML = "<strong style='color: red';>Invalid Command</strong>";
    }
}