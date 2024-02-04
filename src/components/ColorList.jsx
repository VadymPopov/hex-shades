import ColorItem from './ColorItem';
import { nanoid } from 'nanoid';

const ColorList = ({colors}) => {
  return (
    <section className='min-h-[calc(100vh-160px)] grid grid-cols-[repeat(auto-fit,minmax(223.33px,1fr))] grid-rows-[repeat(auto-fit,minmax(96px,1fr))] gap-2'>
      {colors.map((color, idx)=>{
        return <ColorItem color={color} key={nanoid()} index={idx}/>
      })}
    </section>
  )
}

export default ColorList;