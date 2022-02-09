import { client, checkError } from './client';

export async function getCharacters(from = 0, to = 30) {
  const response = await client
    .from(`characters`)
    .select()
    .range(from, to);

  return checkError(response);
}