import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Header } from './components/Header';
import { CategoryChips } from './components/CategoryChips';
import { BookGrid } from './components/BookGrid';
import { FloatingCartButton } from './components/FloatingCartButton';
import { BOOKS } from './data';

export default function App() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <View style={styles.screen}>
      {/* 1. Header cố định trên cùng */}
      <Header />

      {/* 2. Chỉ Chips + Grid cuộn; paddingBottom để nút giỏ không che sách cuối */}
      <ScrollView contentContainerStyle={styles.content}>
        <CategoryChips />

        <View style={styles.gridSection}>
          <BookGrid
            books={BOOKS}
            onPressBook={(id) => console.log('Mở sách', id)}
          />
        </View>
      </ScrollView>

      {/* 3. Nút giỏ nổi nằm ngoài ScrollView */}
      <FloatingCartButton
        count={cartCount}
        onPress={() => setCartCount((count) => count + 1)}
      />

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  content: {
    padding: 16,
    paddingBottom: 100,
  },
  gridSection: {
    marginTop: 20,
  },
});
