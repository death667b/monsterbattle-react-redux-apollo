import React from 'react';
import cx from 'classnames';

import './styles.css';

const MonsterHealth = ({
    health,
    currentHealth,
    flip
}) =>
    <div className={cx('MonsterHealth', {'MonsterHealth--flip': flip})}>
        <div className={'MonsterHealth__bar'} style={{
            width: currentHealth / health
        }}/>
    </div>

export default MonsterHealth
