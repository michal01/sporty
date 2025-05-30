<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="text-center">Sports Leagues</h1>
      </v-col>
    </v-row>
    <LeagueFilter
      v-model:search-query="searchQuery"
      v-model:selected-sport="selectedSport"
      :options="sports"
    />
    <LeagueList
      :badges="badges"
      :get-badge="getBadge"
      :leagues="filteredLeagues"
      title="Leagues"
    />
  </v-container>
</template>

<script setup lang="ts">
  import LeagueFilter from '@/components/LeagueFilter.vue';
  import LeagueList from '@/components/LeagueList.vue';
  import { useAppStore } from '@/stores/appStore';

  const sports = [
    'Soccer',
    'Basketball',
    'Motorsport',
    'Ice Hockey',
    'American Football',
  ];

  const appStore = useAppStore()
  const { getLeagues, filterLeagues, getBadge } = appStore;
  const { badges } = storeToRefs(appStore);

  const searchQuery = ref('');
  const selectedSport = ref('');

  const filteredLeagues = computed(() => {
    return filterLeagues(searchQuery.value, selectedSport.value);
  })

  onBeforeMount(getLeagues);
</script>
