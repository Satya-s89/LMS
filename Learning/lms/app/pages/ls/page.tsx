import React, { Suspense } from 'react';
import LSContent from './LSContent';
import './styles.css';

const LSPage = () => {
  return (
    <div className="flex">
      <Suspense fallback={<div>Loading...</div>}>
        <LSContent />
      </Suspense>
    </div>
  );
};

export default LSPage;
