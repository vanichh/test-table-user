import { FormEventHandler, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/auth-provider';
import styles from './auth.module.scss';

export const Auth = () => {
  const [, setState] = useContext(AuthContext);

  const navigator = useNavigate();

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const form = new FormData(e.target as HTMLFormElement);

    const data = {
      email: form.get('email'),
      password: form.get('password'),
    };

    fetch('/user', { method: 'POST', body: JSON.stringify(data) })
      .then((response) => response.json())
      .then((res) => {
        if (res) {
          setState(true);
          localStorage.setItem('name', res.name);
          localStorage.setItem('email', res.email);
          localStorage.setItem('auth', 'true');
          navigator('/');
        }
      });
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <input className={styles.input} name={'email'} type={'email'} />
      <input className={styles.input} name={'password'} type={'password'} />
      <button className={styles.submit} type={'submit'}>
        Войти
      </button>
    </form>
  );
};
