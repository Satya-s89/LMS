import React, { Suspense } from 'react';
import FLATContent from './FLATContent';
import './styles.css';

const FLATPage = () => {
  return (
    <div className="flex">
      <Suspense fallback={<div>Loading...</div>}>
        <FLATContent />
      </Suspense>
    </div>
  );
};

export default FLATPage;