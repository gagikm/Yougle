
var val = document.getElementById("search").value;


function showall(){
var keyboardEvent = document.createEvent("KeyboardEvent");
var initMethod = typeof keyboardEvent.initKeyboardEvent !== 'undefined' ? "initKeyboardEvent" : "initKeyEvent";


keyboardEvent[initMethod](
                   "keypress", // event type : keydown, keyup, keypress
                    true, // bubbles
                    true, // cancelable
                    window, // viewArg: should be window
                    false, // ctrlKeyArg
                    false, // altKeyArg
                    false, // shiftKeyArg
                    false, // metaKeyArg
                    39, // keyCodeArg : unsigned long the virtual key code, else 0
                    0 // charCodeArgs : unsigned long the Unicode character associated with the depressed key, else 0
);
    
//         document.getElementById("search").focus();
        document.getElementById("search").value = "|";
//        document.dispatchEvent(keyboardEvent);
//    if(window.length>500)
         document.getElementById("search").click();
             document.getElementById("search").focus();


}
function f(id){
    var val = document.getElementById("search").value;
    switch(val.toLowerCase()) {
    case "linkedin":
    case "|linkedin":
            window.location.href = 'http://linkedin.com/';
            <!--TODO:Replace with link to your LinkedIn profile.-->
            break;
    case "resume":  
    case "|resume":  
        document.getElementById("search").value = "Press Enter to Download Resume [ PDF ]";
        break;
    case "press enter to download resume [ pdf ]":
        window.location.href = 'https://www.dropbox.com';
                        <!--TODO:Replace with link to your Resumé.-->
        break;
    case "facebook":
    case "|facebook":
        window.location.href = 'http://facebook.com/';
                        <!--TODO:Replace with link to your Facebook profile.-->
        break;
    case "projects":
    case "|projects":
    case "github": 
    case "|github": 
        window.location.href = 'http://github.com/';
                        <!--TODO:Replace with link to your GitHub profile.-->
        break;
    case "twitter":
    case "|twitter":
        window.location.href = 'http://twitter.com/';
                        <!--TODO:Replace with link to your Twitter account.-->
        break;
    case "birthday":
    case "|birthday":
        document.getElementsByTagName("body")[0].style = "background-image:url('http://hdwallpaper.freehdw.com/0007/3d-abstract_hdwallpaper_flower-field_62438.jpg'); background-fit:contain";
        document.getElementById("search").value = "January 1";
                        <!--TODO:Replace with your birthday.-->
        break;
    case "education": case "school": case "university": case "college": case "ucla":
    case "|education": case "|school": case "|university": case "|college": case "|ucla":
        document.getElementsByTagName("body")[0].style = "background-image:url('https://c1.staticflickr.com/9/8092/8390742042_c2788e2f44_b.jpg'); background-size:100%";
        document.getElementById("search").value = "University of California, Los Angeles";
        break;
    case "university of california, los angeles":
        window.location.href = 'http://www.ucla.edu';
        break;
    case "clear":
    case "|clear":
    case "reset":
    case "|reset":
    case "clean":
    case "|clean":
            document.getElementsByTagName("body")[0].style ="" ;
            break;
    case "name": 
    case "|name": 
    case "full name": 
    case "|full name": 
            document.getElementById("search").value = "Joe Bruin";
                        <!--TODO:Replace with your own name.-->
            break;
    case "email": case "send email": case "contact":
    case "|email": case "|send email": case "|contact":
            window.location.href = 'mailto:joebruin@ucla.edu';
                        <!--TODO:Replace with your own email address.-->
            break;
    case "clappy bear": case "clappybear":
    case "|clappy bear": case "|clappybear":
            window.location.href = 'http://gagikm.github.io/clappybear';
            break;
            <!--TODO: Replace with your own project.-->
    default:
        var val = document.getElementById("search").value;
        window.location.href ='https://www.google.com/?gws_rd=ssl#q='+'Joe Bruin:  '+val;
                        <!--TODO:Replace with your own name.-->
            break;
            
} 

}

document.getElementById("gagiksearch").onclick = function() {
            val = document.getElementById("search").value;
            f(val);
};
function searchKeyPress(e)
    {
        val = document.getElementById("search").value;

        // look for window.event in case event isn't passed in
        if (typeof e == 'undefined' && window.event) { e = window.event; }
        if (e.keyCode == 13)
        {
            f("gagiksearch");
        }
    }
