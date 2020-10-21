import React, {useEffect, useState} from 'react';
import Order                        from "../Components/Order";
import {useStateValue}              from "../Context/StateProvider";
import {db}                         from "../firebase";

import './orders.scss';

const Orders = () => {
    const [{basket, user}] = useStateValue();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if (user) {
            db.collection('users')
              .doc(user?.uid)
              .collection('orders')
              .orderBy('created', 'desc')
              .onSnapshot(snapshot => {
                  // give a realtime snapshot, if you push a value to DB, it gives you a realtime response
                  setOrders(snapshot.docs.map(doc => {
                      return {
                          id  : doc.id,
                          data: doc.data()
                      }
                  }))
              })
        } else {
            setOrders([]);
        }

    }, [user]);

    return (
        <div className="order">
            <h2>Votre commande</h2>
            <div className='orders__order'>
                {
                    orders?.map(order => (
                        <Order order={order} key={order.id}/>
                    ))
                }
            </div>
        </div>
    );
};

export default Orders;
