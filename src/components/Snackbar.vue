<script setup lang="ts">
  import { ref, watch } from 'vue'
  import { useStoreSnackbar } from '@/stores/snackbarStore'

  import type { SnackbarType } from '@/types/Snackbar'
  import type { PropType } from 'vue'

  const snackbarStore = useStoreSnackbar()
  const snackbar = ref<SnackbarType>(snackbarStore.snackbar)

  watch(
    () => snackbarStore.snackbar,
    newValue => {
      snackbar.value = newValue
    }
  )

  defineProps({
    type: {
      type: String as PropType<SnackbarType['type']>,
      default: 'error',
    },
    timeout: {
      type: Number,
      default: 5000,
    },
  })
</script>

<template>
  <v-snackbar
    v-model="snackbar.show"
    :color="snackbar.type"
    max-width="479px"
    multi-line
    :timeout="timeout"
    width="100%"
  >
    <v-row class="pa-4 ga-3 flex-nowrap">
      <div>
        <v-icon
          v-if="snackbar.type === 'error'"
          icon="mdi-close"
          size="large"
          @click="snackbarStore.closeSnackbar"
        />
        <v-icon
          v-if="snackbar.type === 'success'"
          icon="mdi-check"
          size="large"
        />
      </div>
      <div class="pa-0 ma-0">
        <p class="text-h6 text-white">
          {{ snackbar.title && 'Wooops, Something went wrong!' }}
        </p>
        <p
          v-if="snackbar.message"
          class="text-body-1 text-white"
        >
          {{ snackbar.message }}
        </p>
      </div>
    </v-row>
  </v-snackbar>
</template>
