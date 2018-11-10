const fetchFflData = () => 
fetch('/api')
    .then(function (response) {
            return response.json();
        }
    )

export default fetchFflData;