import { toast } from 'react-toastify';

const ColorItem = ({color, index}) => {
  const {hex, weight, rgb} = color;

  const copyToClipboard = async() => {
    const color = "#" + hex;

      if(navigator.clipboard) {
        try {
          await navigator.clipboard.writeText(color);
          toast.success(`${color} copied to clipboard`);
        } catch (error) {
          toast.error('Failed to copy color: ', error);
        }
    } else {
      toast.error('Clipboard access denied');
    }
  };

  return (
    <div className={index > 10 ? 'color text-white' : 'color'} style={{backgroundColor: `#${hex}`}} onClick={copyToClipboard}>
      <p className='font-medium mb-2'>#{hex}</p>
      <p className='mb-2'>{weight}%</p>
      <p className='mb-60'>rgb: ({rgb.join(', ')})</p>
    </div>
  );
};

export default ColorItem;
