export const player = {
    youTubePlayer: null,
  
    onYouTubeIframeAPIReady() {
      this.youTubePlayer = new YT.Player("player", {
        height: "360",
        width: "640",
        videoId: "jfKfPfyJRdk",
        playerVars: {
          autoplay: 1
        },
        events: {
          onReady: this.onPlayerReady.bind(this)
        }
      });
    },
  
    onPlayerReady(event) {
      event.target.setVolume(5);
    },
  
    muteVideo() {
      this.youTubePlayer.mute();
    },
  
    unmuteVideo() {
      this.youTubePlayer.unMute();
    },
  
    isPlayerReady() {
      return this.youTubePlayer && this.youTubePlayer.getPlayerState() !== -1;
    }
  };
  