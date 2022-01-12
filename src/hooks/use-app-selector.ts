import { useSelector, TypedUseSelectorHook } from 'react-redux';

import { RootState } from '../store';

const useAppSelector = useSelector as TypedUseSelectorHook<RootState>;

export default useAppSelector;
