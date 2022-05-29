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
        With the new React Native architecture, large titles only work the first
        time you see them. Press the button and you'll see a large 'World' title
        on the next screen. If you go back and press the button again then the
        'World' title is small instead.
      </Text>
    </SafeAreaView>
  );
};

export default Hello;
