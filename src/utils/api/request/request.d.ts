interface CustomOptionsType {
    repeat_request_cancel: boolean,
    loading: boolean, 
    concise_data_format: boolean,
    error_message_show: boolean, 
    code_message_show: boolean
}

interface AxiosConfigType {
    url: string,
    method: string
    [key: string]: any
}

interface LoadingOptionType {
    text?: string,
    fullscreen?: boolean,
    background?: string,
    [key: string]: any
}

