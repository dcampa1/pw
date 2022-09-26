var push = require('web-push');

let vapidKeys = {
    publicKey: 'BHjVcZrWH55IoFt6QOyS41FgSuib-a1niIJ_KJcY7McB6KbSbQoPYc6I4SNDpkFhA6CcYLBfvNcKd82Baw-l-qY',
    privateKey: '2JMwxlVKfzfiIEDJDplJ_qxQh-eXjDKt9rw3AE1p5tY'
  }

push.setVapidDetails('mailto:test@code.co.uk', vapidKeys.publicKey, vapidKeys.privateKey);

let sub ={};

push.sendNotification(sub, 'test message');