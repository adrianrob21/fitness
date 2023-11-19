import { PATHS } from 'Constants';
import { Dashboard, Login, SignUp } from 'Pages';

export default {
  private: [
    {
      path: PATHS.DASHBOARD,
      element: <Dashboard />
    }
  ],
  public: [
    {
      path: PATHS.LOGIN,
      element: <Login />
    },
    {
      path: PATHS.SIGN_UP,
      element: <SignUp />
    }
  ]
};
