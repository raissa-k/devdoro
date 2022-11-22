import Dexie from "dexie";

const database = new Dexie("database");
database.version(1).stores({
  tasks: '++id,task,done,order',
});

export const taskTable = database.table('tasks');

export default database;