import api from '@/plugins/api';
import { handleApiRequest } from './handleApiRequest';
import type { SeasonsResponse } from '@/types/Season';

export const useApiBadge = () => {
  const loading = ref(false);

  const fetchBadge = async (leagueId: string) => {
    const response = await handleApiRequest(
      async () => await api.get(`/search_all_seasons.php?badge=1&id=${leagueId}`),
      loading
    );
    return response?.data as SeasonsResponse;
  };

  return {
    loading,
    fetchBadge,
  };
}
