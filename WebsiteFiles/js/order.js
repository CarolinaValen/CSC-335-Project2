let saveFile = () => {
    	
    // Get the data from each element on the form.
    const name = document.getElementById('Name');
    const email = document.getElementById('Email');
    const tea = document.getElementById('Tea');
    const quantity = document.getElementById('Quantity');
    
    
    // This variable stores all the data.
    let data = 
        '\r Name: ' + name.value + ' \r\n ' + 
        'Email: ' + email.value + ' \r\n ' + 
        'Tea: ' + tea.value + ' \r\n ' + 
        'Quantity: ' + quantity.value;
       
    
    // Convert the text to BLOB.
    const textToBLOB = new Blob([data], { type: 'text/plain' });
    const sFileName = 'Order.txt';	   // The file to save the data.

    let newLink = document.createElement("a");
    newLink.download = sFileName;

    if (window.webkitURL != null) {
        newLink.href = window.webkitURL.createObjectURL(textToBLOB);
    }
    else {
        newLink.href = window.URL.createObjectURL(textToBLOB);
        newLink.style.display = "none";
        document.body.appendChild(newLink);
    }

    newLink.click(); 
}