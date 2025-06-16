const productos =
   [
      {
         id: '01',
         name: 'Cheesy Beast',
         price: 9999,
         description: 'Hamburguesa doble carne, doble mix quesos',
         stock: '10',
         img: 'https://i.postimg.cc/7Z5bzmzG/hambur01.jpg',
         category: 'carne',
         promo: false
      }
      ,

      {
         id: '02',
         name: 'Bacon Lover',
         price: 10999,
         description: 'Hamburguesa doble carne, doble queso y panceta',
         stock: '10',
         img: 'https://i.postimg.cc/QdvPNds9/hambur02.jpg',
         category: 'carne',
         promo: false
      },

      {
         id: '03',
         name: 'Sweet Chicken',
         price: 12999,
         description: 'Hamburguesa pollo,queso, panceta y cebolla caramelizada',
         stock: '10',
         img: 'https://i.postimg.cc/vHx95Yft/hambur03.jpg',
         category: 'pollo',
         promo: false
      },

      {
         id: '04',
         name: 'Power Veggie',
         price: 12999,
         description: 'Medallon de quinoa, arroz y lentejas. Tomates asados y rucula',
         stock: '10',
         img: 'https://i.postimg.cc/Dz7T3cTp/hambur04.jpg',
         category: 'veggie',
         promo: false
      },

      {
    id: '05',
    name: 'Promo x2 Bacon Lover',
    price: 18999,
    description: '2 Hamburguesas Bacon Lover al mejor precio',
    stock: '5',
    img: 'https://i.postimg.cc/QdvPNds9/hambur02.jpg',
    category: 'promo',
    promo: true
  },

  {
  id: '06',
  name: 'Promo x2 Cheesy Beast',
  price: 17999,
  description: '2 Hamburguesas Cheesy Beast a precio especial',
  stock: '5',
  img: 'https://i.postimg.cc/7Z5bzmzG/hambur01.jpg',
  category: 'promo',
  promo: true
}

   ]
let error = false
export const getProducts = () => {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         if (!error) {
            resolve(productos)
         } else {
            reject('Hubo un error, intente más tarde')
         }
      }, 1500)
   })
}

export const getOneProduct = (id) => {

   return new Promise((resolve, reject) => {
      setTimeout(() => {
         if (!error) {
            let OneProduct = productos.find((item) => item.id === id)
            resolve(OneProduct)
         } else {
            reject('Hubo un error, intente más tarde')
         }
      }, 1500)
   })
}
