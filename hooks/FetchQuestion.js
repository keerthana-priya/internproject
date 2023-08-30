import { useEffect, useState } from "react"
import data, {answers} from "../database/data"
import { useDispatch } from "react-redux"

/**redux action */
import * as Action from '../redux/question_reducer'


/**fetch question hook to fetch api data and set value to store */
export const useFetchQuestion = () => {
    const dispatch = useDispatch();
    const [getData,setGetData] = useState({ isLoading : false, apiData : [], serverError: null})

    useEffect(() => {
        setGetData(prev =>({...prev, isLoading : true}));

        /**async function fetch backend data */
        (async () => {
            try{
                let question = await data;

                if(question.length > 0){
                    setGetData(prev => ({...prev, isLoading : false}));
                    setGetData(prev => ({...prev, apiData : {question , answers}}));

                    /**dispatch an action*/
                    dispatch(Action.startExamAction({question , answers}))
                }else{
                    throw new Error("No Question Available")
                }
            } catch(error){
                setGetData(prev => ({...prev, isLoading : false}));
                setGetData(prev => ({...prev, serverError : error}));
            }
        })();
    },[dispatch]);

    return [getData, setGetData];
}

/**moveAction dispatch function */
export const MoveNextQuestion = () => async(dispatch)=>{
    try{
        dispatch(Action.moveNextAction());/**increase trace  by 1*/
    }catch(error){
        console.log(error)
    }
}

/**PrevAction dispatch function */
export const MovePrevQuestion = () => async(dispatch)=>{
    try{
        dispatch(Action.movePrevAction());/**drecease trace  by 1*/
    }catch(error){
        console.log(error)
    }
}
