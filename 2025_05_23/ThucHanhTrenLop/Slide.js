const slides = [
            "https://images3.alphacoders.com/716/thumb-350-716428.webp",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqBcukeGlF7jNwfTxXVV-Vv7zW-4CRNcq7wA&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDsa1mtOh3e4TUMnIHe8rHx-xAM7hjnleMAA&s"
        ];
        const slide = document.querySelector('.slide img');
        s = 0;

        function showSlide(n) {
            s = (n + slides.length) % slides.length;
            slide.src = slides[s];
        }

        document.getElementById('prev').addEventListener('click', function click(){
            showSlide(s - 1);
        });
        document.getElementById('next').addEventListener('click', function click(){
            showSlide(s + 1);
        });
        showSlide(s);