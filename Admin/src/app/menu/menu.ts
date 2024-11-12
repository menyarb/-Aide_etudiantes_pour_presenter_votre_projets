import { CoreMenu } from '@core/types'

export const menu: CoreMenu[] = [
  {
    id: 'home',
    title: 'Home',
    translate: 'MENU.HOME',
    type: 'item',
    icon: 'home',
    url: 'home'
  },

  {
    id: 'Admin',
    title: 'Admin',

    type: 'collapsible',
    icon: 'user',
    badge: {
      title: '2',
     
      classes: 'badge-light-warning badge-pill'
    },
    children: [
      {
        id: 'Ajouter_Admin',
        title: 'Ajouter_Admin',
      
        type: 'item',
        role: ['Admin'], 
        icon: 'circle',
        url: 'ajouter_admin'
      },

      {
        // If role is not assigned will be display to all
        id: 'Liste_Admin',
        title: 'Liste_Admin',
   
        type: 'item',
        icon: 'circle',
        url: 'liste_admin'
      }
    ]
  },
  {
    id: 'Client',
    title: 'Client',

    type: 'collapsible',
    icon: 'user',
    badge: {
      title: '2',
     
      classes: 'badge-light-warning badge-pill'
    },
    children: [
      {
        id: 'Ajouter_Client',
        title: 'Ajouter_Client',
      
        type: 'item',
        role: ['Client'], 
        icon: 'circle',
        url: 'ajouter_client'
      },

      {
        // If role is not assigned will be display to all
        id: 'Liste_Client',
        title: 'Liste_Client',
   
        type: 'item',
        icon: 'circle',
        url: 'liste_client'
      }
    ]
  },
  
  {
    id: 'Condidat',
    title: 'Condidat',

    type: 'collapsible',
    icon: 'user',
    badge: {
      title: '1',
     
      classes: 'badge-light-warning badge-pill'
    },
    children: [
     
   
      {
        // If role is not assigned will be display to all
        id: 'Ajouter_condidat',
        title: 'Ajouter_condidat',
   
        type: 'item',
        icon: 'circle',
        url: 'ajouter_condidat'
      },
      {
        // If role is not assigned will be display to all
        id: 'Liste_condidat',
        title: 'Liste_Condidat',
   
        type: 'item',
        icon: 'circle',
        url: 'liste_condidat'
      }
    ]
  },
  {
    id: 'Contact',
    title: 'Contact',

    type: 'collapsible',
    icon: 'user',
    badge: {
      title: '1',
     
      classes: 'badge-light-warning badge-pill'
    },
    children: [
     
   
      {
        // If role is not assigned will be display to all
        id: 'Liste_Contact',
        title: 'Liste_Contact',
   
        type: 'item',
        icon: 'circle',
        url: 'liste_contact'
      }
    ]
  },
  {
    id: 'Categorie',
    title: 'Categorie',

    type: 'collapsible',
    icon: 'archive',
    badge: {
      title: '3',
     
      classes: 'badge-light-warning badge-pill'
    },
    children: [
      {
        id: 'Ajouter_Categorie',
        title: 'Ajouter_Categorie',
      
        type: 'item',
       
        icon: 'circle',
        url: 'ajouter_categorie'
      },
   
      {
        // If role is not assigned will be display to all
        id: 'Liste_Categorie',
        title: 'Liste_Categorie',
   
        type: 'item',
        icon: 'circle',
        url: 'liste_categorie'
      }
    ]
  },
  {
    id: 'Offre',
    title: 'Offre',

    type: 'collapsible',
    icon: 'archive',
    badge: {
      title: '3',
     
      classes: 'badge-light-warning badge-pill'
    },
    children: [
      {
        id: 'Ajouter_Offre',
        title: 'Ajouter_Offre',
      
        type: 'item',
       
        icon: 'circle',
        url: 'ajouter_offre'
      },
   
      {
        // If role is not assigned will be display to all
        id: 'Liste_Offre',
        title: 'Liste_Offre',
   
        type: 'item',
        icon: 'circle',
        url: 'liste_offre'
      }
    ]
  },
]
