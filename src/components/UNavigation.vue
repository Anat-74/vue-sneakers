<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useCartStore } from '@/stores/CartStore'
import UButton from '@/components/UButton.vue'

const cartStore = useCartStore()

const cartDialog = ref(null)

function showCartDialog() {
     if (!cartDialog.value) {
    return
  }
   cartDialog.value.showModal();
}

onMounted(() => {
   cartDialog.value = window.cartDialog || null
})

onUnmounted(() => {
  // Закрываем диалог при размонтировании
  if (cartDialog.value && typeof cartDialog.value.close === 'function') {
    cartDialog.value.close();
  }
  // Освобождаем ссылку
   cartDialog.value = null;
})

</script>

<template>
   <div class="menu">
      <slot name="search"></slot>
      <UButton
      @click="showCartDialog" 
      :totalPrice="cartStore.totalPrice"
      icon="opencart"
      class="menu__cart" 
      >
         <span class="menu__price">{{ cartStore.totalPrice }} <font-awesome-icon icon="fa-solid fa-ruble-sign" /></span>
      </UButton>

         <slot name="social"></slot>

      <nav class="menu__nav nav">
         <ul class="nav__list">
            <li class="nav__item">
            <slot name="home"></slot>
            </li>

            <li class="nav__item">
               <router-link to="/favorites" class="nav__link">
                  <font-awesome-icon icon="fa-regular fa-heart"
                  />
               <span class="nav__favorite">{{$t('navigation.favorite')}}</span>
            </router-link>
            </li>

            <li class="nav__item">
               <router-link to="/orders" class="nav__link">
                  <font-awesome-icon icon="fa-regular fa-user"
                  />
               <span class="nav__profile">{{$t('navigation.profile')}}</span>
            </router-link>
            </li>
         </ul>
      </nav>
   </div>
</template>

<style lang="scss" scoped>
.menu {
   display: flex;
   justify-content: center;
   align-items: center;
   @media (min-width:$tablet){
      background-color: var(--transparent-color);
   }

   @media (max-width:$tablet){
      @include adaptiveValue("column-gap", 64, 14);
      border-top: 2px solid var(--whitesmoke-color);
   }

   &__cart {
      position: relative;
      display: flex;
      flex-direction: row-reverse;
      column-gap: toRem(12);

      @media (max-width:$tablet){
         @include adaptiveValue("padding-inline-end", 32, 4);
         column-gap: toRem(0);
      }
   }

   &__price {
      font-weight: 600;
      color: var(--second-color);
      transition: .2s;

      svg {
            color: var(--second-hover);
      }

      @media (any-hover: hover) {
         &:hover {
            color: var(--orange-color);
      }
   }

      @media (max-width:$tablet){
         display: flex;
         align-items: center;
         column-gap: toRem(2);
         padding-inline: toRem(4);
         position: absolute;
         top: 50%;
         left: 100%;
         transform: translateY(-50%);
         border-radius: toRem(4);
         font-size: toRem(14);
         font-weight: 600;
         letter-spacing: toRem(1.5);
         color: var(--second-color);

         svg {
            display: none;
         }
      }
   }
}

.nav {
      &__list {
       display: flex;
       @media (min-width:$tablet){
         column-gap: toRem(32);
       }
   }

      &__item{
       display: flex;
       column-gap: toRem(8);
       font-weight: 400;
      }

      &__link {
      display: flex;
      column-gap: toRem(8);
      transition: color .2s ease;
      color: rgb(0 0 0 / .7);

      @media (max-width:$tablet){
         color: var(--grey-color);
      }

      svg {
         height: toRem(18);
         @media (max-width:$tablet){
            @include adaptiveValue("height", 28, 22);
         }
      }

      @media (any-hover: hover) {
         &:hover {
            color: var(--danger-color);
      }
   } 
}
   &__price {
         font-weight: 600;
      }

      @media (max-width:$tablet){
      .nav__list {
      @include adaptiveValue("column-gap", 105, 25);
      align-items: center;
      justify-content: end;
      }

      .nav__favorite {
         display: none;
   }

      .nav__profile {
         display: none;
      }
   }
}

.router-link-active {
   color: var(--danger-color);

   @media (max-width:$tablet){
   padding-inline: toRem(3);
   padding-block: toRem(1);
   border-radius: toRem(6);
   color: var(--whitesmoke-color);
   background-color: var(--danger-color);
   }
}
</style>