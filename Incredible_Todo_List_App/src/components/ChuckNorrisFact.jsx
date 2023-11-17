import React from 'react';
import {Text, Button, StyleSheet} from 'react-native';
//Click inside the emulator and press Ctrl + M to open the developer menu. Click on "Debug JS Remotely" to open the Chrome Developer Tools. Click on the "Console" tab to see the console output from the app.

const ChuckNorrisFact = ({}) => {
  const [fact, setFact] = React.useState('Loading ...');

  const fetchFact = async () => {
    try {
      const response = await fetch('https://api.chucknorris.io/jokes/random');
      const json = await response.json();
      setFact(json.value);
    } catch (e) {
      console.log(e);
    }
  };

  const handleRefreshPress = () => {
    fetchFact();
  };

  React.useEffect(() => {
    fetchFact();
  }, []);

  return (
    <>
      <Text style={styles.heading}>Random Chuck Norris Fact</Text>
      <Text style={styles.quote}>{fact}</Text>
      <Button title="Refresh" onPress={handleRefreshPress} />
    </>
  );
};

const styles = StyleSheet.create({
  quote: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10,
  },
  heading: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 10,
    fontWeight: 'bold',
  },
});

export default ChuckNorrisFact;
