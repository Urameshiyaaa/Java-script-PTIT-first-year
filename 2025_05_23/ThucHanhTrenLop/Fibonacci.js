//TÍnh số Fibonacci thứ n
        n=parseInt(prompt("nhập số thứ n: "))
        function fibonacci(n){
            m=0
            p=0
            q=1
            if (n<=0){return p}
            if (n == 1){return q}
            for (i=2; i<=n; i++) {
                m=p+q;
                q=p;
                p=m;
            }
            return m
        }
        document.writeln(fibonacci(n))