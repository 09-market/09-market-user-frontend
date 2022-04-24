import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './Layout';
import SplashPage from 'pages/SplashPage';
import MainPage from './pages/MainPage';
import ProfilePage from 'pages/ProfilePage';
import PostDetailPage from './pages/PostDetailPage';
import SearchPage from 'pages/SeacrhPage';
import PostUploadPage from 'pages/PostUploadPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (window.location.pathname === '/') {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    }
  }, []);

  return loading ? (
    <SplashPage />
  ) : (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="/profile/:userId" element={<ProfilePage />} />
        </Route>

        <Route path="/post/upload" element={<PostUploadPage />} />
        <Route path="/post/detail/:postId" element={<PostDetailPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
