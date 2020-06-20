import gcm from 'node-gcm';

const message = new gcm.Message();

message.addNotification({
  title: 'Notification',
  body: 'Thanks for reading React Native Cookbook!',
  icon: 'ic_launcher',
  click_action: 'OPEN_ACTIVITY_1',
});

// Set up the sender with you API key, prepare your recipients' registration tokens.
const sender = new gcm.Sender('YOUR_ID_HERE');
const regTokens = ['YOUR_TOKEN_HERE'];

sender.send(
  message,
  { registrationTokens: regTokens },
  (err, response) => {
    if (err) console.error(err);
    else console.log(response);
  },
);
