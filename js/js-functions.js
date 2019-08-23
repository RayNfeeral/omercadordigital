function isReferredNotFromMe() {
    try {
        const referrer = new URL(document.referrer);
        return !(referrer.origin === location.origin);
    } catch(invalid_url_error) {
        return false;
    }
}

document.addEventListener('scroll', () => {
    if(isReferredNotFromMe())
        $('#modalNewsletter').modal('show')
})
