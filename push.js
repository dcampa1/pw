var push = require('web-push');

let vapidKeys = {
    publicKey: 'BHjVcZrWH55IoFt6QOyS41FgSuib-a1niIJ_KJcY7McB6KbSbQoPYc6I4SNDpkFhA6CcYLBfvNcKd82Baw-l-qY',
    privateKey: '2JMwxlVKfzfiIEDJDplJ_qxQh-eXjDKt9rw3AE1p5tY'
  }

push.setVapidDetails('mailto:test@test.com', vapidKeys.publicKey, vapidKeys.privateKey);

let sub = {
  "endpoint": "https://fcm.googleapis.com/fcm/send/erVLAY4BGbY:APA91bGju8o9aqd3VTmcVkyWxxq5golLpjWBw5PD6lQzyDgVNyAZ27W5rYzuLP6oR_3BRkOYeZr4nAqveWWEhd8NvwW_Ujfjw4vewOsVGJpzX_Ib4abHtnvuD8Q5nmaf1jikEzzkwiVF",
  "expirationTime": null,
  "keys": {
    "p256dh": "BBYxBiei04oBtVIgoUX1nOxHEayhzFrpn0NbXNsQN_z1f87DaxI8DYc62e41vGpis4FEzfQjyDhmAeF0WNXBsP4",
    "auth": "oJz8AJ2nGjx9hK2ytJNJ4Q"
  }
};

push.sendNotification(sub, 'test message');