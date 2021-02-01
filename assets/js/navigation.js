// $(document).ready(function () {
//     initNav()
// var nav = new Navigation();
//         $('body').bind('mousewheel', function(e){
//             if(e.originalEvent.wheelDelta /120 > 0) {
//                 nav.navUp();
//                 e.preventDefault()
//             }
//             else{
//                 nav.navDown()
//                 e.preventDefault()
//             }
//         });
//
// });
//
// function initNav() {
//     var $navCircle = $('.navCircle');
//     var $topSection = $('#top');
//     var $interSection = $('#inter');
//     var $soSoonSection = $('#soon');
//
//     var $toTop = $('#toTop');
//     var $toInter = $('#toInter');
//     var $toSoSoon = $('#toSoon');
//
//
//     $navCircle.click(function (e) {
//         var target = $(e.target.dataset.target);
//         scrollToElement(target);
//     })
//
// }
//
// /**
//  * Возвращает скролл до элемента
//  * @param el - элемент, до которого нужно получить скролл
//  * @returns {Integer} скролл
//  */
// function getScroll(el) {
//     return el.offset().top;
// }
// /**
//  * скроллирует страницу к элементу
//  * @param el {jQuery}
//  * @returns void
//  */
// function scrollToElement(el) {
//     $('html').animate({
//         scrollTop: getScroll(el)
//     }, 650)
// }
//
//
// var Navigation = function() {
//   this.activeItem = 0;
//   this.items = $('.navCircle');
// };
// Navigation.prototype.navUp = function () {
//     console.log(this.activeItem)
//     if (this.activeItem == 0) {
//         return;
//     }
//     var activeItem = this.activeItem - 1;
//     var nativeEl = this.items[this.activeItem]
//     var targetElement = $('#' + nativeEl.getAttribute('id'));
//     console.log('n:', {'el': nativeEl, 'id': nativeEl.getAttribute('id'), '$': targetElement})
//     scrollToElement(targetElement);
//     this.activeItem = activeItem;
// };
//
// Navigation.prototype.navDown = function() {
//     console.log(this.activeItem)
//     if (this.activeItem == this.items.length - 1) {
//         return;
//     }
//     var activeItem = this.activeItem + 1;
//     var nativeEl = this.items[this.activeItem]
//     var targetElement = $('#' + nativeEl.getAttribute('id'));
//     console.log('n:', {'el': nativeEl, 'id': nativeEl.getAttribute('id'), '$': targetElement})
//     scrollToElement(targetElement);
//     this.activeItem = activeItem;
// }
//
// // var Navigation = {
// //     activeItem: 0,
// //     items: $('.navCircle'),
// //     navUp: function () {
// //         console.log(this.activeItem)
// //         if (this.activeItem == 0) {
// //             return;
// //         }
// //         var activeItem = this.activeItem - 1;
// //         var nativeEl = this.items[this.activeItem]
// //         var targetElement = $('#' + nativeEl.getAttribute('id'));
// //         console.log('n:', {'el': nativeEl, 'id': nativeEl.getAttribute('id'), '$': targetElement})
// //         scrollToElement(targetElement)
// //     },
// //     navDown: function () {
// //         console.log(this.activeItem)
// //         if (this.activeItem == this.items.length - 1) {
// //             return;
// //         }
// //         var activeItem = this.activeItem + 1;
// //         var nativeEl = this.items[this.activeItem]
// //         var targetElement = $('#' + nativeEl.getAttribute('id'));
// //         console.log('n:', {'el': nativeEl, 'id': nativeEl.getAttribute('id'), '$': targetElement})
// //         scrollToElement(targetElement)
// //     }
// //
// // };