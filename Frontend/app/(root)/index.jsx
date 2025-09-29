import { SignedIn, SignedOut, useUser } from '@clerk/clerk-expo';
import { Link, router, useRouter } from 'expo-router';
import { Text, TouchableOpacity, View, FlatList, Alert, RefreshControl } from 'react-native';
import { SignOutButton } from '../../components/SignOutButton';
import { useTransactions } from '../../hooks/useTransactions';
import { useEffect } from 'react';
import PageLoader from '../../components/pageLoader';
import { styles } from '../../assets/styles/home.styles';
import {Image} from 'expo-image';
import { Ionicons } from '@expo/vector-icons';
import {BalanceCard} from '../../components/BalanceCard';
import { TransactionItem } from '../../components/TransactionItem';
import { NoTransactionsFound } from '../../components/NoTransactionsFound';
import { useState } from 'react';

export default function Page() {
  const { user } = useUser();
  const router = useRouter();
  const {transactions, summary, isLoading, loadData, deleteTranscation} = useTransactions(user.id);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    await loadData();
    setRefreshing(false);
  }

  useEffect(() => {
    loadData()
  },[loadData])

  if (isLoading && !refreshing) {
    return <PageLoader />
  }

  const handleDelete = (id) => {
    Alert.alert(
      "Delete Transaction",
      "Are you sure you want to delete this transaction?",[
        { text: "Cancel", style: "cancel" },
        { text: "Delete", style: "destructive", onPress: () => deleteTranscation(id)},
      ]
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {/* HEADER */}
        <View style={styles.header}>
          {/* HEADER LEFT */}
            <View style={styles.headerLeft}>
              <Image
                source={require('../../assets/images/logo.png')}
                style={styles.headerLogo}
                resizeMode='contain'
              />
                <View style={styles.welcomeContainer}>
                  <Text style={styles.welcomeText}>Welcome,</Text>
                  <Text style={styles.usernameText}>
                    {user?.emailAddresses[0]?.emailAddress.split('@')[0]}
                  </Text>
                </View>
            </View>
          {/* HEADER RIGHT */}
            <View style={styles.headerRight}>
              <TouchableOpacity style={styles.addButton} onPress={() => router.push("/create")}>
                <Ionicons name="add" size={20} color="#FFF"/>
                <Text style={styles.addButtonText}>Add</Text>
              </TouchableOpacity>
              <SignOutButton />
            </View>
        </View>

        <BalanceCard summary={summary} />

        <View style={styles.transactionsHeaderContainer}>
          <Text style={styles.sectionTitle}>Recent Transactions</Text>
        </View>
      </View>
        <FlatList
          style={styles.transactionsList}
          contentContainerStyle={styles.transactionsListContent}
          data={transactions}
          renderItem={({item})=>(
          <TransactionItem item={item} onDelete={handleDelete}/>
          )}
          ListEmptyComponent={<NoTransactionsFound />}
          showsVerticalScrollIndicator={false}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}
        />
    </View>
  );
}