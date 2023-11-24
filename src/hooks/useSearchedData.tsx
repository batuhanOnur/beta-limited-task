import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const useSearchedData = () => {
    const data = useSelector((state:RootState) => state.search.searchData);

    return data
}

export default useSearchedData   