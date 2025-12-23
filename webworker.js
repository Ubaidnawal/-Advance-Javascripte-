onmessage = (event)=>{
if(event.data === 'start computation') {

    const result = 'computation in bacground  thread !';
    postMessage(result);
}

};





