// Start tabs.js
function tab () {

    'use strict';

    /**
     * tabs
     *
     * @description The Tabs component.
     * @param {Object} options The options hash
     */
    var tabs = function (options) {

        var el = document.querySelector(options.el);
        if(el) {
            var tabNavigationLinks = el.querySelectorAll(options.tabNavigationLinks);
            var tabContentContainers = el.querySelectorAll(options.tabContentContainers);
            var activeIndex = 0;
            var initCalled = false;
       
        /**
         * init
         *
         * @description Initializes the component by removing the no-js class from
         *   the component, and attaching event listeners to each of the nav items.
         *   Returns nothing.
         */
        var init = function () {
            if (!initCalled) {
                initCalled = true;
                el.classList.remove('no-js');

                for (var i = 0; i < tabNavigationLinks.length; i++) {
                    var link = tabNavigationLinks[i];
                    handleClick(link, i);
                }
            }
        };

        /**
         * handleClick
         *
         * @description Handles click event listeners on each of the links in the
         *   tab navigation. Returns nothing.
         * @param {HTMLElement} link The link to listen for events on
         * @param {Number} index The index of that link
         */
        var handleClick = function (link, index) {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                goToTab(index);
            });
        };

        /**
         * goToTab
         *
         * @description Goes to a specific tab based on index. Returns nothing.
         * @param {Number} index The index of the tab to go to
         */
        var goToTab = function (index) {
            if (index !== activeIndex && index >= 0 && index <= tabNavigationLinks.length) {
                tabNavigationLinks[activeIndex].classList.remove('is-active');
                tabNavigationLinks[index].classList.add('is-active');
                tabContentContainers[activeIndex] ? tabContentContainers[activeIndex].classList.remove('is-active') : undefined;
                tabContentContainers[index] ? tabContentContainers[index].classList.add('is-active') : undefined;
                activeIndex = index;
            }
        };

        /**
         * Returns init and goToTab
         */
        return {
            init: init,
            goToTab: goToTab
        };
    }
    };

    /**
     * Attach to global namespace
     */
    window.tabs = tabs;

};
// End tabs.js


// Initialise at bottom of HTML in a <script> tag or within your main js bundle somewhere.

// Set 1 


// Set 2
// var myTabs2 = tabs({
//     el: '#tabs2',
//     tabNavigationLinks: '.tab-link',
//     tabContentContainers: '.tab-content'
// });

// Initialise Set 1
setTimeout(()=>{
    tab();
    var myTabs = tabs({
        el: '#tabs',
        tabNavigationLinks: '.tab-link',
        tabContentContainers: '.tab-content'
    });
    if(myTabs){
        myTabs.init();
        //hotFix
        const tabLinks = document.querySelectorAll('.tab-link');
        if(tabLinks){
            tabLinks[1].click();
        }
      
    }
 },100);

// // Initialise Set 2 
// myTabs2.init();