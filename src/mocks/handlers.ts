import { rest } from 'msw';

const users = [
  {
    email: 'admin@example.com',
    password: 'admin',
    name: 'Администратор',
  },
  {
    email: 'manager@example.com',
    password: 'manager',
    name: 'Менеджер',
  },
];

export const handlers = [
  rest.get('/orders', (req, res, ctx) => {
    // Check if the user is authenticated in this session
    return res(
      ctx.json([
        {
          id: 1,
          email: 'client1@example.com',
          amount: 100,
          date: '2022-05-15',
        },
        {
          id: 2,
          email: 'client2@example.com',
          amount: 250,
          date: '2022-05-16',
        },
        {
          id: 3,
          email: 'client3@example.com',
          amount: 800,
          date: '2022-05-16',
        },
        {
          id: 4,
          email: 'client4@example.com',
          amount: 120,
          date: '2022-05-20',
        },
        {
          id: 5,
          email: 'client5@example.com',
          amount: 600,
          date: '2022-05-25',
        },
        {
          id: 6,
          email: 'client6@example.com',
          amount: 100,
          date: '2022-05-25',
        },
        {
          id: 7,
          email: 'client7@example.com',
          amount: 140,
          date: '2022-05-29',
        },
        {
          id: 8,
          email: 'client8@example.com',
          amount: 650,
          date: '2022-06-01',
        },
        {
          id: 9,
          email: 'client9@example.com',
          amount: 1000,
          date: '2022-06-05',
        },
        {
          id: 10,
          email: 'client10@example.com',
          amount: 100,
          date: '2022-06-12',
        },
        {
          id: 11,
          email: 'client11@example.com',
          amount: 150,
          date: '2022-06-15',
        },
        {
          id: 12,
          email: 'client12@example.com',
          amount: 180,
          date: '2022-06-16',
        },
        {
          id: 13,
          email: 'client13@example.com',
          amount: 200,
          date: '2022-06-16',
        },
        {
          id: 14,
          email: 'client14@example.com',
          amount: 360,
          date: '2022-06-20',
        },
        {
          id: 15,
          email: 'client15@example.com',
          amount: 90,
          date: '2022-06-25',
        },
      ])
    );
  }),
  rest.post('/user', async (req, res, ctx) => {
    const { email, password } = await req.json<{ email: string; password: string }>();

    const user = users.find((item) => item.email === email && item.password === password);

    if (user) {
      return res(ctx.json({ name: user.name, email: user.email }));
    }
    return res(ctx.json(false));
  }),
];
