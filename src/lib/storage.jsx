import Storage from "react-native-storage";
import AsyncStorage from "@react-native-async-storage/async-storage";

const storage = new Storage({
    storageBackend: AsyncStorage,

    // 無期限
    // defaultExpires: null,

    // 3日
    defaultExpires: 1000 * 3600 * 72,
    enableCache: true,
});

export { storage };
