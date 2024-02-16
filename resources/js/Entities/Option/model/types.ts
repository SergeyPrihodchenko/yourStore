export type Option = {
    id: number,
    title: string,
    values?: Value[]
}

export type Value = {
    id: number,
    option_id: number,
    title: string,
}