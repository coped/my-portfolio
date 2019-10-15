class PagesController < ApplicationController    
    def home
    end

    def contact_mailer
        if verify_recaptcha
            ContactMailer.contact(contact_details).deliver_now
            flash[:success] = "Message sent"
        end
        redirect_to root_url(anchor: "contact")
    end

    private
        def contact_details
            params.require(:contact).permit(:name, :email, :message)
        end
end
