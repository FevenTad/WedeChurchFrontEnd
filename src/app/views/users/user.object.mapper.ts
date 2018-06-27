

export class UsersPaginator{
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
    public data: User[];

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
export class User {
    public id: number;
    public first_name: string;
    public last_name: string;
    public user_name: string;
    public sex: string;
    public city: string;
    public region: string;
    public phone_number: string;
    public email: string;
    public remember_token: number;
    public created_at: string;
    public updated_at: string;
       constructor() {
       this.id = null;
       this.first_name = '';
       this.last_name = '';
       this.user_name = '';
       this.sex = '';
       this.city = '';
       this.region ='';
       this.phone_number = '';
       this.email = '';
       this.remember_token = null;
       this.created_at = '';
       this.updated_at = '';
   
       }
   }
   export class UserRole{
       public email: string;
       public role: string;
         constructor(){
             this.email = '';
             this.role = '';
         }
   }