({
    onAccountsLoaded: function(component, event, helper) {
        const cols = [
            {
                'label': 'Name',
                'fieldName': 'Name',
                'type': 'text'
            },
            {
                'label': 'Phone',
                'fieldName': 'Phone',
                'type': 'text'
            },
            {
                'label': 'Website',
                'fieldName': 'Website',
                'type': 'url'
            },
            {
                'label': 'Action',
                'type': 'button',
                'typeAttributes': {
                    'label': 'View details',
                    'name': 'view_details'
                }
            }
        ];
        component.set('v.cols', cols);
        component.set('v.rows', event.getParam('accounts'));
    },
    onRowAction: function(component, event, helper) {
        const action = event.getParam('action');
        const row = event.getParam('row');
        if (action.name == 'view_details') {
            const navigation = component.find('navigation');
            navigation.navigate({
                'type': 'standard_recordPage',
                'attributes': {
                    'objectApiName': 'Account',
                    'recordId': row.Id,
                    'actionName': 'view'
                }
            });
        }
    }
})
