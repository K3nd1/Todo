import React from 'react';
import { SafeAreaView, StatusBar, Text, useColorScheme } from 'react-native';
import RNBootSplash from 'react-native-bootsplash';

const App = () => {
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
    </SafeAreaView>
  );
};

export default App;
