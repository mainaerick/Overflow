import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { RootState } from './redux/RootReducer';
import { AppDispatch } from './redux/Store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
