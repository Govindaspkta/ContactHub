import React from 'react';
const ContactList =(props) =>{
    console.log(props);

    const renderContactList=props.contacts.map((contact) => {
        return(
    <ContactCard ></ContactCard>
            
    );
});
    return(
<div className='ui celled list'>
   {renderContactList}
</div>
    );
};
export default ContactList;