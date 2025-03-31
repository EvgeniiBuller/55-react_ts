export interface ButtonProps {
    name: string, 
    // void - если функция ничего не возвращает
    onClick?: () => void, 
    disablet?: boolean, 
    type?: 'submit' | 'button' | 'reset',
    danger?: boolean
}