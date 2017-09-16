import React from 'react'

import MonsterAvatar from '../MonsterAvatar'
import MonsterName from '../MonsterName'
import MonsterHealth from '../MonsterHealth'

import './styles.css'

const MonsterBattleView = ({name, health, currentHealth, flip, winner}) => (
  <div className={'MonsterBattleView'}>
    <MonsterAvatar name={name} flip={flip} dead={currentHealth <= 0} />
    <MonsterHealth health={health} currentHealth={currentHealth}>
      <MonsterName name={name} />
    </MonsterHealth>
    {winner && <div className={'MonsterBattleView__fireworks'} />}
  </div>
)

export default MonsterBattleView
