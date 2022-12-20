import React from 'react';
import { IonButton, IonIcon, IonCol, IonGrid, IonRow } from '@ionic/react';
import {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenu,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar, IonInput, IonItem, IonLabel, IonList
} from '@ionic/react';
//Routes
import './main.css';
import DropDown from "./DropDown"
import { add, camera } from 'ionicons/icons';

function Example() {
    return (
        <>

            <IonGrid style={{ marginTop: '0rem', marginLeft: '-57rem' }}>
                <IonHeader style={{ background: '#262223' }}>
                    <IonToolbar>
                        {/* <IonIcon slot="start" icon={arrowBack}></IonIcon> */}
                        <IonTitle id='title'>Block 1, Section 2, Row 36</IonTitle>
                        <h5 id='minimum'>87 Module Hybrid Edge / Interior tracker</h5>
                    </IonToolbar>
                </IonHeader>
                <IonGrid id='hokage'>
                    <IonRow className='tobirama'>
                        <IonCol >Pilling</IonCol>
                        <IonCol >Within /+- 45mm</IonCol>
                        <IonCol >Inspection Type</IonCol>
                        <IonCol >Comments</IonCol>
                        <IonCol >Photos</IonCol>
                        <IonCol >Status</IonCol>
                        <IonCol >Punchlist</IonCol>
                    </IonRow>
                </IonGrid>
                <IonGrid id='raikage'>
                    <IonRow className='hashirama'>
                        <IonCol>Activity/SubActivty</IonCol>
                        <IonCol>Acceptance/criteria</IonCol>
                        <IonCol>Laser Measurnment</IonCol>
                        <IonCol>Heavy BhAs light BHAs
                            <IonRow>Add Comment</IonRow>
                        </IonCol>
                        <IonCol> <IonItem>
                            <IonButton
                            color="light"
                            //  onClick={openFileDialog}
                            >
                                <input
                                    type="file"
                                    id="file-upload"
                                    style={{ width: '75px' }}
                                //   onChange={setImage}
                                />
                                <IonIcon slot="icon-only" icon={camera}>Add Photo</IonIcon>
                            </IonButton>
                        </IonItem></IonCol>
                        <IonCol><DropDown /></IonCol>
                        <IonCol className='addbutton'>
                            <IonButton color="#696F79;" fill="outline" style={{ color: 'grey' }}>Add to
                                <IonIcon style={{ color: 'black' }} slot="end" icon={add}></IonIcon></IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
                <IonGrid id='raikage'>
                    <IonRow className='hashirama'>
                        <IonCol>Brackets & Slew Drive Installation</IonCol>
                        <IonCol>Heavy Slew Gears or Light Slew gears</IonCol>
                        <IonCol>Visual</IonCol>
                        <IonCol>Heavy BhAs light BHAs
                            <IonRow>Add Comment</IonRow>
                        </IonCol>
                        <IonCol> <IonItem>
                            <IonButton
                             color="light"
                            //  onClick={openFileDialog}
                            >
                                <input
                                    type="file"
                                    id="file-upload"
                                    style={{ width: '75px' }}
                                //   onChange={setImage}
                                />
                                <IonIcon slot="icon-only" icon={camera}>Add Photo</IonIcon>
                            </IonButton>
                        </IonItem></IonCol>
                        <IonCol><DropDown /></IonCol>
                        <IonCol><IonButton color="#696F79;" fill="outline" style={{ color: 'grey' }}>Add to
                            <IonIcon style={{ color: 'black' }} slot="end" icon={add}></IonIcon></IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
                <IonGrid id='raikage'>
                    <IonRow className='hashirama'>
                        <IonCol>Torque Tube installation & BHA Assembly</IonCol>
                        <IonCol>Per Construction
                            Set or List the Configuration</IonCol>
                        <IonCol>Visual</IonCol>
                        <IonCol>Heavy BhAs light BHAs
                            <IonRow>Add Comment</IonRow>
                        </IonCol>
                        <IonCol> <IonItem>
                            <IonButton
                             color="light"
                            //  onClick={openFileDialog}
                            >
                                <input
                                    type="file"
                                    id="file-upload"
                                    style={{ width: '75px' }}
                                //   onChange={setImage}
                                />
                                <IonIcon slot="icon-only" icon={camera}>Add Photo</IonIcon>
                            </IonButton>
                        </IonItem></IonCol>
                        <IonCol><DropDown /></IonCol>
                        <IonCol><IonButton color="#696F79;" fill="outline" style={{ color: 'grey' }}>Add to
                            <IonIcon style={{ color: 'black' }} slot="end" icon={add}></IonIcon></IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
                <IonGrid id='raikage'>
                    <IonRow className='hashirama'>
                        <IonCol>Piling</IonCol>
                        <IonCol>Within +/- 45mm</IonCol>
                        <IonCol>Visual</IonCol>
                        <IonCol>Heavy BhAs light BHAs
                            <IonRow>Add Comment</IonRow>
                        </IonCol>
                        <IonCol> <IonItem>
                            <IonButton
                            color='light'
                            //  onClick={openFileDialog}
                            >
                                <input
                                    type="file"
                                    id="file-upload"
                                    style={{ width: '75px' }}
                                //   onChange={setImage}
                                />
                                <IonIcon slot="icon-only" icon={camera}>Add Photo</IonIcon>
                            </IonButton>
                        </IonItem></IonCol>
                        <IonCol><DropDown /></IonCol>
                        <IonCol><IonButton color="#696F79;" fill="outline" style={{ color: 'grey' }}>Add to
                            <IonIcon style={{ color: 'black' }} slot="end" icon={add}></IonIcon></IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonGrid>
        </>
    );
}
export default Example;