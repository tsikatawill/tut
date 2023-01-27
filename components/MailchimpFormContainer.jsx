import { CustomForm } from "./CustomForm";
import MailchimpSubscribe from "react-mailchimp-subscribe";

export const MailchimpFormContainer = () => {
  const postUrl =
    "https://gmail.us14.list-manage.com/subscribe/post?u=d0d82bbf3e55809ba8f2d9512&id=197aa9ba83";
  return (
    <div>
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }) => (
          <CustomForm
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        )}
      />
    </div>
  );
};
