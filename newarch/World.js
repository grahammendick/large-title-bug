import React from 'react';
import {Button, ScrollView, View} from 'react-native';
import {NavigationBar} from 'navigation-react-native';

const World = () => (
  <ScrollView contentInsetAdjustmentBehavior='automatic'>
    <NavigationBar largeTitle title="World" />
    <ScrollView>
      <View style={{height: 800}} />
    </ScrollView>
  </ScrollView>
);

export default World;
