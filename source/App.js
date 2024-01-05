import Navigator from 'Navigator';
import { Growl } from 'Components';

const App = () => (
  <>
    <Growl />
    <div className={'w-full h-lvh'}>
      <Navigator />;
    </div>
  </>
);

export default App;
