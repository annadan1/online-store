import { useContext } from 'react';

import searchParamsContext from '../context/SearchParamsContext';

const useSearchParamsContext = () => useContext(searchParamsContext);

export default useSearchParamsContext;
