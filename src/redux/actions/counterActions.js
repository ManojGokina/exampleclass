import { INCREASE_COUNT, DECREASE_COUNT } from "../types/counterTypes";

export const increaseCounter = () => {
    return{
        type:INCREASE_COUNT
    }
}


export const decreaseCount = () => {
    return {
        type: DECREASE_COUNT
    }
}

