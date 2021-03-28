import Dexie from 'dexie'

const localDb = new Dexie('chat')
db.version(1).stores({
  message: 'username,message,created_at',
})

export default localDb
