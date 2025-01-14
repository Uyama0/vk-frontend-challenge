import { catApiHost, catApiKey } from '@/utils/env';

export const fetchCats = async () => {
  const response = await fetch(
    `${catApiHost}/v1/images/search?limit=15&format=webp`,
    {
      method: 'GET',
      headers: {
        'x-api-key': catApiKey,
      },
    }
  );
  if (!response.ok) {
    throw new Error('Ошибка при загрузке данных');
  }
  return response.json();
};
