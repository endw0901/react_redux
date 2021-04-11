import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../state';

// state/reducersのtypeを理解するためのRootStateを使ったuseSelector hook
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
