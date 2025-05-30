<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h3>Filters:</h3>
      </v-col>
      <v-col cols="12" sm="6">
        <v-text-field
          v-model="searchQuery"
          label="Search Leagues"
          outlined
        />
      </v-col>
      <v-col cols="12" sm="6">
        <v-select
          v-model="selectedSport"
          :items="options"
          label="Filter by Sport"
          outlined
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
  import type { SportType } from '@/types/League';

  defineProps<{
    options: string[]
  }>()

  const searchQuery = defineModel<string | undefined>('search-query', { default: undefined });
  const selectedSport = defineModel<SportType | undefined>('selected-sport', { default: undefined });
</script>
