import { onUnmounted } from 'vue'

// export function useCloseDialogElement(dialogElement) {
//    dialogElement.addEventListener("click", closeOnBackDropClick)

//       function closeOnBackDropClick ({ currentTarget, target }) {
//          const dialogElement = currentTarget
//          const isClickedOnBackDrop = target === dialogElement
//          if (isClickedOnBackDrop) {
//             dialogElement.close()
//       }
//    }

//    onUnmounted(() => {
//       dialogElement.removeEventListener("click", closeOnBackDropClick);
//     })
// }