
type ActionType=PLUS_COUNTER|MINUS_COUNTER
export const currentReducer=(state:any,action:ActionType)=>{
        switch (action.type) {
            case "PLUS_COUNTER":
                return state+1
            case "MINUS_COUNTER":
                return state-1
            default :
                return state
        }
}
export const PlusCounterAC=()=>{
    return{type:'PLUS_COUNTER'} as const
}
type PLUS_COUNTER=ReturnType<typeof PlusCounterAC>
export const MinusCounterAC=()=>{
    return{type:'MINUS_COUNTER'} as const
}
type MINUS_COUNTER=ReturnType<typeof MinusCounterAC>