

export class ChurchesPaginator{
    public  current_page: number;
    public first_page_url: string;
    public from: number;
    public  last_page: number;
    public  last_page_url: string;
    public  next_page_url: string;
    public path: string;
    public per_page: number;
    public  prev_page_url: string;
    public to: number;
    public  total: number;
    public data: Church[];

     constructor(){
       this.current_page = null;
       this.from = null;
       this.last_page = null;
       this.per_page = null;
       this.to = null;
       this.total = null;
       this.first_page_url = '';
       this.last_page_url = '';
       this.next_page_url = '';
       this.prev_page_url = '';
       this.path = '';

     }
}
export class Church {
 public id: number;
 public church_name: string;
 public description: string;
 public location: string;
 public latitude: string;
 public longitude: string;
 public phone_number: string;
 public email: string;
 public denomination: string;
 public verified: boolean;
 public user_id: number;
 public created_at: string;
 public updated_at: string;
    constructor() {
    this.id = null;
    this.church_name = '';
    this.description = '';
    this.location = '';
    this.latitude = '';
    this.longitude = '';
    this.phone_number = '';
    this.email = '';
    this.denomination ='';
    this.verified = false;
    this.user_id = null;
    this.created_at = '';
    this.updated_at = '';

    }
}

