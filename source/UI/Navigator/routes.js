import { PATHS } from 'Constants';
import { Dashboard, Login, SignUp, Quotes, Exercises, Planning, Photos } from 'Pages';

export default {
  private: [
    {
      path: PATHS.DASHBOARD,
      element: <Dashboard />,
      icon: 'Home'
    },
    {
      path: PATHS.PLANNING,
      element: <Planning />,
      icon: 'Calendar'
    },
    {
      path: PATHS.EXERCISES,
      element: <Exercises />,
      icon: 'Dumbell'
    },
    {
      path: PATHS.PHOTOS,
      element: <Photos />,
      icon: 'Media'
    },
    {
      path: PATHS.QUOTES,
      element: <Quotes />,
      icon: 'Quotes'
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
