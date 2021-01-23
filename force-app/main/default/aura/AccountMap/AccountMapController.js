({
    onAccountsLoaded: function(component, event, helper) {
        const mapMarkers = [];
        const accounts = event.getParam('accounts');
        for (let i = 0; i < accounts.length; i++) {
            const account = accounts[i];
            const marker = {
                'location': {
                    'Street': account.BillingStreet,
                    'City': account.BillingCity,
                    'PostalCode': account.BillingPostalCode
                },
                'title': account.Name,
                'description': (
                    'Phone: ' + account.Phone +
                    'Website: ' + account.Website
                ),
                'icon': 'standard.location'
            };
            mapMarkers.push(marker);
        }
        component.set('v.mapMarkers', mapMarkers);
    }
})
