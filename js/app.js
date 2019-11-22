$(document).ready(() => {
    $('.banner').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInLeft',
        offset: 300
    });
    $('.service-right').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInRight',
        offset: 300
    });
    $('.service-right-big').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInRightBig',
        offset: 300
    });
    $('.service-left').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInLeft',
        offset: 300
    });
    $('.service-left-big').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInLeftBig',
        offset: 300
    });
    $('.choose-grid').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated flipInY',
        offset: 300
    });
    $('.feature-bg').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated zoomInDown',
        offset: 300
    });
    $('.gallery-bg').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated zoomInDown',
        offset: 300
    });
    $('.ourteam').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated rollIn',
        offset: 300
    });
});