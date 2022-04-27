import { Text, Flex } from "@chakra-ui/react"


const Hero:React.FC = () => {
    return(
        <>
            <Flex
            width="100%"
            justifyContent="center"
            >
                <Text
                as="h1"
                fontSize="5xl"
                fontWeight="bold"
                lineHeight="1.26"
                letterSpacing="-0.7px"
                ml="1rem"
                mt="1rem"
                paddingTop="5rem"
                >
                    Descubrí todos los Modelos
                </Text>
            </Flex>
        </>
    )
}

export default Hero

