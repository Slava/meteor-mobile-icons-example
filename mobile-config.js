App.info({
  name: 'todos',
  description: 'A simple todo list app built in Meteor.',
  author: 'Percolate Studio Team',
  email: 'us@percolatestudio.com',
  website: 'http://percolatestudio.com'
});

App.icons({
  'iphone': 'icons/icon-60.png',
  'iphone-2x': 'icons/icon-60@2x.png',
  'ipad': 'icons/icon-72.png',
  'ipad-2x': 'icons/icon-72@2x.png'
});

App.launchScreens({
  'iphone': 'splash/Default~iphone.png',
  'iphone_2x': 'splash/Default@2x~iphone.png',
  'iphone5': 'splash/Default-568h@2x~iphone.png',
  'ipad_portrait': 'splash/Default-Portrait~ipad.png',
  'ipad_portrait_2x': 'splash/Default-Portrait@2x~ipad.png',
  'ipad_landscape': 'splash/Default-Landscape~ipad.png',
  'ipad_landscape_2x': 'splash/Default-Landscape@2x~ipad.png'
});

App.setPreference('StatusBarOverlaysWebView', 'false');
