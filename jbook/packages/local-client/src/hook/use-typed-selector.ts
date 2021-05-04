import { useSelector, TypedUseSelectorHook } from 'react-redux';
// import { createSelectorHook } from 'react-redux';
import { RootState } from '../state';

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
// export const useTypedSelector = createSelectorHook<RootState>();
