import React, {useContext} from 'react';
import {Button, SafeAreaView, Text} from 'react-native';
import {NavigationContext} from 'navigation-react';
import {NavigationBar} from 'navigation-react-native';

const Hello = () => {
  const {stateNavigator} = useContext(NavigationContext);
  return (
    <SafeAreaView>
      <NavigationBar title="Hello" />
      <Button
        title="Press Me"
        onPress={() => {
          stateNavigator.navigate('world');
        }}
      />
      <Text>
        With the old React Native architecture, the large 'World' title on the
        next screen shows correctly every time you see it.
      </Text>
    </SafeAreaView>
  );
};

export default Hello;
