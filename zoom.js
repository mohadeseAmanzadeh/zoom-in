(function(window) {
    let defineLibrary = () => ({
        init : function(galleryId) {
            let container = document.querySelector(galleryId);

            if(! container) {
                console.error('please add the correct element');
                return;
            }

            let firstImage = container.querySelector('.image');
            let zoomed = container.querySelector('.zoomed');

            if(! zoomed) {
                console.error('please add .zoomed tag');
                return;  
            }

            if(! firstImage) {
                console.error('please add images with .image class to galerry');
                return;
            }

            zoomed.style.backgroundImage = `url(${firstImage.src})`
            

            container.addEventListener('click' , function(e) {
                let elem = e.target;

                if(elem.classList.contains('image')) {
                    zoomed.style.backgroundImage = `url(${elem.src})`
                }
            })

            zoomed.addEventListener('mouseenter' , function() {
                this.style.backgroundSize = '250%'
            })


            zoomed.addEventListener('mousemove' , function(e) {
                let dimentions = this.getBoundingClientRect()
                let x = e.clientX - dimentions.left;
                let y = e.clientY - dimentions.top;

                x = Math.round(100 / (dimentions.width/ x));
                y = Math.round(100 / (dimentions.height/ y));
                
                this.style.backgroundPosition = `${x}% ${y}%`
            })
            
            zoomed.addEventListener('mouseleave' , function() {
                this.style.backgroundSize = 'cover';
                this.style.backgroundPosition = 'center';
            })
        }
    })

    if (typeof(zoom) === 'undefined') {
        window.zoom = defineLibrary();
    } else {
        console.log('library already defined');
    }
})(window)