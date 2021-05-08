import {createCachedSelector} from 're-reselect';

import meta from './meta';
import {mapDispatchToProps as mapDispatchToPropsRedux} from '../../utils/redux';
import {climb} from '../../utils/object';
import {pipe} from '../../utils/combinators';
import * as actions from './actions';

export const select = createCachedSelector(
    climb([meta.name]),
    (x: any) => x
);

export const mapStateToProps = select(pipe([climb([meta.name]), Math.random]));

export const mapDispatchToProps = mapDispatchToPropsRedux(actions);
