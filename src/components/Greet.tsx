import { Person } from "./Person"

type GreetProps =  {
    name: string,
    messageCount?: number,    //it is optional 
    isLoggedIn:boolean
}

export const Greet =(props: GreetProps) =>{
    const {messageCount = 0} = props
    return (
        <div>
            <h2>
                {
                props.isLoggedIn
                ?`Welcome ${props.name}! You have ${messageCount} unread messages`
                :'Welcome Guest' 
                }
            </h2>
        </div>
    )
}
