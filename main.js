let timer = setInterval(()=>{
    const timestampInput = document.getElementById("commit_timestamp");
    const date = new Date();
    const options = {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
        timeZone: "UTC",
    };
    const currentTime = date.toLocaleTimeString("en-US");
    const currentDate = date.toLocaleDateString("en-US", options);
    timestampInput.value = `${currentDate} ${currentTime}`;
}, 1000);

