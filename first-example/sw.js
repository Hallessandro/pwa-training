self.addEventListener("fetch", function(event){
    if (/\.jpg$/ .test(event.request.url)){
        event.respondWith(fetch('https://media0.giphy.com/media/c4Nc0v0g15g9G/giphy.gif'));
    }
})