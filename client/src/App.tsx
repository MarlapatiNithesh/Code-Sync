import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import Toast from './components/toast/Toast';
import HomePage from './pages/HomePage';
import EditorPage from './pages/EditorPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/editor/:roomId" element={<EditorPage />} />
      </Routes>
      <Toast />
    </Router>
  );
};

export default App;
