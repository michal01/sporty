export interface SnackbarType {
  show?: boolean
  type: 'error' | 'success' | string
  title?: string
  message?: string
}
