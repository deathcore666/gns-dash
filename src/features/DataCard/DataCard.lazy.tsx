import React, { lazy, Suspense } from 'react';

const LazyDataCard = lazy(() => import('./DataCard'));

const DataCard = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyDataCard {...props} />
  </Suspense>
);

export default DataCard;
