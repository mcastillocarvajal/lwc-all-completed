({
    handleMsg : function(component, message) {
        if(message != null && message.getParam("lmsData") != null){
            component.set("v.msgReceived", message.getParam("lmsData").value)
        }
    },

    inputHandler : function(component, event) {
        component.set("v.msgValue", event.target.value)
    },

    publishMessage : function(component){
        let msg = component.get("v.msgValue")
        let message = {
            lmsData: {
                value:msg
            }
        }
        component.find("SampleMessageChannel").publish(message)
    }
})