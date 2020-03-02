const open = require('open');

(async () => {
    // Opens the image in the default image viewer and waits for the opened app to quit.
    await open('myvideo.mp4', { app: ['vlc', '-f']});
})();