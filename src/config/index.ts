const database: any = {
  type: 'mysql',
  host: '172.16.238.16',
  port: 3306,
  username: 'admin',
  password: '123456',
  database: 'blogCms',
  autoLoadEntities: true,
  synchronize: true,
};

export default database;
