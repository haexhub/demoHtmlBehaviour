import fs from 'fs/promises';

export default defineEventHandler(async (event) => {
  console.log('createHtmlFile');
  await fs.writeFile('./some.html', Buffer.from(''));
  return true;
});
