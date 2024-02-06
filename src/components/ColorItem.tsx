import { toast } from 'react-toastify'
import { Color } from '../App'
type ItemProps = {
    color: Color
    index: number
}

const ColorItem = ({ color, index }: ItemProps) => {
    const { hex, weight, rgb } = color

    const copyToClipboard = async () => {
        const color = '#' + hex

        if (navigator.clipboard) {
            try {
                await navigator.clipboard.writeText(color)
                toast.success(`${color} copied to clipboard`)
            } catch (error) {
                if (error instanceof Error) {
                    toast.error(
                        `Failed to copy color: ${color} copied to clipboard`
                    )
                } else {
                    toast.error('Clipboard access denied')
                }
            }
        }
    }

    return (
        <div
            className={index > 10 ? 'color text-white' : 'color'}
            style={{ backgroundColor: `#${hex}` }}
            onClick={copyToClipboard}
        >
            <p className="mb-2 font-medium">#{hex}</p>
            <p className="mb-2">{weight}%</p>
            <p className="mb-60">rgb: ({rgb.join(', ')})</p>
        </div>
    )
}

export default ColorItem
