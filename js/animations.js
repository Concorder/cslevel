gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
    // Add this at the beginning to fix any overflow issues
    gsap.config({
        force3D: true,
        autoKillThreshold: 1
    });

    // Header animation
    gsap.from("header", {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });

    // Nav items stagger animation
    gsap.from(".nav-item", {
        y: -20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        delay: 0.5
    });

    // From right animation
    gsap.utils.toArray('[data-gsap="from-right"]').forEach(element => {
        gsap.from(element, {
            x: 50,
            opacity: 0,
            duration: 0.6,
            scrollTrigger: {
                trigger: element,
                start: "top 80%"
            }
        });
    });

    // From left animation
    gsap.utils.toArray('[data-gsap="from-left"]').forEach(element => {
        gsap.from(element, {
            x: -50,
            opacity: 0,
            duration: 0.6,
            scrollTrigger: {
                trigger: element,
                start: "top 80%"
            }
        });
    });

    // From bottom animation
    gsap.utils.toArray('[data-gsap="from-bottom"]').forEach(element => {
        gsap.from(element, {
            y: 50,
            opacity: 0,
            duration: 0.6,
            scrollTrigger: {
                trigger: element,
                start: "top 85%"
            }
        });
    });

    // Stagger children animation for delivery-section
    gsap.utils.toArray('.delivery-grid .delivery-item').forEach((element, index) => {
        gsap.from(element, {
            opacity: 0,
            y: 30,
            duration: 0.4,
            delay: index * 0.1, // Stagger effect
            scrollTrigger: {
                trigger: ".delivery-section",
                start: "top 80%", // Start when the section is 80% visible
                end: "bottom 20%", // End when the section is almost out of view
                toggleActions: "play none none reverse",
                markers: false // Set to true for debugging if needed
            }
        });
    });

    // Remove all previous highlight section animations and replace with this one
    gsap.utils.toArray('.highlight-block').forEach((element, index) => {
        gsap.from(element, {
            opacity: 0,
            y: 30,
            duration: 0.6,
            delay: index * 0.2,
            scrollTrigger: {
                trigger: element,
                start: "top 85%",
                toggleActions: "play none none reverse"
            }
        });
    });

    // Hero banner animation
    gsap.from(".hero-banner .subheading", {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.5
    });
    
    gsap.from(".hero-banner h1", {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.8
    });
    
    gsap.from(".hero-banner .hero-text", {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 1.1
    });
});
