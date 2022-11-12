import { useContext } from 'react';

import searchParamsContext from '../context/SearchParamsContext';

const useAuth = () => useContext(searchParamsContext);

export default useAuth;
