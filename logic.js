console.log(Notification.permission)

if(Notification.permission === "granted"){
    //showNoti()
}else if(Notification.permission !== "denied"){
    Notification.requestPermission().then(permission =>{
      showNoti()
      if(permission === "granted"){
        showNoti()
      }
    })
}

function showNoti(){
    const notification = new Notification("new Message", {
        body: "hello test Function running"
        
    })
}