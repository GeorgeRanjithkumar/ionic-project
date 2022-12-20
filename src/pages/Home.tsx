import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

//Routes Files
import ExploreContainer from '../components/ExploreContainer';
import Menubar from '../components/Menubar';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <Menubar />
      {/* <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer />
        <IonButton onClick={()=>console.log("hello")}>Hello</IonButton>
      </IonContent> */}
    </IonPage>
  );
};

export default Home;
