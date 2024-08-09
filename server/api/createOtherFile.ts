import fs from 'fs/promises';

export default defineEventHandler(async (event) => {
  console.log('createOtherFile');
  await fs.writeFile('./some.txt', Buffer.from(''));
  return true;
});
