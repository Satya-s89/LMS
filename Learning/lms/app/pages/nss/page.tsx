import React, { Suspense } from 'react';
import NSSContent from './NSSContent';
import './styles.css';

const NSSPage = () => {
  return (
    <div className="flex">
      <Suspense fallback={<div>Loading...</div>}>
        <NSSContent />
      </Suspense>
    </div>
  );
};

export default NSSPage;
