import { CollectionReference } from '@angular/fire/firestore';

export interface User {
    id: string;
    name : string;
    email : string;
    password : string;
    type : string;
    cart: CollectionReference;
}
