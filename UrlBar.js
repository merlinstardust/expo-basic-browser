import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import convertTextToUrl from './convertTextToUrl';

const UrlBar = ({url, setUrl}) => {
  const submitUrl = ({nativeEvent: {text}}) => {
    const url = convertTextToUrl(text);
    setUrl(url);
  };

  return (
    <TextInput
      style={styles.urlBar}
      placeholder="Enter URL or query here"
      onSubmitEditing={submitUrl} 
    />
  );
};

const styles = StyleSheet.create({
  urlBar: {
    height: 40,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#d73704',
  },
});

export default UrlBar;
