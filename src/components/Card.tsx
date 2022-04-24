import { ModelsListIF } from '../interfaces'
import { Image, Stack, Text, Flex, Divider } from '@chakra-ui/react'

type Props = {
    model: ModelsListIF
}

const Card: React.FC<Props> = ({model}) => {
    return (
        <Stack
        justifyContent="center"
        alignItems="center"
        mt="2rem"
        >
            <Text 
            as="h1"
            fontSize="3xl"
            fontWeight="bolder"
            letterSpacing="-0.7px"
            >
                {model.name}
            </Text>
            <Flex
            gap={1}
            >
                <Text>
                    {model.year}
                </Text>
                <Text>
                    |
                </Text>
                <Text>
                    ${model.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
                </Text>
            </Flex>
            <Image
                src={model.photo}
                alt={model.name}
                width="80%"
                height="100%"
            />
        </Stack>
    )
}

export default Card

