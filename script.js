let id = 1;
let userData="";
let supporterData="";
let messageBoxIsShow = false;

    setInterval(() => {
        if (messageBoxIsShow) {
        fetchSupporterMessage();
        console.log("fetch data in server")
        }
    }, 5000);


$(".online-chat").click(function () {
    console.log("this");
    messageBoxIsShow = true;
    $(this).fadeOut(200);
    $(".online-chat-section").fadeIn(500)
    console.log();
})
$(".chat-close-btn").click(function () {
    messageBoxIsShow = false;
    $(".online-chat-section").fadeOut(500)
    $(".online-chat").fadeIn(300)
})
$(".chat-btn").on("click",function(){
    let userMessage;
     $(".chat-input-text").val(function(index,value){
         
        console.log(index, value)
        userMessage = value;
        // $(this).val = ""
        return "";
    });
        console.log(userMessage)
       if(userMessage != ""){
            fetchUserDataHistory(userMessage);
            createUserMessage(userMessage)
       }
})
$(".chat-input-text").keypress(function (event) {
    var keycode = (event.keyCode ? event.keyCode : event.which);
    var value = event.target.value;
    if (keycode == '13' && value != "") {
        console.log(event.target.value)
        createUserMessage(event.target.value)
        event.target.value="";
        
    }
});
function createUserMessage(message){
    let messageID = "mes_" + (++id)
    let messageDiv = "<div class='user-message'><div class='text-chat'>"
    messageDiv += message + "</div><div class='chack-reserved " + messageID + "'><span>&#10004;</span></div></div>"
    $(".chat-message-box").append(messageDiv);
    setTimeout(() => {
        $(`.${messageID}`).append("<span>&#10004;</span>");
    }, 2000);
}
function createSupporterMessage(message){
    let messageDiv = "<div class='chat-supporter-message'><div class='chat-text-supporter'>"
    messageDiv += message + "</div></div>"
}
function fetchSupporterMessage (){
    $.ajax({
        url: "api url",
        method: "post & get",
        async: true,
        success: function () {
            createSupporterMessage(data)
        }
    })
}
function fetchUserDataHistory (userData){
    $.ajax({
        url : "api url",
        method : "post & get",
        data: userData,
        async: true,
        success: function () {
            $("mes_" + id).append("<span>&#10004;</span>");
        }
    })
}