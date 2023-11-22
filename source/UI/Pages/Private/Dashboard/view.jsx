import { Card, Calendar } from 'Components';

const Dashboard = () => (
  <div
    className={
      'flex flex-col container lg:ml-auto lg:mr-auto pl-5 pr-5 lg:flex-row justify-center items-center lg:items-start space-y-4 lg:space-y-0 min-w-[90%] lg:space-x-16 mb-16 pt-12'
    }>
    <div className={'w-full space-y-16'}>
      <p className={'text-3xl text-white'}>Good morning</p>
      <Card>
        <h1 className={'text-white'}>HOME</h1>
        <h1 className={'text-white'}>HOME</h1>
        <h1 className={'text-white'}>HOME</h1>
      </Card>
    </div>
    <Calendar />
  </div>
);

export default Dashboard;
