import React, { Suspense } from 'react';
import ESContent from './ESContent';
import './styles.css';

const EnvironmentalSciencePage = () => {
  return (
    <div className="flex">
      <Suspense fallback={<div>Loading...</div>}>
        <ESContent />
      </Suspense>
    </div>
  );
};

export default EnvironmentalSciencePage;