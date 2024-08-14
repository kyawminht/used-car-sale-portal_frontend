
import { ref } from 'vue';

const isLoggedIn = ref(false);

export function useAuth() {

    if (localStorage.getItem('token')) {
        isLoggedIn.value = true;
    }

    function logout() {
        localStorage.removeItem('token');
        isLoggedIn.value = false;
    }

    return { isLoggedIn, logout };
}
