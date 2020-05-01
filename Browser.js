import React, {useState} from 'react';
import {ActivityIndicator} from 'react-native';
import {WebView} from 'react-native-webview';

const Browser = ({url}) => {
  const [loading, setLoading] = useState(true);

  console.log('loading page', loading);

  return (
    <WebView
      source={{uri: url}}
      renderLoading={() => <ActivityIndicator size='large' color='#c000ff' />}
      startInLoadingState={loading}
      scalesPageToFit={true}
      onLoadEnd={ () => setLoading(false) }
    />
  );
};

export default Browser;
