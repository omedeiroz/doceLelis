import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';

const OrdersScreen = ({ onLogout }) => {
  const orders = [
    {
      id: '001',
      date: '15/09/2024',
      status: 'Em preparo',
      total: 'R$ 45,90',
      items: ['Brigadeiro Gourmet', 'Beijinho de Coco', 'Cajuzinho'],
    },
    {
      id: '002',
      date: '12/09/2024',
      status: 'Entregue',
      total: 'R$ 32,50',
      items: ['Trufa de Chocolate', 'Pudim de Leite'],
    },
    {
      id: '003',
      date: '10/09/2024',
      status: 'Entregue',
      total: 'R$ 28,00',
      items: ['Brigadeiro Tradicional', 'Doce de Leite'],
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Em preparo':
        return '#F39C12';
      case 'Entregue':
        return '#27AE60';
      default:
        return '#7F8C8D';
    }
  };

  const handleLogout = () => {
    onLogout();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image 
          source={require('../../assets/logo.jpg')} 
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.title}>Meus Pedidos</Text>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutText}>Sair</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        {orders.map((order) => (
          <View key={order.id} style={styles.orderCard}>
            <View style={styles.orderHeader}>
              <Text style={styles.orderId}>Pedido #{order.id}</Text>
              <Text style={styles.orderDate}>{order.date}</Text>
            </View>
            
            <View style={styles.orderStatus}>
              <View style={[styles.statusBadge, { backgroundColor: getStatusColor(order.status) }]}>
                <Text style={styles.statusText}>{order.status}</Text>
              </View>
              <Text style={styles.orderTotal}>{order.total}</Text>
            </View>

            <View style={styles.orderItems}>
              <Text style={styles.itemsTitle}>Itens:</Text>
              {order.items.map((item, index) => (
                <Text key={index} style={styles.itemText}>• {item}</Text>
              ))}
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8F0',
  },
  header: {
    backgroundColor: '#FFFFFF',
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  logo: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF6B6B',
    marginBottom: 10,
  },
  logoutButton: {
    backgroundColor: '#E74C3C',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
  },
  logoutText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  orderCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  orderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  orderId: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2C3E50',
  },
  orderDate: {
    fontSize: 14,
    color: '#7F8C8D',
  },
  orderStatus: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
  orderTotal: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#27AE60',
  },
  orderItems: {
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    paddingTop: 12,
  },
  itemsTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2C3E50',
    marginBottom: 6,
  },
  itemText: {
    fontSize: 14,
    color: '#7F8C8D',
    marginBottom: 2,
  },
});

export default OrdersScreen;
