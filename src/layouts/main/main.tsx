import { FC, ReactNode, useContext } from 'react';
import { AuthContext } from '../../auth/auth-provider';
import { useNavigate } from 'react-router-dom';
import styles from './main.module.scss';

interface IProps {
  children: ReactNode;
}

export const MainLayout: FC<IProps> = ({ children }) => {
  const [isAuth, seIstAuth] = useContext(AuthContext);

  const navigate = useNavigate();

  const onClick = () => {
    if (isAuth) {
      seIstAuth(false);
      localStorage.removeItem('name');
      localStorage.removeItem('auth');
    } else {
      navigate('/auth');
    }
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.flex}>
          {isAuth && (
            <section className={styles.user}>
              <div className={styles.avatar} />
              <p className={styles.name}>{localStorage.getItem('name')}</p>
              <p className={styles.email}>{localStorage.getItem('email')}</p>
            </section>
          )}
          <button className={styles.btn} onClick={onClick}>
            {isAuth ? 'Выход' : 'Войти'}
          </button>
        </div>
      </header>
      <main className={styles.main}>{children}</main>
    </>
  );
};
