const navigation = document.querySelector('.navigation')
window.addEventListener('scroll', fixNavigation)

function fixNavigation() {
    if(window.scrollY > navigation.offsetHeight + 150) {
        navigation.classList.add('active')
    } else {
        navigation.classList.remove('active')
    }
}

