import { Flex, Menu, MenuButton, MenuList, MenuItem, Button, Divider, Select, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import Card from "./Card"
import type { ModelsListIF } from "../interfaces"
type Props = {
    models: ModelsListIF[]
}

const Models:React.FC<Props> = ({models}) => {
    const [allModels, setallModels] = useState<ModelsListIF[]>(models)
    const [filter, setFilter] = useState<string>("")
    const [sort, setSort] = useState<string>("")
    const [modelsFiltered, setModelsFiltered] = useState<ModelsListIF[]>(models)
    useEffect(() => {
        setModelsFiltered(allModels)
    }, [allModels])
    const handleFilter = (e:any) => {
        setFilter(e.target.value)
        if(e.target.value === ""){
            setModelsFiltered(allModels)
        }else{
        setModelsFiltered(allModels.filter(model => model.segment.toLowerCase() === e.target.value.toLowerCase()))
        }
    }

    const handleSort = (e:any) => {
        setSort(e.target.value)
        if(e.target.value === ""){
            setModelsFiltered(allModels)
        }else{
            //@ts-ignore
            setModelsFiltered(modelsFiltered.sort((a, b) => {
                if (e.target.value === "Precio") {
                    return a.price - b.price
                } else if (e.target.value === "Año") {
                    return a.year - b.year
                } else if (e.target.value === "Alfabético") {
                    return  a.name.localeCompare(b.name)
                }
            }))
        }
    }

    return (
        <>
            <Flex
            width="100%"
            justifyContent="space-between"
            mt="1rem"
            paddingBottom="1rem"
            >
                <Select 
                ml="1rem"
                width="fit-content"
                backgroundColor="white"
                border="none"
                value={filter}
                fontWeight="bold"
                onChange={handleFilter}
                placeholder="Filtrar por"
                display={["block", "block", "block", "none"]}
                >          
                        <option value="Sedan">Sedan</option>
                        <option value="Hatchback">Hatchback</option>
                        <option value="Pickups y Comerciales">Pickups y Comerciales</option>
                        <option value="SUVs">SUVs</option>
                </Select>
            <Flex
            display={["none", "none", "none", "flex"]}
            width="fit-content"
            direction="row"
            gap="1rem"
            ml="2rem"
            alignItems="center"
            >
                <Text
                fontWeight="bold"
                width="fit-content"
                >
                    Filtrar por:
                </Text>
                <Button
                value="Sedan"
                onClick={handleFilter}
                backgroundColor={filter === "Sedan" ? "#f7f7f7" : "transparent"}
                >
                    Sedan
                </Button>
                <Button
                value="Hatchback"
                onClick={handleFilter}
                backgroundColor={filter === "Hatchback" ? "#f7f7f7" : "transparent"}
                borderRadius="18px"
                >
                    Hatchback
                </Button>
                <Button
                value="Pickups y Comerciales"
                onClick={handleFilter}
                backgroundColor={filter === "Pickups y Comerciales" ? "#f7f7f7" : "transparent"}
                borderRadius="18px"
                >
                    Pickups y Comerciales
                </Button>
                <Button
                value="SUVs"
                onClick={handleFilter}
                backgroundColor={filter === "SUVs" ? "#f7f7f7" : "transparent"}
                borderRadius="18px"
                >
                    SUVs
                </Button>
                <Button
                value=""
                onClick={handleFilter}
                backgroundColor={filter === "" ? "#f7f7f7" : "transparent"}
                borderRadius="18px"
                >
                    Todos
                </Button>
            </Flex>
                <Select 
                mr="1rem"
                width="fit-content"
                backgroundColor="white"
                border="none"
                fontWeight="bold"
                value={sort}
                onChange={handleSort}
                placeholder="Ordenar por">                  
                        <option value="Precio">Precio</option>
                        <option value="Año">Año</option>
                        <option value="Alfabético">Alfabético</option>
                </Select>
            </Flex>
            <Divider width={"100%"} />
            <Flex
            direction={["column", "column", "row"]}
            wrap="wrap"
            >
                {
                    modelsFiltered.map(model => (
                        <Card model={model} key={model.id}/>
                    ))
                }
            </Flex>
        </>
    )
}

export default Models