import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const useSessionId = () => {
    const sessionId = useSelector((state:RootState) => state.session.sessionId);

    return sessionId
}

export default useSessionId   