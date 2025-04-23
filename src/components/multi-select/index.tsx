import { FC } from 'react';
import './multiselect.scss'
import { Icons } from '../icons';

interface MultiSelectProps {
  
    }
const MultiSelect: FC<MultiSelectProps> = ({}) => {
  
  return(<div className='dp-container'>
    <button >
    Select options...
    <Icons.chevronDown className='chevron' />
    </button>
  </div>);
};
export default MultiSelect;