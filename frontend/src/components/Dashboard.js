import React from 'react';
import { useTrends } from '../context/TrendsContext';
import Card from './common/Card';

const Dashboard = () => {
  const { trends } = useTrends();

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Trending Topics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {trends.map((trend) => (
          <Card key={trend.id} title={trend.title}>
            <p>Explore more about {trend.title}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
