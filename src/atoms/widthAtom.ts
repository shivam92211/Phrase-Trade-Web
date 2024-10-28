import { useEffect } from 'react';
import { atom, useRecoilState } from 'recoil';

// Recoil atom to store screen width state
const isSmallScreenState = atom({
    key: 'isSmallScreenState', // unique ID
    default: false, // initial value
});

const useSmallScreen = () => {
    const [isSmallScreen, setIsSmallScreen] = useRecoilState(isSmallScreenState);

    // Check screen width and update the state
    const checkScreenWidth = () => {
        const isSmall = window.innerWidth <= 768; // 768px for typical mobile screen width
        setIsSmallScreen(isSmall);
    };

    useEffect(() => {
        checkScreenWidth(); // Initial check
        window.addEventListener('resize', checkScreenWidth); // Add event listener

        return () => {
            window.removeEventListener('resize', checkScreenWidth); // Cleanup on unmount
        };
    }, [setIsSmallScreen]);

    return isSmallScreen;
};

export default useSmallScreen;
