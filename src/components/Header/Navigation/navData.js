import { v4 as uuidv4 } from 'uuid';

const data = [
  {
    id: uuidv4(),
    title: 'home',
    path: '/',
  },
  {
    id: uuidv4(),
    title: 'today',
    path: '/today',
  },
  {
    id: uuidv4(),
    title: 'tomorrow',
    path: '/tomorrow',
  },
  {
    id: uuidv4(),
    title: 'five days',
    path: '/fivedays',
  },
];

export default data;
