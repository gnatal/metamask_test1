import api from './index'

interface ICallMeta {
    address: string;
    id: string;
}

async function callMeta({ address, id }: ICallMeta) {
    try {
        const response = await api.get(`${address}/${id}/`);
        // console.log(response.data);
        const { top_ownerships } = response.data;
        return top_ownerships;
    } catch (e) {
        return false;
    }
}

export default callMeta;