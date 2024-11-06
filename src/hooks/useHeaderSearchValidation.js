import { useEffect } from 'react';

// Set event listener "submit" in the form
const useHeaderSearchValidation = (setIsInvalid) => {
    useEffect(() => {
        const searchForm = document.getElementById('headerEventSearchForm');

        if (searchForm) {
            searchForm.addEventListener('submit', (event) => {
                event.preventDefault();
                const searchInput = document.getElementById('inputSearchHeader');
                if (searchInput.value.length === 0) {
                    setIsInvalid(true);
                  } else {
                    setIsInvalid(false);
                    searchForm.submit();
                  }
            });
        }
    });
};

export default useHeaderSearchValidation;