import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUsersStore = defineStore('users', {
  state: () => ({
    users: {
      0: {
        id: 1,
        firstName: 'Bruce',
        lastName: 'Wayne',
        email: 'B.Wayne@gmail.com',
        phone: '0700000027',
        location: 'Gotham',
        address: 'BatCave',
      },
      1: {
        id: 2,
        firstName: 'Alfred',
        lastName: 'Pennyworth',
        email: 'A.P@gmail.com',
        phone: '0702000016',
        location: 'Gotham',
        address: 'Wayne Manor',
      },
      2: {
        id: 3,
        firstName: 'Dick',
        lastName: 'Grayson',
        email: 'D.Grayson@gmail.com',
        phone: '0700000038',
        location: 'Bludhaven',
        address: 'Old City',
      },
      3: {
        id: 4,
        firstName: 'Jason',
        lastName: 'Todd',
        email: 'JTodd@gmail.com',
        phone: '0702000357',
        location: 'Gotham',
        address: 'Crime Alley',
      },
      4: {
        id: 5,
        firstName: 'Tim',
        lastName: 'Drake',
        email: 'Tim.D@gmail.com',
        phone: '0702000436',
        location: 'Jump City',
        address: 'Titans Tower',
      },
      5: {
        id: 6,
        firstName: 'Damien',
        lastName: 'Wayne',
        email: 'D.Wayne@gmail.com',
        phone: '0702000655',
        location: 'Nanda Parbat',
        address: 'League Of Assassins',
      },
    },

// find out where to input this
      addUser(payload) {
                //get the last key in the users object
                const existingKeys = Object.keys(this.users).map(Number);
                const maxKey = existingKeys.length > 0 ? Math.max(...existingKeys) : 0;
                const nextKey = maxKey + 1;
    
                //insert into object
                this.users[nextKey] = {
                    ...payload,
                    id: nextKey
                };
            },
      editUser(id, payload) {
                // find the book in the object
            const user = Object.entries(this.users).find(
                    ([key, item]) => item.id === id //compare the ids
                );
    
              if (!user) {
                    console.error(`No user found with id: ${id}`);
                    return;
                }
    
            const [objectKey] = user;
    
                //replace the existing user data with what was received in payload
                this.users[objectKey] = {
                    ...this.users[objectKey], 
                    ...payload
                };
            },
      deleteUser(id) {
            const user = Object.entries(this.users).find(
                    ([key, item]) => item.id === id
                );
              if (!user) {
                    console.error(`Cannot delete: No user found id: ${id}`);
                    return;
                }
    
            const [objectKey] = user;
                delete this.users[objectKey];
            }

            }
        ),
    }
)
