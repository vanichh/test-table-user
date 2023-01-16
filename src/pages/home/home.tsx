import { ChangeEventHandler, useEffect, useState } from 'react';
import { MainLayout } from '../../layouts/main';
import styles from './home.module.scss';

interface Ilist {
  id: number;
  email: string;
  amount: number;
  date: string;
}

const toUnix = (time: string) => Math.floor(new Date(time).getTime() / 1000);

export const Home = () => {
  const [list, setList] = useState<Ilist[]>([]);
  const [show, setShow] = useState<number>(5);

  useEffect(() => {
    fetch('/orders')
      .then((res) => res.json())
      .then((res) => setList(res));
  }, []);

  const onChange: ChangeEventHandler<HTMLSelectElement> = ({ target }) => {
    switch (target.value) {
      case 'id': {
        setList([...list.sort((a, b) => a.id - b.id)]);
        break;
      }
      case 'amount': {
        setList([...list.sort((a, b) => a.amount - b.amount)]);
        break;
      }
      case 'date': {
        setList([...list.sort((a, b) => toUnix(a.date) - toUnix(b.date))]);
        break;
      }
    }
  };

  const onClick = () => setShow(show + 5);

  return (
    <MainLayout>
      <header className={styles.conteiner}>
        <h2 className={styles.title}>Заказы</h2>
        <select className={styles.select} onChange={onChange}>
          <option value={'id'}>По номеру заказа</option>
          <option value={'amount'}>Сумма</option>
          <option value={'date'}>Дата</option>
        </select>
      </header>
      <section>
        <ul className={`${styles.list} ${styles.header}`}>
          <li>Номер заказа</li>
          <li>Email</li>
          <li>Сумма</li>
          <li>Дата</li>
        </ul>
        {list.slice(0, show).map((item) => (
          <ul className={styles.list} key={item.id}>
            <li className={styles.id}>{item.id}</li>
            <li>{item.email}</li>
            <li>{item.amount}</li>
            <li>{item.date}</li>
          </ul>
        ))}
      </section>
      <button className={styles.btn} onClick={onClick}>
        Показать еще...
      </button>
    </MainLayout>
  );
};
