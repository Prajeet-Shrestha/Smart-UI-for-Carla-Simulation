var loglist = ["Started"]; 
var templogreport;

function preload(){
    var preload = document.getElementsByClassName("preload");
    setInterval(function(){preload[0].style.display ="none";},1000);
    
}

function Logrecord(text){
    var today = new Date();
    templogreport = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() + ": " + text;
    var str = '<ul>';
    var logreportcontainer = document.getElementsByClassName("logreport");
    loglist.push(templogreport);
    loglist.forEach(function(list){
        str += '<li>' + list + '</li>';
    });
    str += '</ul>';
    logreportcontainer[0].innerHTML = str;
}

function carbtnonclick(value)
            {
                var button = document.getElementsByClassName("car-slider-button");
                var carcontainer = document.getElementsByClassName("car-img-container");
                if(value=='1')
                {
                    carcontainer[0].style.left = "30px";
                    button[0].style.background = "#00ff57";
                    button[1].style.background = "#ecf0f3";
                    button[2].style.background = "#ecf0f3";
                    Logrecord("Car 1 Selected.");
                }
                if(value =='2'){
                    carcontainer[0].style.left = "-165px";
                    button[1].style.background = "#00ff57";
                    button[0].style.background = "#ecf0f3";
                    button[2].style.background = "#ecf0f3";
                    Logrecord("Car 2 Selected.");
                }                
                if(value =='3'){
                    carcontainer[0].style.left = "-430px";
                    button[2].style.background = "#00ff57";
                    button[0].style.background = "#ecf0f3";
                    button[1].style.background = "#ecf0f3";
                    Logrecord("Car 3 Selected.");
                }

            }

function mapbtncontainer(value)
            {
                var mapbutton = document.getElementsByClassName("map-slider-button");
                var mapcontainer = document.getElementsByClassName("img-container");
                if(value=='1'){
                    mapcontainer[0].style.left = "0px";
                    mapbutton[0].style.background = "#00ff57";
                    mapbutton[1].style.background = "#ecf0f3";
                    mapbutton[2].style.background = "#ecf0f3";
                    Logrecord("Map 1 Selected.");
                    
                    }
                if(value =='2'){
                    mapcontainer[0].style.left = "-165px";
                    mapbutton[1].style.background = "#00ff57";
                    mapbutton[0].style.background = "#ecf0f3";
                    mapbutton[2].style.background = "#ecf0f3";
                    Logrecord("Map 2 Selected.");

                }                
                if(value =='3'){
                    mapcontainer[0].style.left = "-330px";
                    mapbutton[2].style.background = "#00ff57";
                    mapbutton[0].style.background = "#ecf0f3";
                    mapbutton[1].style.background = "#ecf0f3";
                    Logrecord("Map 3 Selected.");
                }
            }

function applyclick(data)
    {
        var element = document.getElementsByClassName("applybuttoninput");
        Logrecord("Configuration Changes Applied.");
        element[0].style.color = "#00ff57";
        element[0].style.boxShadow = "-5px -5px 10px #33373f, 5px 5px 10px #191b1f,inset -5px -5px 10px #33373f,inset 5px 5px 10px #191b1f";
        setInterval(function(){element[0].style.boxShadow = "3px 3px 8px #191b1f,-3px -3px 8px #33373f";},1000)
        element[0].style.color = "#dfdfdf";
    }

function eventrecordbutton()
    {
        var count = 0;
        var recordtext =document.getElementById("recordingstoppedtext");
        var checkboxelement = document.getElementsByClassName("record-toggle-state");
        var recordimg = document.getElementsByClassName("record");
        var buttoncontainer = document.getElementsByClassName("record-button");
        var logreport = document.getElementsByClassName("logreport");
        if (checkboxelement[0].checked){
            checkboxelement[0].checked = false;
            recordtext.innerHTML = "Stopped";
            Logrecord("Recoding Deactivated");
            buttoncontainer[0].style.background = "linear-gradient(to bottom, #4a4d52 0%, #212327 100%)";
            recordimg[0].style.background="url(img/videorecord1.jpg)";
            recordimg[0].style.backgroundSize= "45px 45px";

        }
        else{
            checkboxelement[0].checked = true;
            recordtext.innerHTML = "Recording";
            Logrecord("Recoding Activated");
            recordimg[0].style.background="url(img/recordstop.png)";
            recordimg[0].style.backgroundSize= "45px 45px";
            buttoncontainer[0].style.background = "linear-gradient(to bottom, #00ff57 0%, #016322 100%)";
        }
        recordimg[0].style.backgroundRepeat = "no-repeat";

    }


function eventcontrolclick()
{
    var checkboxelement = document.getElementsByClassName("control-toggle-state");
    var buttoncontainer = document.getElementsByClassName("control-button");
    var automatic_manual = document.getElementById("controltext");
    var controlimg = document.getElementsByClassName("controlimg");
    if (checkboxelement[0].checked){    
        checkboxelement[0].checked = false;
        automatic_manual.innerHTML = "Automatic";
        Logrecord("Control Overide to Automatic.");
        buttoncontainer[0].style.background = "linear-gradient(to bottom, #4a4d52 0%, #212327 100%)";

    }
    else{
        checkboxelement[0].checked = true;
        automatic_manual.innerHTML = "Manual";
        Logrecord("Control Overide to Manual.");
        buttoncontainer[0].style.background = "linear-gradient(to bottom, #00ff57 0%, #016322 100%)";
    }
}

