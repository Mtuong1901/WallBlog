"use client";
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { checkAuth } from './checkauth'; // Đường dẫn tới file authChecker

export default function AuthProvider({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    checkAuth(dispatch); // Kiểm tra và cập nhật trạng thái xác thực khi ứng dụng khởi động
  }, [dispatch]);

  return <>{children}</>;
}
