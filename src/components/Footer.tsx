import { Flex, Text } from "@chakra-ui/react"

export const Footer: React.FC = () => {
    return (
        <>
            <Flex
            width="100%"
            justifyContent="center"
            textAlign="center"
            direction="column"
            paddingTop="2rem"
            paddingBottom="2rem"
            backgroundColor="gray.300"
            >
                <Text
                as="h2"
                >
                    Realizado por Fernando Agustin Robledo
                </Text>
            </Flex>
        </>
    )
}

export default Footer