import React from 'react';
import { IonList, IonItem, IonSelect, IonSelectOption } from '@ionic/react';
function Example() {
  return (
    <IonList>
      <IonItem>
        <IonSelect interface="popover" placeholder="Select values">
          <IonSelectOption value="failed" style={{color:'red'}}>Failed</IonSelectOption>
          <IonSelectOption value="pass"style={{color:'green'}}>Pass</IonSelectOption>
          <IonSelectOption value="notstarted"style={{color:'brown'}}>Not Started</IonSelectOption>
        </IonSelect>
      </IonItem>
    </IonList>
  );
}
export default Example;