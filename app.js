const primaryHeader = document.querySelector('header')
const scrollWatcher = document.createElement('div')

scrollWatcher.setAttribute('data-scroll-watcher' ,  '')
primaryHeader.before(scrollWatcher)

const navObserver = new IntersectionObserver((en) => {
    console.log(en)
    primaryHeader.classList.toggle('sticking', !    en[0].isIntersecting)
}, {rootMargin: '200px 0px 0px 0px'})

navObserver.observe(scrollWatcher)