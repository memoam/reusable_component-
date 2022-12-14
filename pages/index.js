import React, { useState } from 'react';
import Renglon from '../comp/renglon';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';

export default function Home() {
  const [cont, setCont] = useState(0);
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.main__home}>
          <button type="button" onClick={() => setCont(cont + 1)}>
            +
          </button>
          <button type="button" onClick={() => setCont(cont - 1)} disabled={cont === 0}>
            -
          </button>
          <p>{`cantidad: ${cont}`}</p>
        </div>
        {[...Array(cont)].map((data, i) => (
          <Renglon key={i} />
        ))}
      </div>
    </div>
  );
}
