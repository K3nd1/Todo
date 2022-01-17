import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StatusBar, Text, useColorScheme } from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const App: React.FC = () => {
  const isDarkMode = useColorScheme() === 'dark';

  React.useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await RNBootSplash.hide({ fade: true });
      console.log('Bootsplash has been hidden successfully');
    });
  }, []);

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} backgroundColor={'transparent'} />
      <Text>dsds</Text>
      <Icon name="material-ui" size={39} color="red" />
    </SafeAreaView>
  );
};

export default App;
