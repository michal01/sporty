import api from '@/plugins/api';
import { handleApiRequest } from './handleApiRequest';
import type { LeaguesResponse } from '@/types/League';

export const useApiLeagues = () => {
  const loading = ref(false);

  const fetchAllLeagues = async () => {
    const response = await handleApiRequest(
      async () => await api.get('/all_leagues.php'),
      loading
    );
    return response?.data as LeaguesResponse;
  }

  return {
    loading,
    fetchAllLeagues,
  };
}
