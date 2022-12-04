import React from 'react'
import Form from '../../components/form/Form'
import imageComputer from '../../assets/images/computer_vetor.png';

import styles from './Register.module.css';

const Register = () => {
  return (
    <main className={styles.container}>
      <div className={styles.left_application}>
        <img src={imageComputer} alt="image-computer"/>
        <article className={styles.text_future}>
            <h1>Bem vindo ao futuro</h1>
            <p>O futuro espera por ti, más parado você não alcança.</p>
        </article>
      </div>  
      <Form/>
    </main>
  )
}

export default Register