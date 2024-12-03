<script setup>
 defineProps({
      label: {
         type: String,
         required: false
      },
      color: {
         type: String,
         required: false
      },
      rounded: {
         type: Boolean,
         required: false
      },
      disabled: {
         type: Boolean,
         required: false
      },
      outlined: {
         type: Boolean,
         required: false
      },
      icon: {
         type: String,
         required: false
      },
      size: {
         type: String,
         default: 'normal'
    },
      close: {
         type: String,
         required: false
    },
    add: {
         type: String,
         required: false
    },
    totalPrice: {
         type: Number,
         required: false
    },
    toggle: {
         type: String,
         required: false
    },
    isOpenMenu: {
         type: Boolean,
         required: false
    },
    favorite: {
         type: String,
         required: false
    },
    isFavorite: {
         type: Boolean,
         required: false
    },
    isAdded: {
         type: Boolean,
         required: false
    },
    tab: {
         type: String,
         required: false
    },
    burger: {
         type: String,
         required: false
    },
    isOpen: {
         type: Boolean,
         required: false
    },
 })

 const emit = defineEmits(['click'])
   const clickOnButton = () => {
      emit('click')
   }
</script>

<template>
   <button 
      type="button"
      @click="clickOnButton"
      :disabled="disabled"
      :class="[
      'btn',
      { 'btn_burger': burger },
      { 'btn_toggle-menu': toggle }, { 'btn_is-open': isOpenMenu },
      { 'btn_is-open-accordion': isOpen },
      { 'btn_icon': icon }, { 'btn_close': close },
      { 'btn_favorite': favorite }, { 'btn_is-favorite': isFavorite },
      { 'btn_add': add }, { 'btn_is-added': isAdded },
      { 'btn_tab': tab },
      { 'btn_large': size === 'large' },
      { 'btn_small': size === 'small' },
   ]"
      >
   <span v-if="totalPrice || !totalPrice"><slot></slot></span>
   <span v-if="icon">
      <font-awesome-icon :icon="`fa-regular fa-${icon}`"
      />
      <font-awesome-icon :icon="`fa-solid fa-${icon}`"
      />
      <font-awesome-icon :icon="`fa-brands fa-${icon}`"
      />
   </span>
   <span v-else>{{ label }}</span>
   </button>
</template>

<style lang="scss" scoped>

