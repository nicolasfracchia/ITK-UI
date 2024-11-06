import { useEffect } from 'react';
import { useRouter } from 'next/router';

const toggleMobileMenu = () => {
    const mainMenuHeader = document.getElementById('mainMenuHeader');
    if (mainMenuHeader) {
        mainMenuHeader.classList.toggle('menuOpen');
    }
}

const useMobileMenuToggle = () => {
    const router = useRouter();

    useEffect(() => {
        const mainMenuHeader = document.getElementById('mainMenuHeader');
        const toggleButton = document.getElementById('toggleMobileMenu');

        if (toggleButton) {
            toggleButton.addEventListener('click', toggleMobileMenu);
        }

        const handleRouteChange = () => {
            // THIS CLOSES THE MENU WHEN CHANGING THE ROUTE
            if (mainMenuHeader) {
                mainMenuHeader.classList.remove('menuOpen');
            }
        };

        router.events.on('routeChangeComplete', handleRouteChange);

        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router]);
};

export default useMobileMenuToggle;