import { useEffect } from 'react';

// Set event listener "click" in the button "Get Started"
const useHighlightNewsletterInput = () => {
    useEffect(() => {
        const communityButton = document.getElementById('communityGetStartedButton');
        const newsletterInput = document.getElementById('inputNewsletterFooter');
        
        if (communityButton) {
            communityButton.addEventListener('click', () => {
                // Add class to highlight input after scrolling is done
                setTimeout(() => {
                    newsletterInput.classList.add('highlighted');
                },300);
                // Remove class to highlight input
                setTimeout(() => {
                    newsletterInput.classList.remove('highlighted');
                },1000);
            });
        }
    });
};


export default useHighlightNewsletterInput;