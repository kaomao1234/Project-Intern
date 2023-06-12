import { initializeApp } from "firebase/app";
import {
    getDatabase,
    ref,
    set,
    get,
    child,
    onValue,
    push,
    update,
    remove,
} from "firebase/database";
class Database {
    database;
    constructor() {
        const firebaseConfig = {
            databaseURL: "https://mini-projectintern-default-rtdb.firebaseio.com/",
        };
        const app = initializeApp(firebaseConfig);
        this.database = getDatabase(app);
    }

    create(path: string, value:any) {
        set(ref(this.database, `${path}/`), value);
    }

    read(path: string) {
        return get(child(ref(this.database), `${path}/`));
    }

    update(path: string, value: any) {
        return update(ref(this.database, `${path}/`), value);
    }

    delete(path: string) {
        return remove(ref(this.database, `${path}/`));
    }
}

export default Database;
