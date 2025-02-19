import {getFirestore, getDocs, collection} from "firebase/firestore";
import { useEffect, useState } from "react";
import { app } from "../../services/firebaseConfig";

const useUsers = () => {
  const [users, setUsers] = useState([]);

  const db = getFirestore(app);
  const userCollectionRef = collection(db, "users");

  //pegando coleção de dados do firebase
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);
      /* tranformando lista de documentos */
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);

  return users;
};

export default useUsers;
