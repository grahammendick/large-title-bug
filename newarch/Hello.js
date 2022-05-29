import React, {useContext} from 'react';
import {Button, SafeAreaView} from 'react-native';
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
    </SafeAreaView>
  );
};

export default Hello;
