import Text from '../Text/Text';
import './Table.scss';

import { TableProps } from './Table.types';

const Table = ({headers, data, className, headerWidth}: TableProps) => {

  return (
    <div>
      <div className='table-header'>
        {headers!.map((header, index) => (
          <div key={index} style={{flexBasis:`${headerWidth![index]}%`}} className='table-header-cell'><Text variant="label" size="medium">{header}</Text></div>
        ))}
      </div>
      <div className='table-body'>
        {data!.map((row:string[] | React.ReactNode[],index:number) => {
          return (
            <div key={index} className='table-row'>
              <div className='table-cell' style={{flexBasis:`${headerWidth![0]}%`}}>{data!.length-index}.</div>
              {row.map((cell, index) => (
                <div key={index} style={{flexBasis:`${headerWidth![index+1]}%`}} className='table-cell'>{cell}</div>
              ))}
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default Table;