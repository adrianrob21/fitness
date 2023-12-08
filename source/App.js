import Navigator from 'Navigator';
import { Growl } from 'Components';

const App = () => (
  <>
    <Growl />
    <div className={'w-full max-h-screen h-screen'}>
      <Navigator />;
    </div>
  </>
);

export default App;
