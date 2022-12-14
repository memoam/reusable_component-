import React, { useState } from "react";
import Simbolo from "./simbolo";
import styles from '../styles/Home.module.scss';

export default function Renglon() {
  const list = {
    l1: [1, 2, 3, 4, 5],
    l2: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "u", "v", "w", "x", "y", "z"],
  }
  const [cont, setCont] = useState(0)
  const [sim, setSim] = useState(list.l2)
  return (
    <div className={styles.renglon}>
      <div className={styles.renglon__controls}>
        <button type="button" onClick={() => setCont(cont + 1)} >
          +
        </button>
        <button type="button" onClick={() => setCont(cont - 1)}disabled={cont === 0}>
          -
        </button>
        <p>{`cantidad: ${cont}`}</p>
      </div>
      <div className={styles.renglon__controls}>
        <button type="button" onClick={() => setSim(list.l1)}>{'<'}</button>
        <button type="button" onClick={() => setSim(list.l2)}>{'>'}</button>
        <p>{`simbolos: ${JSON.stringify(sim)}`}</p>
      </div>
      <div className={styles.simbolo}>
        {[...Array(cont)].map((data, i) => (
          <Simbolo key={i} prop={sim} />
        ))}
      </div>

    </div>
  )
}