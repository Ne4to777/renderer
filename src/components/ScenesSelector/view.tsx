import React from 'react';
import {
    Select,
    FormControl,
    InputLabel,
    makeStyles,
    IconButton,
} from '@material-ui/core';
import RestoreIcon from '@material-ui/icons/Restore';

import {getSceneTitle} from '../../renderer/utils';
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

export default (({
    onChangeActiveSceneId,
    scenes,
    activeSceneIdDefault,
    activeSceneId,
}) => {
    // eslint-disable-next-line no-console
    console.log('ScenesSelector');
    const classes = useStyles();
    return (
        <>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="scenes-selector">Scene</InputLabel>
                <Select
                    native
                    value={activeSceneId}
                    onChange={e => {
                        onChangeActiveSceneId(e.target.value);
                    }}
                    inputProps={{
                        name: 'scenes',
                        id: 'scenes-selector',
                    }}
                >{
                        reduceObjectToArray((sceneId: any, scene: any) => (
                            <option value={sceneId} key={sceneId}>
                                {getSceneTitle(scene)}
                            </option>
                        ))(scenes)
                    }
                </Select>
            </FormControl>
            <IconButton
                aria-label="reset"
                onClick={() => {
                    onChangeActiveSceneId(activeSceneIdDefault);
                } }
                {...{disabled: activeSceneId === activeSceneIdDefault}}
            >
                <RestoreIcon />
            </IconButton>
        </>
    );
}) as View;
