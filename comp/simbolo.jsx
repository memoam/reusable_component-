import React, { useState } from "react";
import PropTypes from 'prop-types';
import styles from '../styles/Home.module.scss';

export default function Simbolo({ prop }) {
  const [cont, setCont] = useState(0)
  return (
    <div className={styles.simbolo__body}>
      <p>{`${prop[cont]}`}</p>
      <div className={styles.renglon__controls}>
        <button type="button" onClick={() => setCont(cont + 1)}>
          +
        </button>
        <button type="button" onClick={() => setCont(cont - 1)} disabled={cont === 0}>
          -
        </button>
      </div>
    </div>
  )
}
Simbolo.propTypes = {
  prop: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};