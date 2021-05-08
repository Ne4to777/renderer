import {createCachedSelector} from 're-reselect';

import meta from './meta';
import {mapDispatchToProps as mapDispatchToPropsRedux} from '../../utils/redux';
import {climb} from '../../utils/object';
import {pipe} from '../../utils/combinators';
import * as actions from './actions';
import {State} from './types';

const getStateByNS = climb([meta.name]);

export const select = createCachedSelector(
    getStateByNS,
    ({canvasRefGetter}) => ({canvasRefGetter})
);

export const mapStateToProps = select(pipe([
    getStateByNS,
    ({canvasRefGetter}: State) => (canvasRefGetter() ? 1 : 0),
]));

export const mapDispatchToProps = mapDispatchToPropsRedux(actions);
