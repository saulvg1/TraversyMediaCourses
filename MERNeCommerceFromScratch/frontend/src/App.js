//import components
import Header from './components/Header.js';
import Footer from './components/Footer.js';
//styles
import { Container } from 'react-bootstrap';

const App = () => {
  return (
    <>
      <Header />
      <Container>
        <main className="py-3">
          <h1>Welcome To ProShop</h1>
        </main>
      </Container>
      <Footer />
    </>
  );
};

export default App;
