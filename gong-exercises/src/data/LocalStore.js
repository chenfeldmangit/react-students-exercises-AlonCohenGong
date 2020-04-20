class LocalStore {
    static putData (key, data) {
        try {
            localStorage.setItem(key, JSON.stringify(data));
        } catch(err) {
            console.log('putData error: ' ,err);
        }
    }
    static removeData (key) {
        try {
            localStorage.removeItem(key);
        } catch(err) {
            console.log('removeData error: ' ,err);
        }
    }
    static fetchDataFromStore (key, initialData) {
        try{
            const data = JSON.parse(localStorage.getItem(key));
            if (!data || data?.length==0){
                LocalStore.putData(key, initialData);
                return initialData;
            }
            return data;
        }catch(err){
            console.log('fetchDataFromStore error', err);
        }

    }

    static updateDataToStore (key, updatedData) {
        try{
            LocalStore.putData(key, updatedData);
                return updatedData;
        }catch(err){
            console.log('updateDataFromStore error', err);
        }

    }
}

export default LocalStore;