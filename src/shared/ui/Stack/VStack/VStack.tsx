import { Flex, FlexProps } from "../Flex/Flex";

type VStackProps = Omit<FlexProps, 'direction'> // omit исключает direction из flexprops

export const VStack = (props: VStackProps) => {
    
    const { align = 'start' } = props;

    return (
       <Flex 
            direction='column'
            align={align}
            {...props}
       />
    );
};
