import React from 'react';
import PropTypes from 'prop-types';
import {
    Slider,
    Typography,
    Tooltip,
} from '@material-ui/core';

import {unrepeat} from '../../utils/helpers';
import {config} from '../../renderer';

import {View} from '.';

import 'fontsource-roboto';
import './style.styl';

const {controls} = config;

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

export default React.memo(
    (({
        onChange,
        propName,
        itemName,
        propType,
        valueDefault,
        value,
    }) => {
    // eslint-disable-next-line no-console
        console.log(itemName, ':', propName);

        const changeHandler = unrepeat(onChange);
        const control = controls.camera[propType][propName];
        return (
            <div className="slider-control__item">
                <Typography>{propName}</Typography>
                <Slider
                    defaultValue={valueDefault[propType][propName]}
                    value={value[propType][propName] ?? 0}
                    ValueLabelComponent={ValueLabelComponent}
                    aria-label={propName}
                    min={control.min}
                    max={control.max}
                    step={control.step}
                    onChange={(e, x) => changeHandler(x)}
                />
            </div>
        );
    }) as View,
    ({
        value: pValue,
        propType: pPropType,
        propName: pPropName,
    }, {
        value: nValue,
        propType: nPropType,
        propName: nPropName,
    }) => pValue[pPropType][pPropName] === nValue[nPropType][nPropName]
);
