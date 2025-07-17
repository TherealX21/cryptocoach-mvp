// Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Simulated price updates
        function updatePrices() {
            const btcPrice = document.getElementById('btc-price');
            const ethPrice = document.getElementById('eth-price');
            const btcChange = document.getElementById('btc-change');
            const ethChange = document.getElementById('eth-change');
            
            // Generate random price changes
            const btcPriceNum = 45230.52 + (Math.random() - 0.5) * 1000;
            const ethPriceNum = 3145.67 + (Math.random() - 0.5) * 100;
            
            btcPrice.textContent = `$${btcPriceNum.toLocaleString('en-US', {minimumFractionDigits: 2})}`;
            ethPrice.textContent = `$${ethPriceNum.toLocaleString('en-US', {minimumFractionDigits: 2})}`;
            
            // Random percentage changes
            const btcChangeNum = (Math.random() - 0.5) * 5;
            const ethChangeNum = (Math.random() - 0.5) * 5;
            
            btcChange.textContent = `${btcChangeNum >= 0 ? '+' : ''}${btcChangeNum.toFixed(2)}%`;
            ethChange.textContent = `${ethChangeNum >= 0 ? '+' : ''}${ethChangeNum.toFixed(2)}%`;
            
            btcChange.className = `price-change ${btcChangeNum >= 0 ? 'positive' : 'negative'}`;
            ethChange.className = `price-change ${ethChangeNum >= 0 ? 'positive' : 'negative'}`;
        }

        // Update prices every 5 seconds
        setInterval(updatePrices, 5000);

        // Interactive demo selection
        function selectDemo(type) {
            // Remove active class from all buttons
            document.querySelectorAll('.demo-button').forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Add active class to clicked button
            event.target.classList.add('active');
            
            // Update demo content based on type
            const container = document.querySelector('.interactive-demo .chart-container span');
            switch(type) {
                case 'spot':
                    container.textContent = 'Practice Spot Trading Without Risk';
                    break;
                case 'futures':
                    container.textContent = 'Learn Futures Trading Strategies';
                    break;
                case 'options':
                    container.textContent = 'Master Options Trading Techniques';
                    break;
            }
        }

        // Animate progress bars on scroll
        function animateProgress() {
            const progressBars = document.querySelectorAll('.progress-fill');
            progressBars.forEach(bar => {
                const rect = bar.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    const width = bar.style.width;
                    bar.style.width = '0%';
                    setTimeout(() => {
                        bar.style.width = width;
                    }, 100);
                }
            });
        }

        // Add scroll event listener
        window.addEventListener('scroll', animateProgress);

        // Add hover effects for feature cards
        document.querySelectorAll('.feature-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px) scale(