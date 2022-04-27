import { GetServerSideProps } from "next/types"
import type { ModelIF } from "../../src/interfaces"
import Navbar from "../../src/components/Navbar"
import { Flex, Image, Text } from "@chakra-ui/react"
import Footer from "../../src/components/Footer"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";

type Props = {
    model: ModelIF
}

const Models: React.FC<Props> = ({model}) => {
    console.log(model)
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
            <Navbar modelInfo/>
            <Flex
            width="100%"
            alignContent={["center", "center", "space-between", "space-between"]}
            gap={["2rem", "2rem", "2rem", "10rem"]}
            justifyContent="center"
            direction={["column", "column", "row", "row"]}
            paddingTop={["2rem", "2rem", "5rem", "5rem"]}
            paddingBottom={["2rem", "2rem", "5rem", "5rem"]}
            >
                <Image 
                src={model.thumbnail} 
                boxSize={["80%" , "80%", "50%", "40%"]}
                mx={["auto", "auto", "0", "0"]}
                />
                <Flex
                width={["100%", "100%", "40%", "30%"]}
                direction="column"
                justifyContent="center"
                alignItems="flex-start"
                >
                    <Text
                    as="h1"
                    fontSize="2xl"
                    fontWeight="600"
                    lineHeight="1.26"
                    letterSpacing="-0.7px"
                    ml="2rem"
                    >
                        {model.name}
                    </Text>
                    <Text
                    as="h2"
                    fontSize={["4xl", "4xl", "2xl", "5xl"]}
                    fontWeight="bold"
                    ml="2rem"
                    >
                        {model.title}
                    </Text>
                    <Text
                    as="p"
                    ml="2rem"
                    color="#373737"
                    >
                        {removeTags(model.description)}
                    </Text>
                </Flex>
            </Flex>
            <Flex
            direction="column"
            gap="2rem"
            width="100%"
            paddingBottom="5rem"
            >
                <Flex
                backgroundColor="#f7f7f7"
                width="100%"
                alignItems="center"
                justifyContent="center"
                paddingTop="3rem"
                >
                    <Carousel
                    emulateTouch
                    showStatus={false}
                    showArrows={false}
                    showIndicators={false}
                    autoPlay
                    centerMode
                    >
                    {model.model_features.map((feature, index) => {
                            return(
                                <Flex 
                                direction="column"
                                alignItems="flex-start"
                                key={index}
                                gap="1rem"
                                >
                                    <Image
                                    boxSize="80%"
                                    mx="auto"
                                    src={feature.image}
                                    fit="contain"
                                    />
                                    <Text
                                    as="h1"
                                    ml="2rem"
                                    fontSize="2xl"
                                    fontWeight="bold"
                                    >
                                        {feature.name}
                                    </Text>
                                    <Text
                                    as="p"
                                    ml="2rem"
                                    >
                                        {feature.description}
                                    </Text>
                                </Flex>
                            )
                        })}
                        </Carousel>
                    </Flex>
                        {model.model_highlights.map((feature, index) => {
                            return(
                                <Flex 
                                direction={index%2 === 0 ? ["column", "column", "row", "row" ] : ["column", "column", "row-reverse", "row-reverse"]}
                                alignContent="center"
                                justifyContent={["center", "center", "space-between", "space-between"]}
                                mx="auto"
                                key={index}
                                gap="1rem"
                                width="90%"
                                wrap="wrap"
                                paddingBottom="1rem"
                                >
                                    <Image
                                    boxSize={["100%" , "100%", "45%", "45%"]}
                                    objectFit="cover"
                                    mx={["auto", "auto", "0", "0"]}
                                    src={feature.image}
                                    borderRadius="10px"
                                    
                                    />
                                    <Flex
                                    direction="column"
                                    width={["100%", "100%", "30%", "30%"]}
                                    justifyContent={["flex-start", "flex-start", "center", "center"]}
                                    >
                                        <Text
                                        as="h2"
                                        fontSize="xl"
                                        fontWeight="bold"
                                        mx={["0", "0", "auto", "auto"]}
                                        width={["100%", "100%", "80%", "80%"]}
                                        >
                                            {feature.title}
                                        </Text>
                                        <Text
                                        as="p"
                                        mx={["0", "0", "auto", "auto"]}
                                        width={["100%", "100%", "80%", "80%"]}
                                        >
                                            {removeTags(feature.content)}
                                        </Text>
                                    </Flex>
                                </Flex>
                            )
                        })}
            </Flex>
            <Footer/>
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