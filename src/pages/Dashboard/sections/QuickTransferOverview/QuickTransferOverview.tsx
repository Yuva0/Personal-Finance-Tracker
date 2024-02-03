import React from 'react';

import './QuickTransferOverview.scss';

import Text from '../../../../components/Text/Text';
import Avatar from '../../../../components/Avatar/Avatar';

import photo1 from '../../../../assets/images/Photo1.svg';
import photo2 from '../../../../assets/images/Photo2.png';
import photo3 from '../../../../assets/images/Photo3.png';
import photo4 from '../../../../assets/images/Photo4.png';
import photo5 from '../../../../assets/images/Photo5.png';
import photo6 from '../../../../assets/images/Photo6.png';

const QuickTransferOverview = () => {
  return (
    <div className="quick-transfer-overview">
      <div><Text variant="label" size="medium">Quick Transfer</Text></div>
      <div className="quick-transfer-overview-avatar-group">
        <Avatar label="Umesh" img={photo1}/>
        <Avatar label="Aryan" img={photo2}/>
        <Avatar label="Raina" img={photo3}/>
        <Avatar label="Vayu" img={photo4}/>
        <Avatar label="Suraj" img={photo5}/>
        <Avatar label="Arjun" img={photo6}/>
      </div>
    </div>
  );
}

export default QuickTransferOverview;