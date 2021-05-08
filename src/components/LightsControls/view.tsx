import React from 'react';
import PropTypes from 'prop-types';
import {
    Typography,
    Tooltip,
} from '@material-ui/core';

import {reduceObjectToArray} from '../../utils/object';
import SliderControl from '../SliderControl';

import {View} from '.';

import 'fontsource-roboto';
import './style.styl';

function ValueLabelComponent(props: any) {
    const {children, open, value} = props;

    return (
        <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
            {children}
        </Tooltip>
    );
}

ValueLabelComponent.propTypes = {
    children: PropTypes.element.isRequired,
    open: PropTypes.bool.isRequired,
    value: PropTypes.number.isRequired,
};

export default React.memo((({
    onChangePositionX,
    onChangePositionY,
    onChangePositionZ,
    lights,
    lightsDefault,
}) => {
    // eslint-disable-next-line no-console
    console.log('LightsControls');

    return (
        <div className="lights-control__row-wrapper">
            {/* <Typography>Lights</Typography> */}
            <table className="lights-control__table">
                <tbody>{
                    reduceObjectToArray((lightId: any, light: any) => (
                        <tr className="lights-control__row" key={lightId}>
                            <td className="light-control__item" style={{width: '20%'}}>
                                <Typography>{lightId}</Typography>
                            </td>
                            <td className="light-control__item">
                                <SliderControl
                                    itemName="light"
                                    propName="x"
                                    propType="position"
                                    value={light}
                                    valueDefault={lightsDefault[lightId]}
                                    onChange={(x: any) => onChangePositionX({
                                        id: lightId,
                                        value: x,
                                    })}
                                />
                            </td>
                            <td className="light-control__item">
                                <SliderControl
                                    itemName="light"
                                    propName="y"
                                    propType="position"
                                    value={light}
                                    valueDefault={lightsDefault[lightId]}
                                    onChange={(x: any) => onChangePositionY({
                                        id: lightId,
                                        value: x,
                                    })}
                                />
                            </td>
                            <td className="light-control__item">
                                <SliderControl
                                    itemName="light"
                                    propName="z"
                                    propType="position"
                                    value={light}
                                    valueDefault={lightsDefault[lightId]}
                                    onChange={(x: any) => onChangePositionZ({
                                        id: lightId,
                                        value: x,
                                    })}
                                />
                            </td>
                        </tr>
                    ))(lights)
                }
                </tbody>
            </table>
        </div>
    );
}) as View,
(prev, next) => JSON.stringify(prev.lights) === JSON.stringify(next.lights));
