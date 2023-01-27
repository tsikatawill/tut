import React from "react";

export const Subscribe = () => {
  return <p>Subscribe</p>;
};

const Form = () => {
  <form
    action="https://gmail.us14.list-manage.com/subscribe/post"
    method="POST"
  >
    <input type="hidden" name="u" value="d0d82bbf3e55809ba8f2d9512" />
    <input type="hidden" name="id" value="197aa9ba83" />

    <div id="mergeTable" className="mergeTable">
      <div className="mergeRow dojoDndItem mergeRow-text" id="mergeRow-2">
        <label for="MERGE2">
          Fullname <span className="req asterisk">*</span>
        </label>
        <div className="field-group">
          <input type="text" name="MERGE2" id="MERGE2" size="25" value="" />
        </div>
      </div>
      <div className="mergeRow dojoDndItem mergeRow-email" id="mergeRow-0">
        <label for="MERGE0">
          Email <span className="req asterisk">*</span>
        </label>
        <div className="field-group">
          <input
            type="email"
            autocapitalize="off"
            autocorrect="off"
            name="MERGE0"
            id="MERGE0"
            size="25"
            value=""
          />
        </div>
      </div>
    </div>
    <div className="submit_container clear">
      <input
        type="submit"
        className="formEmailButton"
        name="submit"
        value="Subscribe"
      />
    </div>
    <input
      type="hidden"
      name="ht"
      value="b17de9d98cc74e031d37ac77b00efcf5beedb38c:MTY3NDY0MDgzMi44MDM4"
    />
    <input type="hidden" name="mc_signupsource" value="hosted" />
  </form>;
};
