import { inject } from 'vue'

export function useOnClickAddOrRemove() {
   const { cartItems } = inject('cart')

   const removeFromCart = (item) => {
      cartItems.value.splice(cartItems.value.indexOf(item), 1)
      item.isAdded = false
   }
   const addToCart = (item) => {
     cartItems.value.push(item)
      item.isAdded = true
   }

   const onClickAddOrRemove = (item) => {
      if (!item.isAdded) {
        addToCart(item)
      } else {
         removeFromCart(item)
       }
   }

   return {
      onClickAddOrRemove,
      removeFromCart,
      addToCart
   }
}

