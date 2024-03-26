import { Container, Typography } from '@mui/material';
import AppToolbar from './components/UI/AppToolbar/AppToolbar.tsx';
import { Route, Routes } from 'react-router-dom';
import Products from './features/products/Products.tsx';
import NewProduct from './features/products/NewProduct.tsx';

function App() {
  return (
    <>
      <header>
        <AppToolbar></AppToolbar>
      </header>
      <main>
        <Container maxWidth="xl">
          <Routes>
            <Route path="/" element={<Products/>} />
            <Route path="/products/new" element={<NewProduct/>} />
            <Route path="*" element={<Typography variant="h2">Not found!</Typography>} />
          </Routes>
        </Container>
      </main>

    </>
  );
}

export default App;