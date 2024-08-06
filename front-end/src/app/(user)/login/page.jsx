"use client"
import { login } from '@/app/redux/slices/authSlice';
import { BASE_API_URL } from '@/app/unitil/contants';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useDispatch,} from 'react-redux';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
    const dispatch = useDispatch();
    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch(`${BASE_API_URL}/users/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });
        
        if (response.ok) {
            // Xu ly khi thanh cong
            const data = await response.json();
            const { token,user } = data;
            console.log(data);
            dispatch(login({ token,user }));
            localStorage.setItem('token', token);
            alert('Login successful:', data);
            router.push('/'); 
          } else {
            const data = await response.json();
            console.error('Login failed:', data);
          
          }
        };

    return (
        <div align="center">
            <h1 style={{color: "#fff"}}>Login</h1>
            <form onSubmit={handleSubmit}>
            <input 
            type="email" 
            placeholder="Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            title="Email phải có định dạng như example@example.com"
            required/>
            <br></br>

                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}
