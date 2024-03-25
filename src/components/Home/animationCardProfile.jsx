export function animationCardProfile(bannerRefs, labelRefs) {

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('onAnimateProfile');
            } else {
                entry.target.classList.remove('onAnimateProfile');
            }
        });
    }, options);

    bannerRefs.current.forEach((ref) => {
        observer.observe(ref);
    });

    labelRefs.current.forEach((ref) => {
        observer.observe(ref);
    });

    return () => {
        observer.disconnect();
    };
}
