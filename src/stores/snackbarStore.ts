import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Ref } from 'vue';
import type { SnackbarType } from '@/types/Snackbar';
import type { ErrorWithResponse } from '@/types/ErrorWithResponse';
import { watch } from 'vue';

export const useStoreSnackbar = defineStore('storeError', () => {
  const snackbar = ref({
    show: false,
    type: '',
    title: '',
    message: '',
  });

  const setSnackbar = (snack: SnackbarType) => {
    snackbar.value = {
      show: true,
      type: snack.type,
      title: snack.title ? snack.title : '',
      message: snack.message ? snack?.message : '',
    };
  };

  const closeSnackbar = () => {
    snackbar.value = {
      ...snackbar.value,
      show: false,
    };
  };

  const watchErrors = (isError: Ref<boolean>, error: Ref<Error | ErrorWithResponse | null>) => {
    watch([isError, error], ([errorStatus, errorMessage]) => {
      const err = errorMessage as ErrorWithResponse | null;
      const isNotFound = err?.response?.status === 404;

      if (errorStatus && !isNotFound) {
        setSnackbar({
          type: 'error',
          title: '',
          message: err?.response?.data?.message,
        });
      }
    });
  };

  return {
    snackbar,
    setSnackbar,
    watchErrors,
    closeSnackbar,
  };
});
