import { useStoreSnackbar } from '@/stores/snackbarStore';
import axios from 'axios';

export const handleApiRequest = async <T>(
  request: () => Promise<T>,
  loading: { value: boolean }
): Promise<T | undefined> => {
  loading.value = true;
  const { setSnackbar } = useStoreSnackbar();

  try {
    return await request();
  } catch (error) {
    if (axios.isAxiosError(error)) {
      setSnackbar({
        show: true,
        type: 'error',
        message: error.message || 'Woops! Something went wrong.',
      });
    }
  } finally {
    loading.value = false;
  }
};
