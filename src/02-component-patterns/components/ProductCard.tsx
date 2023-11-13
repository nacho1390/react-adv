

import { CSSProperties, ReactElement, createContext } from 'react';
import { useProduct } from '../hooks/useProduct';
import { Product, ProductContextProps } from '../interfaces/interfaces';

import styles from '../styles/styles.module.css'



export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext


export interface Props {
    product: Product;
    children?: ReactElement | ReactElement[];  //JSX.Element | JSX.Element[];
    className?: string;
    style?: CSSProperties
}


export const ProductCard = ({ product, children, className, style }: Props) => {

    const { counter, increaseBy } = useProduct()

    return (
        <Provider value={{
            counter,
            increaseBy,
            product,

        }} >
            <div
                className={`${className} ${styles.productCard}`}
                style={style}
            >
                {children}
            </div>
        </Provider>
    )
}