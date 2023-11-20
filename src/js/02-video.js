import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');

const player = new Vimeo.Player(iframe);
console.log(player);

// iframe.addEventListener('timeupdate', onPlay);

const onPlay = function (data) {
  duration: 61.857;
  percent: 0.049;
  seconds: 3.034;
};
localStorage.setItem('videoplayer-current-time', onPlay);
player.on('timeupdate', onPlay);
