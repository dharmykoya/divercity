export const loading = () => ({ authentication: { loading } }) => loading;

export const errorMessage = () => ({ authentication: { error } }) => error;

export const message = () => ({ authentication: { message } }) => message;

export const token = () => ({ authentication: { token } }) => token;

export const isAuthenticated = () => ({ authentication: { isAuthenticated } }) => isAuthenticated;

export const username = () => ({ authentication: { username } }) => username;
