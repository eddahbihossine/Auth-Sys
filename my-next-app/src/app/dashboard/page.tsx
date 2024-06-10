"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            router.push('/login-signup');
        } else {
            setLoading(false);
        }
    }, [router]);

    if (loading) {
        return <p>Loading...</p>;
    }

    return <div>Welcome to the Dashboard</div>;
}
