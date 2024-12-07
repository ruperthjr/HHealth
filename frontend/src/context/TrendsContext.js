import React, { createContext, useState, useEffect, useContext } from 'react';

const TrendsContext = createContext();

export const TrendsProvider = ({ children }) => {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    // Mock API call to fetch trends
    const fetchTrends = async () => {
      const mockTrends = [
        { id: 1, title: 'AI in Telemedicine' },
        { id: 2, title: 'Remote Health Monitoring' },
      ];
      setTrends(mockTrends);
    };
    fetchTrends();
  }, []);

  return (
    <TrendsContext.Provider value={{ trends }}>
      {children}
    </TrendsContext.Provider>
  );
};

export const useTrends = () => useContext(TrendsContext);
