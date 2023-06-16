import { LoginPayload } from '../auth/dtos/loginPayload.dto';

export const authorizationToLoginPayload = (
  authorization: string,
): LoginPayload | undefined => {
  const authorizationSpleted = authorization.split('.');

  if (authorizationSpleted.length < 3 || !authorizationSpleted[1]) {
    return undefined;
  }

  return JSON.parse(
    Buffer.from(authorizationSpleted[1], 'base64').toString('ascii'),
  );
};
