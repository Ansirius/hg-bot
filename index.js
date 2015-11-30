var Client = require('hangupsjs');
var Q = require('q');

// callback to get promise for creds using stdin. this in turn
// means the user must fire up their browser and get the
// requested token.
var creds = function() {
  return {
    auth: Client.authStdin
  };
};

var client = new Client();

// set more verbose logging
//client.loglevel('debug');

// receive chat message events
client.on('chat_message', function(ev) {



  if (ev.chat_message.message_content.segment  &&
      ev.self_event_state.user_id.gaia_id != ev.sender_id.gaia_id) {

    client.sendchatmessage(ev.conversation_id.id, [
      [0, 'Hello World']
    ]);

  }

  return console.log('chat_message', ev);
});

// connect and post a message.
// the id is a conversation id.
client.connect(creds).then(function() {
  console.log('connected');
}).done();
