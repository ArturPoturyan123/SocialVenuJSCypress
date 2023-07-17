import { BasePage } from "./BasePage";

class InviteMemberPage extends BasePage {




    getUrl(){
        return super.getUrl("members/invite");
    }
}



export default InviteMemberPage;