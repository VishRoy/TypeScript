interface ChildProps {
    color : string;
    onClick: () => void;
}

// Writing React functional components 

// Way - 1
export const Child = ({ color, onClick }: ChildProps): JSX.Element => {
    return (
        <div>
            {color}
            <button onClick={onClick}>Click me</button>
        </div>
    );
};

// Way - 2
export const ChildAsFC: React.FC<ChildProps> = ({color, onClick }) => {
    return( 
        <div onClick={onClick}>
            {color}
        </div>
    );
}; 
