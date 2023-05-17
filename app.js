const primaryHeader = document.querySelector('header')
const scrollWatcher = document.createElement('div')

scrollWatcher.setAttribute('data-scroll-watcher' ,  '')
primaryHeader.before(scrollWatcher)

const navObserver = new IntersectionObserver((en) => {
    console.log(en)
    primaryHeader.classList.toggle('sticking', !    en[0].isIntersecting)
    // root margin is used for applying style when window scrolled 200px 
}, {rootMargin: '200px 0px 0px 0px'})

navObserver.observe(scrollWatcher)