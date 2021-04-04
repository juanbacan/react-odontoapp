import {useState, useEffect, useContext} from 'react';
import { FirebaseContext } from '../firebase';

const useCitas = orden => {
    const [citas, guardarCitas] = useState([]);
    const { firebase } = useContext(FirebaseContext);

    useEffect(() => {
        const obtenerCitas = () => {
        firebase.db.collection('citas').orderBy(orden, 'desc').onSnapshot(manejarSnapshot);
        }
        obtenerCitas();
    }, []);

    function manejarSnapshot(snapshot) {
        const citas = snapshot.docs.map(doc => {
        return {
            id: doc.id,
            ...doc.data()
        }
        });
        guardarCitas(citas);
    }
    return {
        citas
    }
}
export default useCitas;