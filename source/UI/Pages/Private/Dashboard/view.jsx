import { Calendar } from 'Components';
import { Card, ContentContainer, MainLayout } from 'Containers';

const Dashboard = () => (
  <MainLayout>
    <ContentContainer width={'full'}>
      <h1 className={'text-2xl text-white'}>Main</h1>
      <Card></Card>
    </ContentContainer>

    <ContentContainer>
      <Calendar />
      <h1 className={'text-xl text-white'}>Today's inspiration</h1>
      <Card />
    </ContentContainer>
  </MainLayout>
);

export default Dashboard;
