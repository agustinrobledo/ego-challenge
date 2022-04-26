import { ModelsListIF } from '../interfaces'
import { Image, Stack, Text, Flex, Divider } from '@chakra-ui/react'
import  Link  from 'next/link'

type Props = {
    model: ModelsListIF
}

const Card: React.FC<Props> = ({model}) => {
    return (
        <Stack
        justifyContent="center"
        alignItems="center"
        mt="2rem"
        width={["100", "100", "50%", "33%"]}
        >   
            <Link href={`/models/${model.id}`}>
                <Text 
                as="h1"
                fontSize="3xl"
                fontWeight="bolder"
                letterSpacing="-0.7px"
                _hover={{
                    textDecoration: "underline",
                    cursor: "pointer"
                }}
                >
                    {model.name}
                </Text>
            </Link>
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
            <Link href={`/models/${model.id}`}>
                <Image
                    src={model.photo}
                    alt={model.name}
                    fit="contain"
                    height="100%"
                    _hover={{
                        cursor: "pointer"
                    }}
                />
            </Link>
        </Stack>
    )
}

export default Card

