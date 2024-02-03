import ColorItem from './ColorItem';
import { nanoid } from 'nanoid';

const ColorList = ({colors}) => {
  return (
    <section>
      {colors.map((color, idx)=>{
        return <ColorItem color={color} key={nanoid()} index={idx}/>
      })}
    </section>
  )
}

export default ColorList;