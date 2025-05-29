const productos =
   [
      {
         id: '01',
         name: 'Hambur1',
         price: 9999,
         description: 'Hamburguesa doble carne, doble mix quesos',
         stock: '10',
         img: 'https://i.postimg.cc/7Z5bzmzG/hambur01.jpg',
         category: 'carne'
      }
      ,

      {
         id: '02',
         name: 'Hambur2',
         price: 10.999,
         description: 'Hamburguesa doble carne, doble queso y panceta',
         stock: '10',
         img: 'https://i.postimg.cc/QdvPNds9/hambur02.jpg',
         category: 'carne'
      },

      {
         id: '03',
         name: 'Hambur3',
         price: 10.599,
         description: 'Hamburguesa simple pollo,queso, panceta y cebolla caramelizada',
         stock: '10',
         img: 'https://i.postimg.cc/vHx95Yft/hambur03.jpg',
         category: 'pollo'
      },

      {
         id: '04',
         name: 'Hambur4',
         price: 10.599,
         description: 'Hamburguesa vegana, pan rosa de remolacha, medallon de quinoa, arroz y lentejas. Tomates asados , lechuga , pesto y rucula',
         stock: '10',
         img: 'https://i.postimg.cc/Dz7T3cTp/hambur04.jpg',
         category: 'veggie'
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
      }, 2000)
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
      }, 2000)
   })
}
