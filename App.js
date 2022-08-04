import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { Notification } from '@dasubh/uimobile';
import YouTube from 'react-native-youtube';

import { DEFAULT_NOTIFICATIONS } from './notificationData';
import { parseApiResponse } from './helpers';

export default function App() {
  const notifData = parseApiResponse(DEFAULT_NOTIFICATIONS);

  // AIzaSyBrzkFPyNmVDFzGY7dKz2HocUO4m-ni-Fc

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>

       {/* {notifData.map(
          (oneNotification, idx) => {
            const {cta, title, message, app, icon, image} = oneNotification;

            return (
              <Notification
                key={idx}
                notificationTitle={title}
                notificationBody={message}
                cta={cta}
                app={app}
                icon={icon}
                image={image}
              />
            );
          }
        )} */}

        <YouTube
          apiKey="AIzaSyBrzkFPyNmVDFzGY7dKz2HocUO4m-ni-Fc"
          videoId="KVZ-P-ZI6W4" // The YouTube video ID
          play // control playback of video with true/false
          fullscreen // control whether the video should play in fullscreen or inline
          loop // control whether the video should loop when ended
          onReady={e => this.setState({ isReady: true })}
          onChangeState={e => this.setState({ status: e.state })}
          onChangeQuality={e => this.setState({ quality: e.quality })}
          onError={e => this.setState({ error: e.error })}
          style={{ alignSelf: 'stretch', height: 300 }}
        />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});