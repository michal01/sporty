export type ErrorWithResponse = Error & {
  response?: { status?: number; data?: { message?: string } };
};
