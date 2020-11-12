global.Buffer = global.Buffer || require('buffer').Buffer;

import React, {useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Twitter from 'twitter-lite';

export default function App() {
  useEffect(() => {
    (async () => {
      const client = new Twitter({
        consumer_key: "",
        consumer_secret: "",
        access_token_key: "",
        access_token_secret: "" 
      });
      const rateLimits = await client.get("statuses/show", {
        id: "1016078154497048576"
      });
      console.warn({rateLimits});
    })();
  }, []);
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
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