function eventactiveclick()
{
    var checkboxelement = document.getElementsByClassName("active-toggle-state");
    var buttoncontainer = document.getElementsByClassName("active-button");
    var automatic_manual = document.getElementById("activetext");
    var controlimg = document.getElementsByClassName("activeimg");
    if (checkboxelement[0].checked){    
        checkboxelement[0].checked = false;
        automatic_manual.innerHTML = "Deactivated";
        Logrecord("Rectagular Boundary Deactivated");
        buttoncontainer[0].style.background = "linear-gradient(to bottom, #4a4d52 0%, #212327 100%)";

    }
    else{
        checkboxelement[0].checked = true;
        automatic_manual.innerHTML = "Activated";
        Logrecord("Rectagular Boundary Activated");
        buttoncontainer[0].style.background = "linear-gradient(to bottom, #00ff57 0%, #016322 100%)";
    }
}

function eventNPCclick()
{
    var checkboxelement = document.getElementsByClassName("NPC-toggle-state");
    var buttoncontainer = document.getElementsByClassName("NPC-button");
    var automatic_manual = document.getElementById("NPCtext");
    var controlimg = document.getElementsByClassName("NPCimg");
    if (checkboxelement[0].checked){    
        checkboxelement[0].checked = false;
        automatic_manual.innerHTML = "Despawned";
        Logrecord("Non-Player Chararters Despawned");
        buttoncontainer[0].style.background = "linear-gradient(to bottom, #4a4d52 0%, #212327 100%)";

    }
    else{
        checkboxelement[0].checked = true;
        automatic_manual.innerHTML = "Spawned";
        Logrecord("Non-Player Chararters Despawned");
        buttoncontainer[0].style.background = "linear-gradient(to bottom, #00ff57 0%, #016322 100%)";
    }
}

function startstopsimulation(){
    var container = document.getElementsByClassName("startstopsimulationbutton");
    var text = document.getElementById("startsimulationtext");
    var checkboxelement = document.getElementById("startstopsimulationcheckbox");

    if (checkboxelement.checked){
        checkboxelement.checked = false;
        text.innerHTML="Start Simulation";
        Logrecord("Simulation Stopped.")
        container[0].style.background = "linear-gradient(to bottom, #4a4d52 0%, #212327 100%)";
    }
    else{
        checkboxelement.checked = true;
        text.innerHTML="Stop Simulation";
        Logrecord("Simulation Started.")
        container[0].style.background ="linear-gradient(to bottom, #00ff57 0%, #016322 100%)";
    }
}

function clearlogbutton(){
    var len = loglist.length;
    var container = document.getElementsByClassName("clearlogbutton");
    var text = document.getElementById("clearlogtext");
    var checkboxelement = document.getElementById("clearlogcheckbox");
    checkboxelement.checked = true;
    loglist.splice(1,len-1);
    Logrecord("Log Cleared");
    container[0].style.background ="linear-gradient(to bottom, #00ff57 0%, #016322 100%)";
    setInterval(function(){container[0].style.background = "linear-gradient(to bottom, #4a4d52 0%, #212327 100%)";},2000)
    checkboxelement.checked = false;
}

function activerain(){
    if (document.getElementById("rainday").checked){
        Logrecord("Raining Day Activated.");
    }
    else{
        Logrecord("Raining Day Deactivated.");
    }
}

function sunnyday(){
    if (document.getElementById("sunnyday").checked){
        Logrecord("Sunny Day Activated.");
    }
    else{
        Logrecord("Sunny Day Deactivated.");
    }
}

function foggyday(){
   
    if (document.getElementById("foggyday").checked){
        Logrecord("Foggy Day Activated.");
    }
    else{
        Logrecord("Foggy Day Deactivated.");
    }
}

function render(){
   
    if (document.getElementById("rendercheck").checked){
        Logrecord("Rendering Simulation.");
    }
    else{
        Logrecord("Rendering Stopped.");
    }
}

function syncronous(){
   
    if (document.getElementById("modecheck").checked){
        Logrecord("Syncronous Mode Activated.");
    }
    else{
        Logrecord("Syncronous Mode Deactivated.");
    }
}

function fpsonclick(){
    var checkboxelement = document.getElementById("fpscheckbox");
    var content = document.getElementById("fps-dropdown-content-id");
    if (checkboxelement.checked){
        checkboxelement.checked = false;
        content.classList.remove("show");
    }
    else{
        checkboxelement.checked = true;
        content.className += " show";
    }
    
}

function listclicked(value){
    var str="Frame per second set ";
    var checkboxelement = document.getElementById("fpscheckbox");
    var content = document.getElementById("fps-dropdown-content-id");
    var selectfpsbox = document.getElementsByClassName("fps-dropdown-top");
    selectfpsbox[0].innerHTML = value;
    str += value;
    Logrecord(str);
    content.classList.remove("show");
    checkboxelement.checked = false;


}