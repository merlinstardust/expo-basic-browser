import React, {useState} from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import Browser from './Browser';
import UrlBar from './UrlBar';

const HOME_URL = 'https://google.com';

const App = () => {
  const [url, setUrl] = useState(HOME_URL);

  console.log('url', url);

  return (
    <View style={styles.container}>
      <UrlBar setUrl={setUrl} url={url} />
      <Browser url={url} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
});

export default App;
