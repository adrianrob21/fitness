import { SignUp, Login } from 'Pages';

import { PATHS } from 'Constants';

export default {
  private: [],
  public: [
    {
      path: PATHS.SIGN_UP,
      element: <SignUp />
    },
    {
      path: PATHS.LOGIN,
      element: <Login />
    }
  ]
};