.btn {
  transition: .2s;

   &:disabled {
    background-color: var(--grey-color);
    opacity: .5;
    cursor: default;
  }

  &_is-open-accordion {
   color: var(--danger-color) !important;
   svg {
      transition: transform .3s;
      transform: rotate(90deg);
   }

  }

  &_icon {
   .svg-inline--fa {
   height: toRem(18);
   @media (max-width:$tablet){
   @include adaptiveValue("height", 28, 22);
   }
}
//------------------------------------------------------------------------------------------------------
   .fa-opencart {
   color: var(--second-color);
   transition: color .2s;

   @media (any-hover: hover) {
   &:hover {
      color: var(--orange-color);
      }
   } 
}
  //-------------------------------------------------------------------------------------------
  .fa-magnifying-glass {
   color: var(--warning-hover);
}

.fa-chevron-right {
   width: toRem(8);
   transition: transform .3s;
}

  }

  &_burger {
   display: none;
   @media (max-width:$tablet){
      @include adaptiveValue("top", 55, 32);
      display: block;
      position: absolute;
      z-index: 100;
      right: toRem(1);
      width: toRem(26);
      height: toRem(18);

         span,
      &::before,
      &::after{
         content: '';
			right: 0;
			position: absolute;
			width: 100%;
			height: toRem(2);
			background-color: var(--grey-color);
         transition: all .3s ease;
      }
      &::before {
			top: 0;
		}
		&::after {
			bottom: 0;
		}
		span {
         width: 80%;
			top: calc(50% - toRem(1));
		   }
      }
  }

   &_close {
    position: relative;
    padding-inline: toRem(14);
    padding-block: toRem(14);

       &::before,
      &::after{
         content: '';
         position: absolute;
			right: toRem(5);
			width: toRem(18);
			height: toRem(2);
         background-color: rgb(0 0 0 / .1);
      }
      &::before {
         top: calc(50% - toRem(1));
         transform: rotate(-45deg);
		}
		&::after {
         bottom: calc(50% - toRem(1));
         transform: rotate(45deg);
		}

    @media (any-hover: hover) {
      &:hover {
         transform: scale(1.1);
         }
      }
    &:focus-visible {
         border: 2px solid var(--lime-color);
         outline: 2px solid var(--orange-color);
      }
    &:active {
         background-color: var(--danger-color);
      }
  }

   &_favorite {
   padding: toRem(6);
   border-radius: toRem(8);
   opacity: .6;
   color: var(--grey-color);
   box-shadow: 0px toEm(1, 15) toEm(1, 15) toRem(2) hsla(0, 0%, 0%, 0.07);

    span {
      display: flex;
      .fa-heart {
         @include adaptiveValue("height", 20, 16);
      }
    }
  }

   &_is-favorite {
   background-color: var(--danger-color);
   border: 1px solid var(--danger-color);

   span {
      background-color: var(--danger-color);
   }
   .fa-heart {
      color: var(--white-color);
      background-color: var(--danger-color);
   }
  }

   &_add {
   @include adaptiveValue("padding", 16, 14);
   position: relative;
   opacity: .4;
   border-radius: toRem(8);
   box-shadow: 0px toEm(1, 15) toEm(1, 15) toRem(2) hsla(0, 0%, 0%, 0.09);

       &::before,
      &::after{
         content: '';
         @include adaptiveValue("right", 9, 6);
         position: absolute;
			width: toRem(15);
			height: toRem(2);
			background-color: var(--grey-color);
         transition: .2s ease;
      }
      &::before {
         top: calc(50% - toRem(1));
         transform: rotate(-90deg);
		}
		&::after {
         bottom: calc(50% - toRem(1));
         transform: rotate(180deg);
		}
  }

   &_is-added {
   position: relative;
   border: 1px solid var(--success-color);
    background-color: var(--success-color);
    opacity: .8;
    transition: .1s ease-in;

       &::before,
      &::after{
         content: '';
         position: absolute;
			height: toRem(2);
			background-color: var(--white-color);
      }
      &::before {
         @include adaptiveValue("right", 7, 5);
         width: toRem(14);
         top: 45%;
         transform: rotate(-58deg);
		}
		&::after {
         width: toRem(8);
         right: 50%;
         bottom: 40%;
         transform: rotate(60deg);
		}
  }

   &_large {
   @media (min-width:toEm(550)){
      background:var(--lime-color) url('/image/arrow-next.svg') 90% 50% no-repeat;
   }

   span {
      display: inline-block;
      padding-block-end: 1px;
      color: var(--white-color);
   }
   @include adaptiveValue("padding-block", 18, 12);
   grid-column: span 2;
   margin-block-start: toEm(4, 15);
   border-radius: toEm(18, 15);
   border: 1px solid var(--lime-color);
   transition: background-color .3s ease;
   font-weight: 600;
   background-color: var(--lime-color);

   // &:disabled {
   //    cursor: default;
   //    background-color: var(--grey-color)
   // }
}

   &_small {
   position: relative;
    border-radius: toRem(6);
    padding-inline: toRem(10);
    padding-block: toRem(10);
    border: 1px solid var(--grey-color);
    opacity: .3;

       &::before,
      &::after{
         content: '';
         position: absolute;
			right: toRem(4);
			width: toRem(12);
			height: toRem(2);
         background-color: var(--grey-color);
      }
      &::before {
         top: calc(50% - toRem(1));
         transform: rotate(-45deg);
		}
		&::after {
         bottom: calc(50% - toRem(1));
         transform: rotate(45deg);
		}
}

   &_toggle-menu {
   background-color: var(--lime-color);
   opacity: .6;

   span {
         display: grid;
         align-items: center;

   .fa-angles-left {
   @include adaptiveValue("height", 22, 18);
   transition: transform .3s ease-out;

   @media (min-width:$tablet){
   padding-inline: toRem(3);
   padding-block: toRem(6);
   transform: rotate(-180deg);
   border: 1px solid var(--lime-color);
   border-radius: toRem(4);
   background-color: var(--lime-color);
   color: var(--white-color);
   }

   @media (max-width:$tablet){
      color: var(--lime-color);
   }
  }
}

   @media (max-width:$tablet){
      padding: toRem(8);
      border: toRem(4) solid var(--whitesmoke-color);
      border-radius: 50%;
      opacity: .9;
      background-color: var(--transparent-color);
   }

   // &:active {
   //    background-color: var(--lime-color);
   // }
  }

   &_is-open {
   @media (min-width:$tablet){
      border: 1px solid var(--lime-color);
      span {
         .fa-angles-left {
         transform: rotate(0deg);
      }
   }
  }

  .fa-angles-left {
      @media (max-width:$tablet){
         transform: rotate(180deg);
         color: var(--blue-color) !important;
         border-radius: 50%;
      }
  }
}

   &_tab {
   padding-block: toRem(10);
   padding-inline: toRem(12);
   white-space: nowrap;
   border-radius: toRem(8);
   border: 1px solid var(--transparent-color);
   background-color: var(--tab-color);

   span {
      color: var(--white-color);
      background-color: var(--transparent-color);
   }

    @media (any-hover: hover) {
         &:hover {
          background-color: var(--tab-hover);
        }
      }
   }
}
</style>