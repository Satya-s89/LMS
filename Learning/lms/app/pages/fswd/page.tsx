import React, { Suspense } from 'react';
import FSWDContent from './FSWDContent';
import './styles.css';

const FSWDPage = () => {
  return (
    <div className="flex">
      <Suspense fallback={<div>Loading...</div>}>
        <FSWDContent />
      </Suspense>
    </div>
  );
};

export default FSWDPage;
