({
    init : function(component) {
        let myPageRef = component.get("v.pageReference") //ALL CONTEXT OF THE PAGE
        let id = myPageRef.state.c__id
        component.set("v.id", id)
    }
})