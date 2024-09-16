// Import necessary components and constants from react-native and local files
import { View, Image, Text, StyleSheet } from 'react-native';

// Import custom components from local files
import Title from '../components/ui/Title';
import PrimaryButton from '../components/ui/PrimaryButton';
import Colors from '../constants/colors';

// Define the GameOverScreen component
function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
  // Return the JSX elements that make up the Game Over screen
  return (
    // The root container that holds all the elements
    <View style={styles.rootContainer}>
      // Display the title "GAME OVER!"
      <Title>GAME OVER!</Title>
      
      // Container for the success image
      <View style={styles.imageContainer}>
        // Display the success image
        <Image
          style={styles.image}
          source={require('../assets/images/success.png')}
        />
      </View>
      
      // Display a summary text that shows the number of rounds and the user's number
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{' '}
        rounds to guess the number{' '}
        <Text style={styles.highlight}>{userNumber}</Text>.
      </Text>
      
      // Display a primary button to start a new game
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
}

// Export the GameOverScreen component
export default GameOverScreen;

// Define the styles for the GameOverScreen component
const styles = StyleSheet.create({
  // Styles for the root container
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  // Styles for the image container
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: 'hidden',
    margin: 36,
  },
  
  // Styles for the image
  image: {
    width: '100%',
    height: '100%',
  },
  
  // Styles for the summary text
  summaryText: {
    fontFamily: 'open-sans',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24,
  },
  
  // Styles for highlighted text
  highlight: {
    fontFamily: 'open-sans-bold',
    color: Colors.primary500,
  },
});