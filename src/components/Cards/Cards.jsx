import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards.module.css';

const Info = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return 'Loading...';
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.infected)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              <span className={cx(styles.chanFont)}>ကူးစက်</span>
            </Typography>
            <Typography variant="h5" component="h2">
              <CountUp start={0} end={confirmed.value} duration={2.75} separator="," />
            </Typography>
            <Typography color="textSecondary">
              <span className={cx(styles.chanFont2)}>ရက်စွဲ</span> {new Date(lastUpdate).toDateString('')}
            </Typography>
            <Typography variant="body2" component="p">
                <span className={cx(styles.chanFont2)}>ကူးစက်ခံရသူ အရေအတွက်</span>
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.recovered)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
            <span className={cx(styles.chanFont)}>ပြန်ကောင်း</span>
            </Typography>
            <Typography variant="h5" component="h2">
              <CountUp start={0} end={recovered.value} duration={2.75} separator="," />
            </Typography>
            <Typography color="textSecondary">
             <span className={cx(styles.chanFont2)}>ရက်စွဲ</span> {new Date(lastUpdate).toDateString('')}
            </Typography>
            <Typography variant="body2" component="p">
               <span className={cx(styles.chanFont2)}>ပြန်ကောင်းလာသော အရေအတွက်</span>
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.deaths)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
            <span className={cx(styles.chanFont)}>သေဆုံး</span>
            </Typography>
            <Typography variant="h5" component="h2">
              <CountUp start={0} end={deaths.value} duration={2.75} separator="," />
            </Typography>
            <Typography color="textSecondary">
              <span className={cx(styles.chanFont2)}>ရက်စွဲ</span> {new Date(lastUpdate).toDateString('')}
            </Typography>
            <Typography variant="body2" component="p">
             <span className={cx(styles.chanFont2)}>ယနေ့အထိ သေဆုံးသူ စုစုပေါင်း</span>
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};
export default Info;
