import { GetServerSideProps } from "next/types"
import type { ModelIF } from "../../src/interfaces"
import Navbar from "../../src/components/Navbar"
import { Flex, Image, Text, Center } from "@chakra-ui/react"

type Props = {
    model: ModelIF
}

const Models: React.FC<Props> = ({model}) => {
    function removeTags(str:string): string | boolean {
        if ((str===null) || (str===''))
            return false;
        else
            str = str.toString();
              
        // Regular expression to identify HTML tags in 
        // the input string. Replacing the identified 
        // HTML tag with a null string.
        return str.replace( /(<([^>]+)>)/ig, '');
    }

    return(
        <>
            <Navbar />
            <Flex
            width="100%"
            justifyContent="center"
            direction="column"
            paddingTop="2rem"
            >
                <Text
                as="h1"
                fontSize="5xl"
                fontWeight="bold"
                lineHeight="1.26"
                letterSpacing="-0.7px"
                mx="auto"
                >
                    {model.name}
                </Text>
                <Image 
                src={model.thumbnail} 
                boxSize="80%"
                mx="auto"
                />
            </Flex>
            <Flex
            direction="column"
            gap="2rem"
            width="100%"
            paddingBottom="4rem"
            >
                <Text
                as="p"
                fontSize="2xl"
                ml="2rem"
                >
                    {removeTags(model.description)}
                </Text>
                <Text
                as= "h2"
                fontSize="xl"
                mx="auto"
                >
                    Caracteristicas
                </Text>
                {model.model_highlights.map((feature) => {
                        return(
                            <Flex 
                            direction="column"
                            justifyContent="center"
                            alignContent="center"
                            gap="1rem"
                            >
                                <Image
                                boxSize="70%"
                                objectFit="cover"
                                mx="auto"
                                src={feature.image}
                                borderRadius="10px"
                                />
                                <Text
                                as="p"
                                ml="2rem"
                                >
                                    {feature.title}
                                </Text>
                                <Text
                                as="p"
                                ml="2rem"
                                >
                                    {removeTags(feature.content)}
                                </Text>
                            </Flex>
                        )
                    })}
                
                    {model.model_features.map((feature) => {
                        return(
                            <Flex 
                            direction="column"
                            justifyContent="center"
                            alignContent="center"
                            gap="1rem"
                            >
                                <Image
                                boxSize="70%"
                                objectFit="cover"
                                mx="auto"
                                src={feature.image}
                                borderRadius="10px"
                                />
                                <Text
                                as="p"
                                mx="auto"
                                >
                                    {feature.name}
                                </Text>
                                <Text
                                as="p"
                                mx="auto"
                                >
                                    {feature.description}
                                </Text>
                            </Flex>
                        )
                    })}
            </Flex>
        </>
    )
}

export default Models


export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { id } = ctx.query
    const res = await fetch("https://challenge.agenciaego.tech/api/models/" + id)
    const model = await res.json()
    return {
        props: {
            model
        }
    }
}