import { 
    Flex, 
    Image,  
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    Divider,
    DrawerHeader,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRef } from "react";

const Navbar:React.FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
    return (
            <Flex
                as="nav"
                align="center"
                width={"100%"}
                height={"50px"}
                justify="space-between"
                borderBottom="1px solid #e5e5e5"
                position="fixed"
                zIndex={1}
                backgroundColor="white"
            >
                <Link href="/">
                    <Image
                        src="/logo.svg"
                        alt= "ego"
                        ml={"10px"}
                    />
                </Link>
                <Button 
                ref={btnRef} 
                onClick={onOpen}
                backgroundColor="transparent"
                >
                    <Image 
                        src="/gray.svg"
                        alt= "menu"
                    />
                </Button>
                <Drawer
                    isOpen={isOpen}
                    placement='right'
                    onClose={onClose}
                    finalFocusRef={btnRef}
                    size="md"
                >
                    <DrawerOverlay width={"100%"}/>
                    <DrawerContent width={"100%"}>
                    <DrawerCloseButton />
                    <DrawerHeader>
                        <Image
                            src="/logo.svg"
                            alt= "ego"
                        />
                    </DrawerHeader>
                    <DrawerBody width="100%">
                        <Divider width={"100%"}/>
                        <Flex
                        justifyContent= "start"
                        alignItems= "flex-end"
                        direction= "column"
                        gap= "1rem"
                        fontSize= "1.2rem"
                        width={"100%"}
                        >
                            <Link href="/">
                                Modelos
                            </Link>
                            <Link href="/">
                                Servicios y accesorios
                            </Link>
                            <Link href="/">
                                Financiación
                            </Link>
                            <Link href="/">
                                Reviews y comunidad
                            </Link>
                            <Divider/>
                            <Link href="/">
                                Toyota Mobility Service
                            </Link>
                            <Link href="/">
                                Toyota Gazoo Racing
                            </Link>
                            <Link href="/">
                                Toyota Híbridos
                            </Link>
                            <Divider/>
                            <Link href="/">
                                Concesionarios
                            </Link>
                            <Link href="/">
                                Test Drive
                            </Link>
                            <Link href="/">
                                Contacto
                            </Link>
                    <Divider/>
                        </Flex>                        
                    </DrawerBody>
                    <DrawerFooter>
                            <Flex
                            mt= {"1rem"}
                            width= "100%"
                            justifyContent= "start"
                            alignItems= "flex-end"
                            direction= "column"
                            //backgroundColor= "#e7e7e7"
                            gap= "1rem"
                            fontSize="1.2rem"
                            >
                            <Link href="/">
                                Actividades
                            </Link>
                            <Link href="/">
                                Servicios al Cliente
                            </Link>
                            <Link href="/">
                                Ventas Especiales
                            </Link>
                            <Link href="/">
                                Innovación
                            </Link>
                            <Link href="/">
                                Prensa
                            </Link>
                            <Link href="/">
                                Acerca de...
                            </Link>
                            </Flex>
                    </DrawerFooter>
                    </DrawerContent>
                </Drawer>
            </Flex>
    )
}

export default Navbar;