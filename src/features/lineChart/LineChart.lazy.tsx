import React, { lazy, Suspense } from 'react';

const LazyLineChart = lazy(() => import('./LineChart'));

const LineChart = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyLineChart {...props} />
  </Suspense>
);

export default LineChart;
