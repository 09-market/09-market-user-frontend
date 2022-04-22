import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './Layout';
import MainPage from './pages/MainPage';
import ProfilePage from 'pages/ProfilePage';
import DetailPage from './pages/DetailPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="/profile/:userId" element={<ProfilePage />} />
          <Route path="/post/:postId" element={<DetailPage />} />
        </Route>

        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
