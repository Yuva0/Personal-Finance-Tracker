import React from 'react';
import './Avatar.scss';
import { AvatarProps } from './Avatar.types';

import Text from '../Text/Text';

const Avatar = ({img, label}:AvatarProps) => {
  return(
    <div className='avatar'>
      <img src={img} alt="Profile"/>
      <div><Text variant="label" size="vsmall">{label}</Text></div>
    </div>
  )
};

export default Avatar;