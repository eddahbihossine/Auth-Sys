"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { register, login } from '../services/api';

export default function LoginSignup() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [isLogin, setIsLogin] = useState(true);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (isLogin) {
            try {
                const response = await login(username, password);
                localStorage.setItem('token', response.data.access);
                router.push('/dashboard');
            } catch (error) {
                console.error(error);
            }
        } else {
            try {
                await register(username, password, email);
                setIsLogin(true);
            } catch (error) {
                console.error(error);
            }
        }
    };

    return (
        <div>
            <h1>{isLogin ? 'Login' : 'Signup'}</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
                {!isLogin && (
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        required
                    />
                )}
                <button type="submit">{isLogin ? 'Login' : 'Signup'}</button>
            </form>
            <button onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? 'Switch to Signup' : 'Switch to Login'}
            </button>
        </div>
    );
}
