"use client";
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import AuthProvider from './components/authprovider'; // Đường dẫn tới component AuthProvider
import "./globals.css";
import "../../../public/bootstrap/css/bootstrap.min.css";

export default function RootLayout({ children }) {
  return (
    <Provider store={store}>
      <AuthProvider>
        <html lang="vi">
          <head>
            <title>WallBlog</title>
          </head>
          <body style={{backgroundColor: "#001933"}}>
            {children}
            <script
              src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
              integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
              crossOrigin="anonymous"
            ></script>
            <script src="https://kit.fontawesome.com/ea6209cd9f.js" crossOrigin="anonymous"></script>
          </body>
        </html>
      </AuthProvider>
    </Provider>
  );
}
