import clsx from 'clsx';
interface Props extends React.PropsWithChildren{
    onClick?: ()=> void;
    className?:string;
    today?:boolean;
}

const Cell: React.FC<Props> = ({onClick, className, today, children}) => {
    return(
        <div onClick={onClick} className={clsx(
            "h-10 flex items-center justify-center border-b border-r",
            {"cursor-pointer hover:bg-gray-100 active:bg-gray-200": !!onClick},
            {"bg-gray-100": today},
            className)}>
            {children}
        </div>
    )
};

export default Cell;