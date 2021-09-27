import { Btn } from "./styled"

interface IProps {
  width?: string;
  height?: string;
  normal?: boolean;
  danger?: boolean;
}

export const Button: React.FC<IProps> = ({children, width='100px', height='38px', normal=false, danger=false}) => {
  return (
    <Btn width={width} height={height} normal={normal} danger={danger}>
      {children}
    </Btn>
  )
}
