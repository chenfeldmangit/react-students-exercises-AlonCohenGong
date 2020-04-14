import LocalStore from './LocalStore';
import {tweete} from '../JSON/tweets';
import {notificationsListAPI} from '../JSON/notification';


class DbApi {
    //tweets
    static waitAsec () {
        return new Promise(resolve => {
            console.log('wait a seconed start ...');
            setTimeout(()=>{console.log('wait a seconed end!!'); resolve();},1000)
        });
    }
    static async getNewsTweets() {
        await this.waitAsec();
        return await LocalStore.fetchDataFromStore('NEWS-TWEETS', tweete);
    }
    static async updateNewsTweets(data) {
        await this.waitAsec();
        return await LocalStore.updateDataToStore('NEWS-TWEETS', data);
    }
    //notifications
    static async getNotifications() {
        await this.waitAsec();
        return await LocalStore.fetchDataFromStore('NOTIFICATIONS', notificationsListAPI);
    }
    static async updateNotifications(data) {
        return await LocalStore.updateDataToStore('NOTIFICATIONS', data);
    }
    static async getDataByKey(key) {
        switch (key) {
            case 'NEWS-TWEETS':
                return await DbApi.getNewsTweets();
                break;
            case 'NOTIFICATIONS':
                return await DbApi.getNotifications();
                break;
            default:
                return [];

        }
    }
    static async setDataByKey(key, data) {
        switch (key) {
            case 'NEWS-TWEETS':
                return await DbApi.updateNewsTweets(data);
                break;
            case 'NOTIFICATIONS':
                return await DbApi.updateNotifications(data);
                break;
            default:
                return [];

        }
    }

}

export default DbApi;