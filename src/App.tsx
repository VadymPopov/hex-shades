import { useState, useEffect } from 'react'
import Values from 'values.js'
import { toast } from 'react-toastify'
import Form from './components/Form'
import ColorList from './components/ColorList'
import ThemeToggle from './components/ThemeToggle'

export type Color = {
    alpha: number
    rgb: [number, number, number]
    type: string
    weight: number
    hex: string
}

const getInitialColorList = (): Color[] => {
    const color = localStorage.getItem('color') || '#06b1ea'
    const colorList = new Values(color).all(10)
    return colorList
}

const getInitialMode = (): boolean => {
    const storedMode = localStorage.getItem('darkTheme') === 'true'
    return storedMode
}

const App = () => {
    const [colors, setColors] = useState<Color[]>(getInitialColorList())
    const [isDarkTheme, setIsDarkTheme] = useState<boolean>(getInitialMode())

    const toggleTheme = () => {
        const newTheme = !isDarkTheme
        setIsDarkTheme(newTheme)
        localStorage.setItem('darkTheme', newTheme.toString())
    }

    useEffect(() => {
        document.body.classList.toggle('dark', isDarkTheme)
    }, [isDarkTheme])

    const addColor = (color: string) => {
        try {
            const newColor = new Values(color).all(10)
            setColors(newColor)
            localStorage.setItem('color', color)
        } catch (error) {
            if (error instanceof Error) {
                toast.error(error.message)
            } else {
                toast.error('An unknown error occurred')
            }
        }
    }

    return (
        <main className="container mx-auto p-5 transition duration-700 ease-out dark:bg-dark-bg">
            <div className="mb-5 flex items-baseline justify-between sm:items-center">
                <Form addColor={addColor} />
                <ThemeToggle
                    isDarkTheme={isDarkTheme}
                    toggleTheme={toggleTheme}
                />
            </div>
            <ColorList colors={colors} />
        </main>
    )
}

export default App
