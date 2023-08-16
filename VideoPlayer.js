import React, { useRef, useState } from "react";
import { Button, Text, View, StyleSheet, Dimensions } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

export const VideoPlayer = () => {
  const controlRef = useRef();

  const onStateChange = (state) => {
    controlRef.current.getAvailablePlaybackRates().then((pr) => {
      console.log("1 pr", pr);
    });
    // getAvailablePlaybackRates
    // getAvailablePlaybackRates
    // getCurrentTime
    // getDuration
    // getPlaybackRate
    // getVolume
    // isMuted
    // seekTo
    // getVideoUrl
  };

  return (
    <View>
      <YoutubePlayer
        ref={controlRef}
        height={SCREEN_HEIGHT}
        width={SCREEN_WIDTH}
        webViewProps={{
          injectedJavaScript: `
            var element = document.getElementsByClassName('container')[0];
            element.style.rotate = '90deg';
            element.style.width = '${SCREEN_HEIGHT}px';
            element.style.height = '${SCREEN_WIDTH / 2}px';
            element.style.left = '-220px';
            element.style.top = '200px';

            true;
          `,
        }}
        videoId={"ugzE99frHI8"}
        play={true}
        onChangeState={onStateChange}
      />
      <Text>qwe</Text>
      <Text>qwe</Text>
      <Text>qwe</Text>
      <Text>qwe</Text>
      <Text>qwe</Text>
      <Text>qwe</Text>
    </View>
  );
};
