import React , {useEffect , useState} from 'react';
import Notifications from '../components/notifications/Notifications'
import {notificationsListAPI} from '../JSON/notification';

function NotificationsConintainer (props) {
    const [notificationsList , setNotificationsList]=useState ([]);

    useEffect(()=>{
        setNotificationsList([...notificationsListAPI])
    }, []);
    return <Notifications notificationsList={notificationsList}/>;
}

export default NotificationsConintainer;