import React from "react";
import "./../styles/components/pages/ContactPage.css"

const ContactPage = (props) => {
    return (
        <main className="contactHolder">
            <form>
                <input name="name" type="text" class="feedback-input" placeholder="Name" />
                <input name="email" type="text" class="feedback-input" placeholder="Email" />
                <textarea name="text" class="feedback-input" placeholder="Comment"></textarea>
                <input type="submit" value="SUBMIT" />
            </form>
        </main>
    );
}

export default ContactPage;