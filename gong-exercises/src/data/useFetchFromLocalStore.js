import { useState, useEffect } from 'react';
import Throbber from '../UI/Throbber';
import Modal from '../UI/Modal';
import DbApi from "../data/DbApi";

export default function useFetchFromLocalStore (key, initialData, throbberInit) {
    const [data, setData] = useState(initialData);
    const [throbber, setThrobber] = useState(throbberInit);

    async function getData(key) {
        console.log('useFetchFromLocalStore getData', key);
        setThrobber(true);
        try{
            const dataFromDb = await DbApi.getDataByKey(key);
            setData(dataFromDb);
            setThrobber(false);
            console.log('useFetchFromLocalStore getData end', key);
        }catch(err){
            setThrobber(false);
            console.error('useFetchFromLocalStore getData error: ', err);
        }
    }

    async function updateData(data) {
        setThrobber(true);
        try{
            const dataFromDb = await DbApi.setDataByKey(key, data);
            setThrobber(false);
        }catch(err){
            setThrobber(false);
            console.error('useFetchFromLocalStore updateData error: ', err);
        }
    }

    useEffect( ()=>{
        getData(key);
    },[]);

    useEffect(()=>{
        updateData(data);
    },[data]);

    return [data, setData, throbber];
}
