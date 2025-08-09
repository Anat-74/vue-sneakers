import { ref } from 'vue';

// export function useDarkMode() {
//    const getInitialDarkMode = () => {
//       const userPreference = localStorage.getItem('darkMode')
//       return userPreference === 'true' ? true : false
//     }

//     const darkMode = ref(getInitialDarkMode())
    
//     const saveDarkModePreference = (isDarkMode) => {
//       localStorage.setItem('darkMode', isDarkMode)
//     }
    
//     const toggleDarkMode = () => {
//       darkMode.value = !darkMode.value
//       saveDarkModePreference(darkMode.value)
//    }

//    return { darkMode, toggleDarkMode }
// }