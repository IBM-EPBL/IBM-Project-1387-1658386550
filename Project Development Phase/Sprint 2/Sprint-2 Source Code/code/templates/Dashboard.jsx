import { PushToTalkButton, PushToTalkButtonContainer } from '@speechly/react-ui';
import React from 'react';
import { Details, Main } from '../../components';
import DetailsTrack from '../../components/DetailsTrack/DetailsTrack';
import Navbar from '../../components/Navbar/Navbar';


const Dashboard = () => {


    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
            {/*<Grid className={classes.grid} container spaicng={0} alignItems="center" justifyContent="center" style={{ height: '100vh' }} >
                <Grid item xs={12} sm={4} className={classes.main} >
                    <Main />
                </Grid>
                <Grid item xs={12} sm={3} className={classes.last} >
                    <Details title="Income" />
                    <Details title="Expense" />
                </Grid>
                
                <Grid item xs={12} sm={3} className={classes.desktop} >
                    <Details title="Income" />
                </Grid>
                <Grid item xs={12} sm={3} className={classes.last} >
                    <Details title="Expense" />
                </Grid>
            </Grid>*/}
                <div>
                    <Main />
                </div>
                <div>
                    <div>
                        <Navbar />
                    </div>

                    <span>
                        <Details title="Income" />
                    </span>
                    <span>
                        <Details title="Expense" />
                    </span>
                </div>
            
                <PushToTalkButtonContainer>
                    <PushToTalkButton />
                </PushToTalkButtonContainer>
            </div>
            <div>
                <DetailsTrack title="Income" />
                <DetailsTrack title="Expense" />
            </div>
        </div>
        
    );
};


export default Dashboard;