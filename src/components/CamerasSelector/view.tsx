import React from 'react';
import {
    Select,
    FormControl,
    InputLabel,
    makeStyles,
    IconButton,
} from '@material-ui/core';
import RestoreIcon from '@material-ui/icons/Restore';

import {getCameraTitle} from '../../renderer/utils';
import {reduceObjectToArray} from '../../utils/object';

import type {View} from '.';

import 'fontsource-roboto';
import './style.styl';

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default React.memo((({
    onChangeActiveCameraId,
    cameras,
    activeCameraIdDefault,
    activeCameraId,
}) => {
    // eslint-disable-next-line no-console
    console.log('CamerasSelector');
    const classes = useStyles();
    return (
        <>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="cameras-selector">Camera</InputLabel>
                <Select
                    native
                    value={activeCameraId}
                    onChange={e => {
                        onChangeActiveCameraId(e.target.value);
                    }}
                    inputProps={{
                        name: 'cameras',
                        id: 'cameras-selector',
                    }}
                >{
                        reduceObjectToArray((cameraId: any, camera: any) => (
                            <option value={cameraId} key={cameraId}>
                                {getCameraTitle(camera)}
                            </option>
                        ))(cameras)
                    }
                </Select>
            </FormControl>
            <IconButton
                aria-label="reset"
                onClick={() => {
                    onChangeActiveCameraId(activeCameraIdDefault);
                } }
                {...{disabled: activeCameraId === activeCameraIdDefault}}
            >
                <RestoreIcon />
            </IconButton>
        </>
    );
}) as View,
(prev, next) => prev.sceneId === next.sceneId
&& prev.activeCameraId === next.activeCameraId);
