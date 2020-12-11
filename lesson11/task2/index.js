'use strict'

const sortContacts = (contacts, isAsc=true) =>{
    if (!Array.isArray(contacts)){
        return null;
    }
    const result = contacts
        .sort((a,b)=>{
            if (isAsc){
                return a.name.localeCompare(b.name);
            } else {
                return b.name.localeCompare(a.name);
            }
        });
    return result;
}



const contacts = [
    { name: 'Aom', phoneNumber: '777-77-77' },
    { name: 'Bom', phoneNumber: '777-77-77' },
    { name: 'Zom', phoneNumber: '777-77-77' },
    { name: 'Xom', phoneNumber: '777-77-77' },
    { name: 'Oom', phoneNumber: '777-77-77' },
];
console.log(sortContacts(1,false));