// lib/fetchSanity.ts
import { client } from '@/sanity/lib/client';

export async function fetchSanity<T>(query: string, params: Record<string, any> = {}): Promise<T> {
  return client.fetch<T>(query, params);
}
