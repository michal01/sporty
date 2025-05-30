import { defineStore } from 'pinia'
import { useApiLeagues } from '@/composables/api/useApiLeagues';
import { useApiBadge } from '@/composables/api/useApiBadge';
import type { League } from '@/types/League';

export const useAppStore = defineStore('appStore', () => {
  const apiLeagues = useApiLeagues();
  const apiBadge = useApiBadge();

  const leagues = ref<League[]>([]);
  const badges = ref(new Map<string, string>());

  const getLeagues = async () => {
    const response = await apiLeagues.fetchAllLeagues();
    leagues.value = response.leagues;
  };

  const getBadge = async (leagueId: string) => {
    if (!badges.value.has(leagueId)) {
      const response = await apiBadge.fetchBadge(leagueId);
      badges.value.set(leagueId, response.seasons[0]?.strBadge || '');
    }
  };

  const filterLeagues = (searchQuery: string, selectedSport: string) => {
    return leagues.value.filter(league => {
      const matchesSearch = searchQuery
        ? league.strLeague.toLowerCase().includes(searchQuery.toLowerCase())
        : true;
      const matchesSport = selectedSport
        ? league.strSport === selectedSport
        : true;
      return matchesSearch && matchesSport;
    });
  };

  return {
    leagues,
    badges,
    getLeagues,
    getBadge,
    filterLeagues,
  }
})
