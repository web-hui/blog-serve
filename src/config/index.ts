const database: any = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'admin',
  password: '123456',
  database: 'blogCms',
  autoLoadEntities: true,
  synchronize: true,
};

export default database;
