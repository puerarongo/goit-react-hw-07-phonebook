import React from 'react';
import styles from './Loader.module.css';
import { InfinitySpin } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className={styles.container}>
      <InfinitySpin color="rgb(0, 0, 0)" height={200} width={200} />
    </div>
  );
};

export default Loader;
