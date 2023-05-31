//const player = videojs('myVideo');
  // 视频来源路径
  var srcs = [{src: 'http://209.141.43.183/vod/we/NO.01/1.mp4/index.m3u8',type: 'application/x-mpegURL',poster: 'http://vjs.zencdn.net/v/oceans.png'}];
  var player = videojs(document.getElementById('myVideo'), {
    controls: true, // 是否显示控制条
    poster: 'http://vjs.zencdn.net/v/oceans.png', // 视频封面图地址
    preload: 'auto',
    autoplay: false,
    fluid: true, // 自适应宽高
    language: 'zh-CN', // 设置语言
    muted: false, // 是否静音
    inactivityTimeout: false, //自动隐藏控制栏
    playbackRates: [0.5, 1, 1.5, 2],  //播放速度
    playsinline: true,  //解决在iPhone中播放时自动全屏问题
    controlBar: { // 设置控制条组件
      /* 设置控制条里面组件的相关属性及显示与否  */
      /*
      'currentTimeDisplay':true,
      'timeDivider':true,
      'durationDisplay':true,
      'remainingTimeDisplay':true,
      volumePanel: {
        inline: true,
      },
      */
      /* 使用children的形式可以控制每一个控件的位置，以及显示与否 */
      children: [
        {name: 'playToggle'}, // 播放/暂停按钮
        {name: 'currentTimeDisplay'}, // 视频当前已播放时间
        {name: 'progressControl'}, // 播放进度条
        {name: 'durationDisplay'}, // 视频播放总时间
        {
          name: 'PlaybackRateMenuButton', // 倍数播放，可以自己设置
        },
        {
          name: 'volumePanel', // 音量控制
          inline: false, // 不使用水平方式
        },
        {
          name: 'pictureInPictureToggle'  //画中画
        },
        {
          name: ''
        },
        {
          name: 'FullscreenToggle' // 全屏
        },
      ]
    },
    sources:srcs
  }, function (){
    console.log('视频可以播放了',this);
  });

  // player.ITMAN_title({
  //   //file:"路徑/浮水印圖片",
  //   text: 'sjk',
  //   opacity: 0.6,
  //   url:"#"
  // });

  const noContext = document.getElementById('myVideo');
  noContext.addEventListener('contextmenu', e => {
    e.preventDefault();
  });
