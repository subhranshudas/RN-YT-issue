import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { Notification } from '@dasubh/uimobile';
// import YouTube from 'react-native-youtube';

import { DEFAULT_NOTIFICATIONS } from './notificationData';
import { parseApiResponse } from './helpers';
import { fetchNotifications } from './api';

export default function App() {
  const dummyData = parseApiResponse(DEFAULT_NOTIFICATIONS);
  const [user, setUser] = React.useState('0xCdBE6D076e05c5875D90fa35cc85694E1EAFBBd1');
  const [notifData, setNotifData] = React.useState([]);

  const lobCb = (args) => {
    console.log('logs stuff', args);
  }

  const getData = async () => {
    const apiResponse = await fetchNotifications(user);
    const parsedResults = parseApiResponse(apiResponse.results);

    console.log('LOG parsedResults: ', parsedResults);

    setNotifData([...parsedResults, ...dummyData]);

  };

  return (
    <View style={styles.container}>
      <Text>Enter your ETH address: </Text>

      <TextInput
        style={styles.input}
        onChangeText={setUser}
        value={user}
      />

      <Button
        title="Fetch Notifs"
        onPress={() => getData()}
      />

       {notifData.map(
          (oneNotification, idx) => {
            const {cta, title, message, app, icon, image, blockchain } = oneNotification;

            return (
              <Notification
                key={idx}
                notificationTitle={title}
                notificationBody={message}
                cta={cta}
                app={app}
                icon={icon}
                image={image}
                chainName={blockchain}
              />
            );
          }
        )}

        {/* <YouTube
          apiKey="AIzaSyBrzkFPyNmVDFzGY7dKz2HocUO4m-ni-Fc"
          videoId="KVZ-P-ZI6W4" // The YouTube video ID
          play // control playback of video with true/false
          fullscreen // control whether the video should play in fullscreen or inline
          loop // control whether the video should loop when ended
          onReady={lobCb}
          onChangeState={lobCb}
          onChangeQuality={lobCb}
          onError={lobCb}
          style={{ alignSelf: 'stretch', height: 300 }}
        /> */}

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
  input: {
    height: 40,
    width: 320,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
