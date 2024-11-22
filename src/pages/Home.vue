<script setup>
import { inject, ref } from 'vue'
import { useFetchItemsStore } from '@/stores/FetchItemsStore'
import { useAddToFavoriteStore } from '@/stores/AddToFavoriteStore'

import UCardList from '@/components/UCardList.vue'
import UInput from '@/components/UInput.vue'
import USelect from '@/components/USelect.vue'
import UBrands from '@/components/UBrands.vue'

//--------------------------------------------------------------------------------------
// const nums = [1, 2, 3, 4, 5, 6, 7, 8]
// // Не забываем, что аккумулятор идёт первым!
// function findAverage(acc, item, index, arr) {
//   const sum = acc + item

//   // Если мы на последнем элементе
//   // вычисляем среднее арифметическое делением на кол-во элементов:
//   if (index === arr.length - 1) {
//     return sum / arr.length
//   }

//   return sum
// }

// const average = nums.reduce(findAverage, 0)
// // 4.5
// console.log(average)
// console.log(nums)

// const bankAccounts = [
//   { id: "123", amount: 19 },
//   { id: "345", amount: 33 },
//   { id: "567", amount: 4 },
//   { id: "789", amount: 20 },
// ]

// const totalAmount = bankAccounts.reduce(
//   // Аргумент sum является аккумулятором,
//   // в нём храним промежуточное значение
//   function (sum, currentAccount) {
//     // Каждую итерацию берём текущее значение
//     // и складываем его с количеством денег
//     // на текущем счету
//     return sum + currentAccount.amount
//   },
//   0 // Начальное значение аккумулятора
// )

// console.log(totalAmount)
// // 76

// const arrayObj = [
//     { name: "Nikoo", age: 20 },
//     { name: "Nikyy", age: 10 },
//     { name: "Nikee", age: 30 },
// ];

// let objj = arrayObj.reduce((acum, current) => {
//     acum[current.name] = current.age;
//     return acum;
// }, { } );
// console.log(objj);

// // Если мы хотим получить из массива объект, то стартовым значением аккумулятора будет объект
// const list = [
//   { key: 'name', value: 'John' },
//   { key: 'age', value: 30 },
//   { key: 'city', value: 'New York' }
// ];

// const obj = list.reduce((accumulator, currentItem) => {
//   accumulator[currentItem.key] = currentItem.value;
//   return accumulator;
// }, {});
// console.log(obj)


// //map()
// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// let result = arr.map(function(elem) {
// 	return elem.map(function(num) {
// 		return num * num;
// 	});
// });

// console.log(result);
//-----------------------------------------------------------------------------
const { addToCart, removeFromCart } = inject('cart')

const fetchItemsStore = useFetchItemsStore()
const addToFavoriteStore = useAddToFavoriteStore()

const message = ref('')

const onClickAddPlus = (item) => {
  if (!item.isAdded) {
    addToCart(item)
  } else {
     removeFromCart(item)
   }
}
</script>

<template>
  <section class="home">
   <div class="home__items-brands">
   <UBrands class="home__brands" />
</div>
    <div class="home__forms">
      <h1 class="home__title">Все кроссовки</h1>
      <form class="home__form-sel">
        <USelect 
        v-model="fetchItemsStore.filters.sortBy" 
        name="sneakers"
         />
      </form>
      <form class="home__form-input">
        <UInput 
         v-model="message"
         label="Удачного поиска!)"
         name="name"
        />
      </form>
    </div>

    <UCardList
      :items="fetchItemsStore.items"
      @add-to-favorite="addToFavoriteStore.addToFavorite"
      @add-to-cart="onClickAddPlus"
      class="home__card-list"
    />
  </section>
</template>

<style lang="scss" scoped>
.home {
   @media (min-width:$tablet){
       padding-inline-start: toRem(19); 
   }

   &__items-brands {
      @include adaptiveValue("margin-block-end", 32, 20);
      overflow-x: auto;
   }

   &__brands {
      display: flex;
      align-items: center;
      justify-content: space-between;

      @media (max-width:toEm(618)){
         width: toRem(580);
      }
      @media (max-width:$mobileSmall){
         width: toRem(490);
      }
   }

  &__forms {
   @include adaptiveValue("margin-block-end", 28, 14);
    display: grid;
    grid-template-columns: 1fr auto auto;
    align-items: center;
    row-gap: toRem(16);
  }

  &__title {

   color: var(--grey-color);
  }

  &__form-sel {
    @media (max-width: $tablet) {
      display: none;
    }
  }

  &__form-input {
    position: relative;
    margin-inline-start: toRem(16);

    @media (max-width: $tablet) {
      display: none;
    }
  }

  &__card-list {
   @media (max-width:$tablet){
      @include adaptiveValue("padding-block-end", 109, 94);
   }
  }
}
</style>
