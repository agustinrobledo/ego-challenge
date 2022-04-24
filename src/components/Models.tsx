import { Flex, Menu, MenuButton, MenuList, MenuItem, Button, Divider} from "@chakra-ui/react"
import { ChevronDownIcon } from "@chakra-ui/icons"
import { useState } from "react"
import Card from "./Card"
import type { ModelsListIF } from "../interfaces"
type Props = {
    models: ModelsListIF[]
}

const Models:React.FC<Props> = ({models}) => {
    const [carModels, setCarModels] = useState<ModelsListIF[]>(models)
    console.log(models)
    return (
        <>
            <Flex
            width="100%"
            justifyContent="space-between"
            mt="1rem"
            >
                <Menu
                >
                    <MenuButton 
                    as={Button} 
                    ml="10px"
                    rightIcon={<ChevronDownIcon/>}
                    backgroundColor="white"
                    >
                        Filtrar por
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Download</MenuItem>
                        <MenuItem>Create a Copy</MenuItem>
                    </MenuList>
                </Menu>
                <Menu>
                    <MenuButton 
                    as={Button}  
                    rightIcon={<ChevronDownIcon/>}
                    mr="10px" 
                    backgroundColor="white"
                    >
                        Ordenar Por
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Download</MenuItem>
                        <MenuItem>Create a Copy</MenuItem>
                        <MenuItem>Mark as Draft</MenuItem>
                    </MenuList>
                </Menu>
            </Flex>
            <Divider width={"100%"} />
                {
                    models.map(model => (
                        <Card model={model} key={model.id}/>
                    ))
                }
        </>
    )
}

export default Models