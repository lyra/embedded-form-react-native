import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { WebView } from "react-native-webview";

const URL = "https://[MY EMBEDDED FORM PAGE - CHANGE ME]";
const injectedJs = `
  KR.onFocus((event)=>{
    window.ReactNativeWebView.postMessage(JSON.stringify(event));
  })
`;
export default function App() {
  function onMessage(event) {
    console.log(event);
  }

  return (
    <View style={styles.container}>
      <View
        style={{ position: "absolute", top: 0, bottom: 0, left: 0, right: 0 }}
      >
        <WebView
          injectedJavaScript={injectedJs}
          onMessage={onMessage}
          source={{ uri: URL }}
        ></WebView>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 28,
    flex: 1,
    backgroundColor: "#222",
    alignItems: "center",
    justifyContent: "center",
  },
});
