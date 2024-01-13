import React from 'react'
import { images } from '../../assets';
import { Grid } from '@mui/material';
import { Animate } from './Animate';
import { MPaper } from './MPaper';


const summaryData = [
    { 
        title:"Total booking",
        value: "800$",
        image: images.summaryImages.totalBook
    },
    { 
        title:"Sold",
        value: "200$",
        image: images.summaryImages.sold
    },
    { 
        title:"Canceled",
        value: "120$",
        image: images.summaryImages.cancel
    }

]
export const SummaryGrid = () => {
    return (
      <Grid container spacing={3}>
        {summaryData.map((summary, index) => (
          <Grid key={index} item>
            <Animate type="fade" delay={(index + 1) / 3}>
              <MPaper title={summary.title}>
                <img src={summary.image} alt={summary.title} />
                <Typography variant="h6">{summary.title}</Typography>
                <Typography variant="body1">{summary.value}</Typography>
              </MPaper>
            </Animate>
          </Grid>
        ))}
      </Grid>
    );
  };