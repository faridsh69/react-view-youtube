import React, { useRef } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Dimensions,
} from "react-native";
import { WebView } from "react-native-webview";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("screen");

export const FullScreenVideoPlayer = ({ changeFullScreen }) => {
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

  return (
    <View style={styles.centeredView}>
      <Modal transparent visible>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <WebView
              ref={videoPlayerRef}
              source={{ uri: source }}
              onShouldStartLoadWithRequest={onShouldStartLoadWithRequest} // On Android, is not called on the first load
              onNavigationStateChange={onShouldStartLoadWithRequest} // for android
              allowsFullscreenVideo
              allowsInlineMediaPlayback
              userAgent={userAgent}
              mediaPlaybackRequiresUserAction
              // style={styles.fullscreenWebview}
              javaScriptEnabled
              mixedContentMode="always"
            />
            <Pressable style={styles.buttonClose} onPress={changeFullScreen}>
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalView: {
    transform: [{ rotate: "90deg" }],
    width: SCREEN_HEIGHT,
    height: SCREEN_WIDTH,
    backgroundColor: "yellow",
  },
  // fullscreenWebview: {
  // width: SCREEN_HEIGHT,
  // },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonClose: {
    padding: 10,
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
