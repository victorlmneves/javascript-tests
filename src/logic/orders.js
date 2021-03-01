class OrdersAnalyzer {
    constructor() {
      this.weekdays = [
        "SUNDAY",
        "MONDAY",
        "TUESDAY",
        "WEDNESDAY",
        "THURSDAY",
        "FRIDAY",
        "SATURDAY",
      ]
      this.weekOrdersList = {}
      this.orders = []
    }
  
    weekOrders(weekdays) {
      weekdays.map(day => {
        return (this.weekOrdersList[day] = 0)
      })
    }
  
      getWeekday(stringDate) {
          const orderDate = new Date(stringDate)
          return orderDate.getDay()
      }
  
      getWeekdayString(dayNumber) {
          return this.weekdays[dayNumber]
      }
  
    totalQuantity(productId, orders) {
      // TODO: Implement
      let orderMap = {}
  
      this.weekOrders(this.weekdays)
  
      orders.map((order) => {
        order.orderLines.filter(orderLine => {
                  if(!orderMap[orderLine.productId]) {
                      // creates a zeroed consumption item
                      orderMap[orderLine.productId] = this.weekOrdersList
                  }
  
          if (orderLine.productId === productId) {
                      const weekDay = this.getWeekday(order.creationDate)
                      const weekDayText = this.getWeekdayString(weekDay)
            orderMap[orderLine.productId][weekDayText] = orderLine.quantity
          }
        })
      })
  
      return orderMap
    }
  }
  let analyzer = new OrdersAnalyzer()
  let orders = [
      {
          "orderId": 554,
          "creationDate": "2017-03-25T10:35:20Z",
          "orderLines": [
              { "productId": 9872, "name": "Pencil", "quantity": 3, "unitPrice": 3.00 }
          ]
      },
      {
          "orderId": 555,
          "creationDate": "2017-03-25T11:24:20Z",
          "orderLines": [
              { "productId": 9872, "name": "Pencil", "quantity": 1, "unitPrice": 3.00 },
              { "productId": 1746, "name": "Eraser", "quantity": 1, "unitPrice": 1.00 }
          ]
      },
      {
          "orderId": 453,
          "creationDate": "2017-03-27T14:53:12Z",
          "orderLines": [
              { "productId": 5723, "name": "Pen", "quantity": 4, "unitPrice": 4.22 },
              { "productId": 9872, "name": "Pencil", "quantity": 3, "unitPrice": 3.12 },
              { "productId": 3433, "name": "Erasers Set", "quantity": 1, "unitPrice": 6.15 }
          ]
      },
      {
          "orderId": 431,
          "creationDate": "2017-03-20T12:15:02Z",
          "orderLines": [
              { "productId": 5723, "name": "Pen", "quantity": 7, "unitPrice": 4.22 },
              { "productId": 3433, "name": "Erasers Set", "quantity": 2, "unitPrice": 6.15 }
          ]
      },
      {
          "orderId": 690,
          "creationDate": "2017-03-26T11:14:00Z",
          "orderLines": [
              { "productId": 9872, "name": "Pencil", "quantity": 4, "unitPrice": 3.12 },
              { "productId": 4098, "name": "Marker", "quantity": 5, "unitPrice": 4.50 }
          ]
      }
  ]
  // analyzer.setOrders(orders)
  console.warn('result: ', analyzer.totalQuantity(9872, orders))
  