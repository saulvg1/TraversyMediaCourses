//import components
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import HomeScreen from './screens/HomeScreen.js';
//styles
import { Container } from 'react-bootstrap';

const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <HomeScreen />
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
