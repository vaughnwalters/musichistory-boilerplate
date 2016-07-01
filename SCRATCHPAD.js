// to create message array from messages object

  // var fiveMessagesRequest = new XMLHttpRequest ();
  // fiveMessagesRequest.open("GET", "messages.json");
  // fiveMessagesRequest.send();
  // fiveMessagesRequest.addEventListener("load", function(){
  //   messages = JSON.parse(event.target.responseText).messages;
  //   callbackFunction(messages)
  // })

  $.ajax({
    url: "messages.json"
  }).done(callbackFunction);
