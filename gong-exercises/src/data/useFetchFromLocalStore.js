import { useState, useEffect } from 'react';
import {connect} from 'react-redux';
import Throbber from '../UI/Throbber';
import Modal from '../UI/Modal';
import DbApi from "../data/DbApi";

function useFetchFromLocalStore (key, initialData, throbberInit) {
    const [data, setData] = useState(initialData);
    const [throbber, setThrobber] = useState(throbberInit);

    async function getData(key) {
        console.log('useFetchFromLocalStore getData', key);
        setThrobber(true);
        try{
            const dataFromDb = await DbApi.getDataByKey(key);
            setData(dataFromDb);

            if(dataFromDb.length){
                console.log('dataFromDbbbbbbbbbbbbbbbb', dataFromDb);

            }
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




export default useFetchFromLocalStore;
//export default connect(mapStateToProps)(useFetchFromLocalStore);