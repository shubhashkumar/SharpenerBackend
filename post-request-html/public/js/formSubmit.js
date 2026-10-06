const formSubmit = (event) => {
    event.preventDefault();
    const productName= event.target.productName.value;
    console.log(productName); 
    const obj=
    {
        "productName": productName
    }
    console.log(obj);
   
    axios.post('http://localhost:4000/api/form', obj)
    
    .then((response) => {
        console.log(response.data);
       
    })
    .catch((error) => {
        console.error('Error submitting form:', error);
    });
    event.target.reset();
}
  