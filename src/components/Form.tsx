import { useState, ChangeEvent, FormEvent } from 'react'
import { toast } from 'react-toastify'

type FormProps = {
    addColor: (color: string) => void
}

const Form = ({ addColor }: FormProps) => {
    const [color, setColor] = useState<string>('')

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        let color = e.target.value
        if (!color.includes('#')) {
            color = '#' + color
        }

        setColor(color)
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        if (color.length < 4) {
            toast.error(
                'Required format is "#rrggbb" where rr, gg, bb are two-digit hexadecimal numbers.'
            )
            return
        }
        addColor(color)
    }

    return (
        <section className="p-2">
            <form
                className="text-white sm:flex sm:items-center "
                onSubmit={handleSubmit}
            >
                <input
                    className="max-h-full max-w-full cursor-pointer outline-blue-500  transition hover:shadow-xl dark:outline-dark-text "
                    type="color"
                    value={color}
                    onChange={handleChange}
                />
                <input
                    className="ml-2 rounded-lg border-2 border-gray-300 px-4 py-2 text-black outline-0 transition placeholder:italic hover:border-blue-500 hover:shadow-lg focus:border-blue-500 dark:border-transparent dark:bg-black dark:text-white dark:hover:border-dark-text dark:focus:border-dark-text"
                    type="text"
                    value={color}
                    onChange={handleChange}
                    placeholder="#06b1ea"
                />
                <button
                    className="outline-slay-800 mt-2 rounded-lg border-2 bg-blue-600 px-4 py-2 uppercase text-white transition hover:bg-blue-700 hover:shadow-lg disabled:cursor-not-allowed disabled:bg-gray-400 disabled:hover:shadow-none dark:border-dark-text  dark:bg-dark-text dark:hover:bg-black sm:ml-2 sm:mt-0"
                    type="submit"
                    disabled={!color}
                >
                    Generate
                </button>
            </form>
        </section>
    )
}

export default Form
