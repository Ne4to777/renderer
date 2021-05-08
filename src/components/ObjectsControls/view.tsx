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
    objects,
    objectsDefault,
}) => {
    // eslint-disable-next-line no-console
    console.log('ObjectsControls');

    return (
        <div className="objects-control__row-wrapper">
            {/* <Typography>Objects</Typography> */}
            <table className="objects-control__table">
                <tbody>{
                    reduceObjectToArray((objectId: any, object: any) => (
                        <tr className="objects-control__row" key={objectId}>
                            <td className="object-control__item" style={{width: '20%'}}>
                                <Typography>{objectId}</Typography>
                            </td>
                            <td className="object-control__item">
                                <SliderControl
                                    itemName="object"
                                    propName="x"
                                    propType="position"
                                    value={object}
                                    valueDefault={objectsDefault[objectId]}
                                    onChange={(x: any) => onChangePositionX({
                                        id: objectId,
                                        value: x,
                                    })}
                                />
                            </td>
                            <td className="object-control__item">
                                <SliderControl
                                    itemName="object"
                                    propName="y"
                                    propType="position"
                                    value={object}
                                    valueDefault={objectsDefault[objectId]}
                                    onChange={(x: any) => onChangePositionY({
                                        id: objectId,
                                        value: x,
                                    })}
                                />
                            </td>
                            <td className="object-control__item">
                                <SliderControl
                                    itemName="object"
                                    propName="z"
                                    propType="position"
                                    value={object}
                                    valueDefault={objectsDefault[objectId]}
                                    onChange={(x: any) => onChangePositionZ({
                                        id: objectId,
                                        value: x,
                                    })}
                                />
                            </td>
                        </tr>
                    ))(objects)
                }
                </tbody>
            </table>
        </div>
    );
}) as View,
(prev, next) => JSON.stringify(prev.objects) === JSON.stringify(next.objects));
