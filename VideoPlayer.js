import React, { useRef, useState } from "react";
import { Button, Modal, View, StyleSheet, Dimensions } from "react-native";
// import YoutubePlayer from "react-native-youtube-iframe";
import { WebView } from "react-native-webview";
import { FullScreenVideoPlayer } from "./FullScreeVideoPlayer";

export const embedableYouTubeURI = (uri) => {
  if (uri.indexOf("/embed/") > -1) {
    return uri + "?rel=0";
  }
};

export const VideoPlayer = () => {
  const videoPlayerRef = useRef();
  const source = "https://www.youtube.com/embed/zu0AJZoikkk?rel=0";
  const onShouldStartLoadWithRequest = (request) => {
    if (request.url.indexOf("embed") !== -1) {
      return true;
    }

    // reference to WebView to make it stop loading that URL
    videoPlayerRef.current?.stopLoading();
    return false;
  };
  const userAgent =
    "Mozilla/5.0 (iPhone; CPU iPhone OS 11_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E217";

  const [isFullscreen, setIsFullscreen] = useState(false);

  const changeFullScreen = () => {
    setIsFullscreen((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      {!isFullscreen && (
        <View style={styles.webviewContainer}>
          <WebView
            ref={videoPlayerRef}
            source={{ uri: source }}
            onShouldStartLoadWithRequest={onShouldStartLoadWithRequest} // On Android, is not called on the first load
            onNavigationStateChange={onShouldStartLoadWithRequest} // for android
            allowsFullscreenVideo
            allowsInlineMediaPlayback
            userAgent={userAgent}
            mediaPlaybackRequiresUserAction
            style={styles.webview}
            javaScriptEnabled
            mixedContentMode="always"
            // height={SCREEN_HEIGHT}
            // width={SCREEN_WIDTH}
          />
          <Button
            title={isFullscreen ? "minimize" : "full screen"}
            onPress={changeFullScreen}
          ></Button>
        </View>
      )}
      {isFullscreen && (
        <FullScreenVideoPlayer changeFullScreen={changeFullScreen} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webviewContainer: {
    flex: 1,
    width: "100%",
    height: 300,
  },
  webview: {
    flex: 1,
  },
});
