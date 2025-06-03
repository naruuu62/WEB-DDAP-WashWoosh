function flipCard(id){
    const card = document.getElementById(id);
    card.classList.toggle('flipped');
}

function toggleMenu(id) {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('show');
}

document.addEventListener('DOMContentLoaded', function(){
    const paymentOptions = document.querySelectorAll('.card-menu-bayar');
    paymentOptions.forEach(option => {
        option.addEventListener('click', function() {
            const selectedOption = document.querySelector('.card-menu-bayar.selected');
            if (selectedOption) {
                selectedOption.classList.remove('selected');
            }
            this.classList.add('selected');
        });
    });
});




