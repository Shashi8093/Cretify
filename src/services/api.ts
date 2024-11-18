import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const loginUser = async (email: string, password: string, userType: 'student' | 'university') => {
  const response = await axios.post(`${API_URL}/auth/login`, { email, password, role: userType });
  return response.data;
};

export const logoutUser = async () => {
  await axios.post(`${API_URL}/logout`);
};

export const getCertificates = async (userId: string) => {
  const response = await axios.get(`${API_URL}/certificates/${userId}`);
  return response.data;
};

export const verifyCertificate = async (certificateId: string) => {
  const response = await axios.get(`${API_URL}/verify/${certificateId}`);
  return response.data;
};

export const issueCertificate = async (studentId: string, title: string, issueDate: string) => {
  const response = await axios.post(`${API_URL}/issue-certificate`, { studentId, title, issueDate });
  return response.data;
};

