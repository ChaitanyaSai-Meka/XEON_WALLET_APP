import {useCallback, useState} from 'react';
import {Alert} from 'react-native';
import {API_URL} from'../constants/api';

export const useTransactions = (userId) => {
    const [transactions , setTransactions] = useState([]);
    const [summary , setSummary] = useState({
        balance : 0,
        income : 0,
        expenses : 0
    });
    const [isLoading , setLoading] = useState(true);

    //useCallback hook is used to memoize the fetchTransactions function.
    const fetchTransactions = useCallback(async () => {
        try {
            const response = await fetch(`${API_URL}/transactions/${userId}`);
            const data = await response.json();
            setTransactions(data);
        } catch (error) {
            console.log("Error while fetching transactions",error);
        }
    }, [userId])

    const fetchSummary = useCallback(async () => {
        try {
            const response = await fetch(`${API_URL}/transactions/summary/${userId}`);
            const data = await response.json();
            setSummary(data);
        } catch (error) {
            console.log("Error while fetching summary",error);
        }
    }, [userId])

    const loadData = useCallback(async () => {
        if (!userId) return;
        setLoading(true);

        try {
            await Promise.all([fetchTransactions(), fetchSummary()]);
        } catch (error) {
            console.log("Error while loading data",error);
        }finally{
            setLoading(false);
        }
    }, [fetchSummary, fetchTransactions, userId])

    const deleteTranscation = async (id) => {
        try {
            const response = await fetch(`${API_URL}/transactions/${id}`,{method: 'DELETE'});
            if (!response.ok) {
                throw new Error("Failed to delete transaction");
            }
            loadData();
            Alert.alert("Success", "Transaction deleted successfully");
        } catch (error) {
            console.log("Error while deleting the transaction: ",error);
            Alert.alert("Error", error.message);
        }
    };
    return {transactions, summary, isLoading, loadData, deleteTranscation};

};