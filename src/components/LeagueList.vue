<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h3>{{ title && `${title}:` }}</h3>
      </v-col>
      <v-col
        v-for="league in leagues"
        :key="league.idLeague"
        cols="12"
        md="4"
        sm="6"
      >
        <v-card @click="openDialog(league.idLeague)">
          <v-card-title>{{ league.strLeague }}</v-card-title>
          <v-card-subtitle>{{ league.strSport }}</v-card-subtitle>
          <v-card-text>{{ league.strLeagueAlternate }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-dialog v-model="dialogVisible" max-width="500">
      <v-card>
        <v-img
          cover
          :src="activeBadge"
        />
        <v-card-actions>
          <v-btn color="primary" @click="dialogVisible = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script setup lang="ts">
  import type { League } from '@/types/League';

  const props = withDefaults(
    defineProps<{
      title?: string
      leagues?: League[]
      badges?: Record<string, string>
      getBadge?: (idLeague: string) => Promise<string>;
    }>(),
    {
      title: '',
      leagues: () => [],
    }
  )

  const dialogVisible = ref(false);
  const activeBadge = ref<string>('');

  const openDialog = async (idLeague: string) => {
    await props.getBadge(idLeague);
    dialogVisible.value = true;
    activeBadge.value = props.badges.get(idLeague) || '';
  };

  watch(dialogVisible, async isOpen => {
    if (!isOpen) activeBadge.value = '';
  });
</script>
