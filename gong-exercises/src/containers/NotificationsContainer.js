import React , {useEffect , useState} from 'react';
import useFetchFromLocalStore from '../data/useFetchFromLocalStore';
import DbApi from "../data/DbApi";
import Notifications from '../components/notifications/Notifications'
//import {notificationsListAPI} from '../JSON/notification';

function NotificationsConintainer (props) {
    const dataKey = 'NOTIFICATIONS';
    //const [notificationsList , setNotificationsList]=useState ([]);
    const [notificationsList, setNotificationsList, throbber] = useFetchFromLocalStore(dataKey, [], false);

    //const notificationsList = data;
/*    useEffect(()=>{
        setNotificationsList(DbApi.getNotifications());
    }, []);*/
    let isLoding = !notificationsList || !notificationsList.length || throbber ? true : false;
    console.log('throbber',throbber);
    return <Notifications notificationsList={notificationsList} throbber={isLoding}/>;
}

export default NotificationsConintainer;