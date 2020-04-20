import LocalStore from './LocalStore';
import {tweete} from '../JSON/tweets';
import {notificationsListAPI} from '../JSON/notification';


class DbApi {
    //tweets
    static waitAsec () {
        return new Promise(resolve => {
            //console.log('wait a seconed start ...');
            setTimeout(()=>{console.log('wait a seconed end!!'); resolve();},1000)
        });
    }
    static async setUserLogOut() {
        return await LocalStore.removeData('LOGIN');
    }

    static async setUserLogIn(credData) {
        return await LocalStore.putData('LOGIN', credData);
    }
    static async getUserLogIn(initialData) {
        return await LocalStore.fetchDataFromStore('LOGIN', initialData);
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

    /* --------  added for redux ---------------*/
    static addTweetLikeToDB (key) {
        console.log('onLikeClickHandler' , key);
        DbApi.getNewsTweets()
            .then((newsItems)=>{
                console.log('DB set key newsItems', key, newsItems);
                const tmpNewsItems = newsItems.map((item)=> (item.id==key ? {...item, 'liked': !item.liked} : item ));
                //setNewsItems(DbApi.updateNewsTweets([...tmpNewsItems]));
                DbApi.updateNewsTweets(tmpNewsItems);

            });


    };

    static deleteTweetFromDB(key) {
        console.log('onLikeClickHandler' , key);
        DbApi.getNewsTweets()
            .then((newsItems)=>{
                console.log('DB delete key newsItems', key, newsItems);
                const tmpNewsItems = newsItems.filter((item)=> item.id != key);
                //setNewsItems(DbApi.updateNewsTweets([...tmpNewsItems]));
                DbApi.updateNewsTweets(tmpNewsItems);

            });
    };
    static addNewTweetToDB(newTweet) {
        DbApi.getNewsTweets()
            .then((newsItems)=>{
                console.log('add new tweet to DB', newTweet);
                const tmpNewsItems = [newTweet, ...newsItems];
                //setNewsItems(DbApi.updateNewsTweets([...tmpNewsItems]));
                DbApi.updateNewsTweets(tmpNewsItems);

            });
    };

}

export default DbApi;