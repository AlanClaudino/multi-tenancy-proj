import { config } from 'dotenv';
import { DataSource } from 'typeorm';
config();

export default new DataSource({
  type: 'postgres',
  host: process.env.HOST,
  port: +process.env.PORT,
  username: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  entities: [__dirname + '/src/**/*.entity{.ts,.js}'],
  migrations: ['migrations/**'],
});
