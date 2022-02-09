import { client, checkError } from './client';

export async function getCharacters(from = 1, to = 30, search) {
  if (!search){
    const response = await client
      .from(`characters`)
      .select()
      .range(from, to);
  
    return checkError(response);
  } else {
    const response = await client
      .from(`characters`)
      .select()
      .range(from, to)
      .ilike(`name`, `%${search}`);

    return checkError(response);
  }
}

export async function getSingleCharacter(id) {
  const response = await client
    .from(`characters`)
    .select()
    .match({ id })
    .single();

  return checkError(response);
}