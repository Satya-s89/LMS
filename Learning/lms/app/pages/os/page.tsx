import React, { Suspense } from 'react';
import OSContent from './OSContent';
import './styles.css';

const OperatingSystemsPage = () => {
  return (
    <div className="flex">
      <Suspense fallback={<div>Loading...</div>}>
        <OSContent />
      </Suspense>
    </div>
  );
};

export default OperatingSystemsPage;
