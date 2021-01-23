({
    onInit: function(component, event, helper) {
        const searchTerm = component.get("v.searchTerm");
        helper.handleSearch(component, searchTerm);
    },
    onSearchTermChange: function(component, event, helper) {
        const searchTerm = component.get("v.ssearchTerm");
        helper.handleSearch(component, searchTerm);
    }
})