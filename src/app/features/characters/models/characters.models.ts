export interface Character{
    "id": string,
    "name": string,
    "status": StatusList,
    "species": string,
    "type": string,
    "gender": "Male",
    "origin": {
    "name": string,
    "url": string
    },
    "location": {
    "name": string,
    "url": string
    },
    "image": string,
    "episode": string[],
    "url": string,
    "created": string
}

export interface ApiResponse{
    "info":{
        "count": number,
        "pages": number| null,
        "next": string | null,
        "prev": string | null
    },
    "results":Character[]
}

export enum StatusList{
    Alive,
    Dead,
    unknown
}
export enum GenderList{
    Female,
    Male,
    Genderless,
    unknown
}