import { Article } from "./Article";
import { Evenement } from "./Evt";

export interface Member{
    id:string,
    cin:string,
    name:string,
    type:string,
    cv:string,
    createdDate:string,
    tab_pub : Article[],
    tab_evt:Evenement[]
}
