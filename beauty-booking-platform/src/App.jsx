import AppRoutes from './routes/AppRoutes';
import Header from './components/layout/Header'; 
import Footer from './components/layout/Footer'; 

function App() {
  return (
    // This flexbox layout ensures the footer sticks to the bottom
    <div className="bg-background min-h-screen text-base-text flex flex-col">
      <Header />
      <main className="flex-grow"> 
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
}

export default App;