const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			url: 'https://playground.4geeks.com/contact'
		},
		actions: {
			
			selectContact: (contact) => setStore({selected: contact}),
			createAgenda: async ()=> {
				try {
					const resp = await fetch(getStore().url+'/agendas/lola', {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json'
						}
					});
					if (!resp.ok) throw new Error('Error while creating agenda');
					
					getActions().getAgenda();
				} catch (error) {
					console.err 
					if (resp.status===404) return getActions().createAgenda()
					if (!resp.ok) throw new Error('Error while fetching agenda ')
					const data = await resp.json();
					setStore({contacts: data.contacts});
				} catch (error) {
					console.error(error);
				}
			},
			createContact: async (contact) => {
					try {
					const resp = await fetch(getStore().url+'/agendas/lola/contacts', {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify(contact)
					})
					if (!resp.ok) throw new Error('Error while creating contact')
					
					return getActions().getAgenda()
				} catch (error) {
					console.error(error);
				}
			},
			editContact: async (contact) => {
					try {
					const resp = await fetch(getStore().url+'/agendas/lola/contacts/'+contact.id, {
						method: 'PUT',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify(contact)
					})
					if (!resp.ok) throw new Error('Error while ')
				
					getActions().getAgenda();
				} catch (error) {
					console.error(error);
				}
			},
			deleteContact: async (id) => {
					try {
					const resp = await fetch(getStore().url+'/agendas/lola/contacts/'+id, {
						method: 'DELETE'
					})
					if (!resp.ok) throw new Error('Error while deleting');
				
					getActions().getAgenda();
				} catch (error) {
					console.error(error);
				}
			},
		}
	};
};

export default getState;