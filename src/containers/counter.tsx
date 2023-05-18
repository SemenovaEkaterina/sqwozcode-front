import React, { useCallback, useEffect } from 'react';
import Counter from '../components/counter';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from '../store/counterSlice';
import useApiClient from '../libs/api-client';

const useLoader = async () => {
    const apiClient = useApiClient();

    useEffect(() => {
        const fetchData = async () => {
            const values = await apiClient.getList('1');
            console.log('values', values);
        }
        fetchData();
        
    }, [apiClient]);
}

const CounterContainer = () => {
    const dispatch = useDispatch();

    const value = useSelector((state: any) => state.counter.value);
    const incrementValue = useCallback(() => {dispatch(increment())}, [dispatch]);

    useLoader();

    return (
        <Counter value={value} increment={incrementValue} />
    );
}

export default CounterContainer;
