import React, { createContext, useState, useEffect } from 'react';
import { loginUser, logoutUser } from '../services/api';

interface User {
  id: string;
  email: string;
  role: 'student' | 'university';
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string, userType: 'student' | 'university') => Promise<void>;
  logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Check for existing user session
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (email: string, password: string, userType: 'student' | 'university') => {
    const userData = await loginUser(email, password, userType);
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const logout = async () => {
    await logoutUser();
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};