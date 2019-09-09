import React, { Component } from 'react';
import Input from './Input';
import CircularIntegration from './CircularIntegration';
import Discription from './Discription'
import Upload from './Upload'
import Location from './Location'
import Grid from '@material-ui/core/Grid';
import Image from './Image';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';


export default class CreatePost extends Component {
    render() {
        return (
            <div >
                <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                 <Image/>
               </Grid>

                <Grid item xs={12} sm={6}>
               <Input lable='NameFood'  /> 
               <Input lable='Amount'/>
               <Discription/>
               <Upload/><Location/><CircularIntegration/>
               </Grid>
               </Grid>

               
            </div>
        )
    }
}
/*
return (
            <div className={classes.root}>
                <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                <Paper className={classes.paper}> <Image/></Paper>
                   
               </Grid>
                <Grid item xs={12} sm={6}>
               <Input lable='NameFood'  /> 
               <Input lable='Amount'/>
               <Discription/>
               <Upload/>
               <Location/>
               <CircularIntegration/>
               </Grid>
               </Grid>

               
            </div>
        )
*/
