import React from 'react';
import { useParams } from 'react-router';

import Order from '../Order/Order';
import OrderList from '../OrderList/OrderList';
import Review from '../Review/Review';

const Usertopic = () => {
   let{topicId} = useParams()
   return (
      <div>
         {
            topicId === "order" ? <Order /> :
               topicId==="order-list"?<OrderList/>: <Review/>
         }
      </div>
   );
};

export default Usertopic;