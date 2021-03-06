export type ModelsListIF = {
    id: number,
    name: string,
    segment: string,
    year: number,
    thumbnail: string,
    photo: string
    price: number
}

export type ModelIF = {
    id: number,
    name: string,
    year: number,
    segment: number,
    price: number,
    title: string,
    description: string,
    thumbnail: string,
    photo: string,
    model_features: [ 
        {
            name: string,
            description: string,
            image: string   
        }
    ],
    model_highlights: [
        {
            title: string,
            content: string,
            image: string
        }
    ]   
}