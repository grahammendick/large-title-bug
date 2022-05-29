import React from 'react';
import {StateNavigator} from 'navigation';
import {NavigationHandler} from 'navigation-react';
import {NavigationStack} from 'navigation-react-native';
import Hello from './Hello';
import World from './World';

const stateNavigator = new StateNavigator([
  {key: 'hello', title: 'Hello'},
  {key: 'world', title: 'World', trackCrumbTrail: true},
]);

const {hello, world} = stateNavigator.states;
hello.renderScene = () => <Hello />;
world.renderScene = () => <World />;

stateNavigator.navigate('hello');

const App = () => (
  <NavigationHandler stateNavigator={stateNavigator}>
    <NavigationStack unmountStyle={() => undefined} />
  </NavigationHandler>
);

export default App;
