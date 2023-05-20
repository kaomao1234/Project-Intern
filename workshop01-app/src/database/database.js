import { generateUID } from "../utils";
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
import { getAuth } from "firebase/auth";
import { setRef } from "@mui/material";
class DataBase {
  constructor() {
    const firebaseConfig = {
      databaseURL: "https://mini-projectintern-default-rtdb.firebaseio.com/",
    };
    const app = initializeApp(firebaseConfig);
    this.database = getDatabase(app);
  }

  create(path, value) {
    set(ref(this.database, `${path}/`), value);
  }

  read(path) {
    return get(child(ref(this.database), `${path}/`));
  }

  update(path, value) {
    return update(ref(this.database, `${path}/`), value);
  }

  delete(path) {
    return remove(ref(this.database, `${path}/`));
  }
}

export default DataBase;
