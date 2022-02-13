const checkboxex = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(e) {
    // Check if they had the shift key down
    // and check that they are checking it
    let inBetween = false;
    if(e.shiftKey && this.checked) {
        // Loop over every checkbox
        checkboxex.forEach(checkbox => {
            
            if(checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
            }

            if(inBetween) {
                checkbox.checked = true;
            }
        });
    }
    lastChecked = this;

}

checkboxex.forEach(checkbox => { checkbox.addEventListener('click', handleCheck); });